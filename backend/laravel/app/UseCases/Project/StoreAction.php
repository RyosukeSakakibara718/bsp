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

class StoreAction
{
    public function __invoke(ProjectRequest $request): void
    {
        // トランザクションを使って一連のデータを保存
        DB::transaction(function () use ($request) {
            try {
                // プロジェクトデータを作成
                $project = Project::create([
                    'freee_project_code' => $request->input('projects.projects_data.freee_project_code'),
                    'name' => $request->input('projects.projects_data.name'),
                    'contract' => $request->input('projects.projects_data.contract'),
                    'phase' => $request->input('projects.projects_data.phase'),
                    'start_date' => $request->input('projects.projects_data.start_date'),
                    'end_date' => $request->input('projects.projects_data.end_date'),
                ]);

                // 見積もりデータを作成
                Estimation::create([
                    'project_id' => $project->id,
                    'order_price' => $request->input('projects.estimations.order_price'),
                    'estimate_cost' => $request->input('projects.estimations.estimate_cost'),
                    'estimate_person_month' => $request->input('projects.estimations.estimate_person_month'),
                ]);

                // 割り当てメンバーとその月次見積もりデータを作成
                if ($request->has('projects.assignment_members')) {
                    foreach ($request->input('projects.assignment_members') as $assignmentMemberData) {
                        $assignmentMember = AssignmentMember::create([
                            'project_id' => $project->id,
                            'member_id' => $assignmentMemberData['member_id'],
                            'position' => $assignmentMemberData['position'],
                            'estimate_total_person_month' => $assignmentMemberData['estimate_total_person_month'],
                        ]);

                        // 割り当てメンバーの月次見積もりデータを作成
                        if (isset($assignmentMemberData['assignment_member_monthly_estimations'])) {
                            foreach ($assignmentMemberData['assignment_member_monthly_estimations'] as $monthlyEstimation) {
                                $assignmentMember->monthlyEstimations()->create([
                                    'target_month' => $monthlyEstimation['target_month'],
                                    'estimate_person_month' => $monthlyEstimation['estimate_person_month'],
                                ]);
                            }
                        }
                    }
                }

                // 外注データを作成
                if ($request->has('projects.outsources')) {
                    foreach ($request->input('projects.outsources') as $outsourceData) {
                        Outsource::create([
                            'project_id' => $project->id,
                            'name' => $outsourceData['name'],
                            'estimate_cost' => $outsourceData['estimate_cost'],
                            'cost' => $outsourceData['cost'],
                        ]);
                    }
                }
            } catch (\Exception $e) {
                Log::error('プロジェクトの保存中にエラーが発生しました。', ['error' => $e->getMessage()]);
                throw $e; // トランザクションが自動的にロールバックされる
            }
        });
    }
}
