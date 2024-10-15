<?php

declare(strict_types=1);

namespace Database\Seeders;

use App\Constants\PositionConstants;
use App\Models\AssignmentMember;
use App\Models\AssignmentMemberMonthlyEstimation;
use App\Models\Member;
use App\Models\Project;
use App\Models\WorkCost;
use Carbon\Carbon;
use Illuminate\Database\Seeder;

class AssignmentMemberTableSeeder extends Seeder
{
    public function run()
    {
        // 未来の日付を持つプロジェクトを5つ作成
        $futureProjects = [
            ['freee_project_code' => 'PRJ10001', 'name' => 'Future Project 1', 'start_date' => Carbon::now()->subMonth(), 'end_date' => Carbon::now()->addWeek()],
            ['freee_project_code' => 'PRJ10002', 'name' => 'Future Project 2', 'start_date' => Carbon::now()->subMonth(), 'end_date' => Carbon::now()->addDays(10)],
            ['freee_project_code' => 'PRJ10003', 'name' => 'Future Project 3', 'start_date' => Carbon::now()->subMonth(), 'end_date' => Carbon::now()->addDays(15)],
            ['freee_project_code' => 'PRJ10004', 'name' => 'Future Project 4', 'start_date' => Carbon::now()->subMonth(), 'end_date' => Carbon::now()->addDays(20)],
            ['freee_project_code' => 'PRJ10005', 'name' => 'Future Project 5', 'start_date' => Carbon::now()->subMonth(), 'end_date' => Carbon::now()->addDays(30)],
        ];

        foreach ($futureProjects as $projectData) {
            $project = Project::create(array_merge($projectData, [
                'contract' => rand(1, 3),
                'phase' => rand(1, 5),
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ]));

            // 全てのメンバーを取得
            $members = Member::all();

            // 各プロジェクトに対して、ランダムなメンバーを3人割り当てる
            $randomMembers = $members->random(3);
            $positions = [PositionConstants::POSITION_PM, PositionConstants::POSITION_MEMBER, PositionConstants::POSITION_MGR];

            foreach ($randomMembers as $key => $member) {
                $assignmentMember = AssignmentMember::create([
                    'project_id' => $project->id,
                    'member_id' => $member->id,
                    'position' => $positions[$key],
                    'estimate_total_person_month' => round(rand(1, 120) / 10, 2),
                ]);

                // プロジェクトの開始日と終了日から月ごとの期間を取得
                $startDate = Carbon::parse($project->start_date)->startOfMonth();
                $endDate = Carbon::parse($project->end_date)->endOfMonth();

                // 開始月から終了月までの各月をループ
                $currentDate = $startDate->copy();
                while ($currentDate->lte($endDate)) {
                    $estimate_person_month = round(rand(1, 10) / 10, 2);
                    $base_cost = $member->base_cost;
                    AssignmentMemberMonthlyEstimation::create([
                        'assignment_member_id' => $assignmentMember->id,
                        'target_month' => $currentDate->format('Y/m'), // "YYYY/MM"の形式
                        'estimate_person_month' => $estimate_person_month,
                        'estimate_cost' => round($estimate_person_month * $base_cost, 0),
                        'created_at' => Carbon::now(),
                        'updated_at' => Carbon::now(),
                    ]);
                    $daysInMonth = $currentDate->daysInMonth;
                    for ($day = 1; $day <= $daysInMonth; $day++) {
                        $workDate = $currentDate->copy()->day($day);

                        // 平日のみ作業日とする（オプション）
                        if ($workDate->isWeekend()) {
                            continue;
                        }

                        // WorkCostFactoryを使用してレコードを作成
                        WorkCost::factory()->create([
                            'project_id' => $project->id,
                            'assignment_member_id' => $assignmentMember->id,
                            'work_date' => $workDate->format('Y-m-d'),
                        ]);
                    }

                    $currentDate->addMonth();
                }
            }
        }
    }
}
