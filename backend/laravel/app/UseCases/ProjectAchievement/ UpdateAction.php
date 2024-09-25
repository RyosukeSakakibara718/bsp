<?php

declare(strict_types=1);

namespace App\UseCases\ProjectAchievement;

use App\Http\Requests\ProjectAchievementRequest;
use App\Models\WorkCost;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class UpdateAction
{
    public function __invoke(ProjectAchievementRequest $request, int $id): void
    {
        // トランザクションを使用して処理を実行
        DB::transaction(function () use ($request, $id) {
            try {
                $achievementData = [];

                Log::info('Start updating achievements', ['id' => $id, 'data' => $request->validated()]);

                // リクエストから案件実績データを準備
                foreach ($request->validated()['achievements'] as $achievement) {
                    $achievementData[] = [
                        'id' => $id,
                        'project_id' => $achievement['project_id'],
                        'assignment_member_id' => $achievement['assignment_member_id'],
                        'work_date' => $achievement['work_date'],
                        'daily_cost' => $achievement['daily_cost'],
                        'work_time' => $achievement['work_time'],
                    ];

                    Log::debug('Prepared achievement data for upsert', $achievement);
                }

                // upsertを実行
                $result = WorkCost::upsert(
                    $achievementData, // 更新データ
                    ['id'], // 一意のキー
                    ['daily_cost', 'work_time'] // 更新フィールド
                );

                Log::info('Upsert result', ['result' => $result]);

            } catch (\Exception $e) {
                Log::error('案件実績の更新中にエラーが発生しました。', ['error' => $e->getMessage(), 'data' => $achievementData]);
                throw $e;
            }
        });
    }
}
