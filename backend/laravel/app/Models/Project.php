<?php

declare(strict_types=1);

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Carbon;

class Project extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'freee_project_code',
        'name',
        'contract',
        'phase',
        'start_date',
        'end_date',
    ];

    protected $casts = [
        'start_date' => 'date:Y-m-d',
        'end_date' => 'date:Y-m-d',
    ];

    // リレーション: Project は複数の AssignmentMember を持つ
    public function assignmentMembers()
    {
        return $this->hasMany(AssignmentMember::class);
    }

    // リレーション: Project は複数の WorkCost を持つ
    public function workCosts()
    {
        return $this->hasMany(WorkCost::class);
    }

    // リレーション: Project は複数の Outsource を持つ
    public function outsources()
    {
        return $this->hasMany(Outsource::class);
    }

    // リレーション: Project は単数の Estimation を持つ
    public function estimation()
    {
        return $this->hasOne(Estimation::class);
    }

    public function achievementPersonMonth()
    {
        $assignmentMembers = $this->assignmentMembers->where('project_id', $this->id);
        // 実績工数
        $achievementPersonMonth = 0;
        foreach ($assignmentMembers as $assignmentMember) {
            $achievementPersonMonth += $assignmentMember->achievementTotalPersonMonth();
        };

        return round($achievementPersonMonth, 2);
    }

    public function achievementCost()
    {
        $assignmentMembers = $this->assignmentMembers->where('project_id', $this->id);
        // 実績工数
        $achievementCost = 0;
        foreach ($assignmentMembers as $assignmentMember) {
            $achievementCost += $assignmentMember->achievementTotalCost();
        };

        return round($achievementCost, 0);
    }

    public function remainingPersonMonth()
    {
        $achievementPersonMonth = $this->achievementPersonMonth();
        $remainingPersonMonth = $this->estimation->estimate_person_month - $achievementPersonMonth;
        return round($remainingPersonMonth, 2);
    }

    public function forecastCost()
    {
        // 実績原価
        $achievementCost = $this->achievementCost();
        // 実績工数
        $achievementPersonMonth = $this->achievementPersonMonth();
        // 残工数
        $remainingPersonMonth = $this->remainingPersonMonth();
        // 着地原価 = 実績原価/実績工数*残工数 + 実績原価
        $forecastCost = $achievementCost / $achievementPersonMonth * $remainingPersonMonth + $achievementCost;

        return round($forecastCost, 0);
    }

    public function forecastProfit()
    {
        $forecastCost = $this->forecastCost();
        // 受注額
        $orderPrice = $this->estimation->order_price;

        // 予測粗利額 = 受注額 - 着地原価
        $forecastProfit = $orderPrice - $forecastCost;

        return round($forecastProfit, 0);
    }

    public function graph()
    {
        $start_date = Carbon::parse($this->start_date);
        $end_date = Carbon::parse($this->end_date);

        $months = [];

        $currentDate = $start_date->copy()->startOfMonth();

        while ($currentDate->lte($end_date)) {
            $months[] = $currentDate->format('Y-m');
            $currentDate->addMonth();
        }

        $workCosts = $this->workCosts()
            ->whereBetween('work_date', [$start_date->format('Y-m-d'), $end_date->format('Y-m-d')])
            ->get();

        $workCostsByMonth = $workCosts->groupBy(function ($item) {
            return Carbon::parse($item->work_date)->format('Y-m');
        });

        $assignmentMembers =
            $this->assignmentMembers()
            ->with('member', 'monthlyEstimations')->get();

        $estimateCostsByMonth = [];

        foreach ($assignmentMembers as $assignmentMember) {
            $base_cost = $assignmentMember->member->base_cost;
            $monthlyEstimations = $assignmentMember->monthlyEstimations;

            foreach ($monthlyEstimations as $monthlyEstimation) {
                // target_month を 'Y-m' の形式に変換
                $month = Carbon::createFromFormat('Y/m', $monthlyEstimation->target_month)->format('Y-m');

                // estimate_person_month と base_cost を掛け合わせてコストを計算
                $cost = $monthlyEstimation->estimate_cost;

                // 月ごとの estimate_cost を集計
                if (isset($estimateCostsByMonth[$month])) {
                    $estimateCostsByMonth[$month] += $cost;
                } else {
                    $estimateCostsByMonth[$month] = $cost;
                }
            }
        }

        $result = [];

        foreach ($months as $month) {
            // achievement_cost の計算
            $achievement_cost = 0;
            if (isset($workCostsByMonth[$month])) {
                $achievement_cost = $workCostsByMonth[$month]->sum('daily_cost');
            }

            $estimate_cost = 0;
            if (isset($estimateCostsByMonth[$month])) {
                $estimate_cost = $estimateCostsByMonth[$month];
            }

            $result[] = [
                'target_month' => $month,
                'achievement_cost' => $achievement_cost,
                'estimate_cost' => $estimate_cost,
            ];
        }


        return $result;
    }
}
