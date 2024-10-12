<?php

declare(strict_types=1);

namespace App\UseCases\Project;

use App\Http\Requests\ProjectRequest;
use App\Models\Project;
use App\Models\Estimation;
use App\Models\AssignmentMember;
use App\Models\Outsource;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class UpdateAction
{
    public function __invoke(ProjectRequest $request, string $id): void
    {
        // トランザクションを使用して更新処理を実行
        DB::transaction(function () use ($request, $id) {
            try {
                // プロジェクト情報を更新
                Project::upsert(
                    [
                        [
                            'id' => $id,
                            'freee_project_code' => $request->input('projects.projects_data.freee_project_code'),
                            'name' => $request->input('projects.projects_data.name'),
                            'contract' => $request->input('projects.projects_data.contract'),
                            'phase' => $request->input('projects.projects_data.phase'),
                            'start_date' => $request->input('projects.projects_data.start_date'),
                            'end_date' => $request->input('projects.projects_data.end_date'),
                        ],
                    ],
                    ['id'],
                    ['freee_project_code', 'name', 'contract', 'phase', 'start_date', 'end_date']
                );

                // 見積情報を更新
                Estimation::where('project_id', $id)->update([
                    'order_price' => $request->input('projects.estimations.order_price'),
                    'estimate_cost' => $request->input('projects.estimations.estimate_cost'),
                    'estimate_person_month' => $request->input('projects.estimations.estimate_person_month'),
                ]);

                // 割り当てメンバーとその月次見積もりデータを更新
                if ($request->has('projects.assignment_members')) {
                    foreach ($request->input('projects.assignment_members') as $assignmentMemberData) {
                        $assignmentMember = AssignmentMember::updateOrCreate(
                            [
                                'project_id' => $id,
                                'member_id' => $assignmentMemberData['member_id'],
                            ],
                            [
                                'position' => $assignmentMemberData['position'],
                                'estimate_total_person_month' => $assignmentMemberData['estimate_total_person_month'],
                            ]
                        );

                        // 月次見積もりデータを更新
                        if (isset($assignmentMemberData['assignment_member_monthly_estimations'])) {
                            foreach ($assignmentMemberData['assignment_member_monthly_estimations'] as $monthlyEstimation) {
                                $assignmentMember->monthlyEstimations()->updateOrCreate(
                                    [
                                        'assignment_member_id' => $assignmentMember->id,
                                        'estimate_cost' => $monthlyEstimation['estimate_cost'],
                                        'target_month' => $monthlyEstimation['target_month'],
                                    ],
                                    [
                                        'estimate_person_month' => $monthlyEstimation['estimate_person_month'],
                                    ]
                                );
                            }
                        }
                    }
                }

                // 外注情報を更新
                if ($request->has('projects.outsources')) {
                    foreach ($request->input('projects.outsources') as $outsourceData) {
                        Outsource::updateOrCreate(
                            [
                                'project_id' => $id,
                                'name' => $outsourceData['name'],
                            ],
                            [
                                'estimate_cost' => $outsourceData['estimate_cost'],
                                'cost' => $outsourceData['cost'],
                            ]
                        );
                    }
                }
            } catch (\Exception $e) {
                Log::error('プロジェクトの更新中にエラーが発生しました。', ['error' => $e->getMessage()]);
                throw $e; // トランザクションが自動的にロールバックされます
            }
        });
    }
}
