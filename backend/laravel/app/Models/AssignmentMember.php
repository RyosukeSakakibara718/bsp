<?php

namespace App\Models;

use App\Constants\PositionConstants;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * 
 *
 * @property int $id
 * @property int $project_id
 * @property int $member_id
 * @property int $position 役職
 * @property string $estimate_total_person_month 総見積人月
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property \Illuminate\Support\Carbon|null $deleted_at
 * @property-read mixed $position_name
 * @property-read \App\Models\Member $member
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\AssignmentMemberMonthlyEstimation> $monthlyEstimations
 * @property-read int|null $monthly_estimations_count
 * @property-read \App\Models\Project $project
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\WorkCost> $workCosts
 * @property-read int|null $work_costs_count
 * @method static \Database\Factories\AssignmentMemberFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder|AssignmentMember newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|AssignmentMember newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|AssignmentMember onlyTrashed()
 * @method static \Illuminate\Database\Eloquent\Builder|AssignmentMember query()
 * @method static \Illuminate\Database\Eloquent\Builder|AssignmentMember whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AssignmentMember whereDeletedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AssignmentMember whereEstimateTotalPersonMonth($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AssignmentMember whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AssignmentMember whereMemberId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AssignmentMember wherePosition($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AssignmentMember whereProjectId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AssignmentMember whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AssignmentMember withTrashed()
 * @method static \Illuminate\Database\Eloquent\Builder|AssignmentMember withoutTrashed()
 * @mixin \Eloquent
 */
class AssignmentMember extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'project_id',
        'member_id',
        'position',
        'estimate_total_person_month',
    ];

    // リレーション: AssignmentMember は Project に属する
    public function project()
    {
        return $this->belongsTo(Project::class);
    }

    // リレーション: AssignmentMember は Member に属する
    public function member()
    {
        return $this->belongsTo(Member::class);
    }

    // リレーション: AssignmentMember は複数の WorkCost を持つ
    public function workCosts()
    {
        return $this->hasMany(WorkCost::class);
    }

    // 役職名を取得するメソッド
    public function getPositionNameAttribute()
    {
        return PositionConstants::getPositionName($this->position);
    }

    // 名前を取得するメソッド
    public function getMemberName()
    {
        return Member::find($this->member_id)->name;
    }

    // 原価を取得するメソッド
    public function getMemberBaseCost()
    {
        return Member::find($this->member_id)->base_cost;
    }

    // 月次見積もりとのリレーションを追加
    public function monthlyEstimations()
    {
        return $this->hasMany(AssignmentMemberMonthlyEstimation::class, 'assignment_member_id');
    }

    public function estimateTotalPersonMonth()
    {
        $estimationsTotalPersonMonth =
            AssignmentMemberMonthlyEstimation::where('assignment_member_id', $this->member_id)
            ->sum('estimate_person_month');
        return $estimationsTotalPersonMonth;
    }

    public function achievementTotalPersonMonth()
    {
        $totalWorkTime =
            WorkCost::where('assignment_member_id', $this->member_id)
            ->sum('work_time');
        $totalWorkTime = (float) $totalWorkTime;
        $achievementTotalPersonMonth = round($totalWorkTime / 160, 1);
        return $achievementTotalPersonMonth;
    }

    public function achievementTotalCost()
    {
        $totalWorkCost =
            WorkCost::where('assignment_member_id', $this->member_id)
            ->sum('daily_cost');
        return $totalWorkCost;
    }
}
