<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Http\Requests\ProjectAchievementRequest;
use App\Http\Resources\ProjectAchievementResource;
use App\UseCases\ProjectAchievement\UpdateAction;
use App\Models\WorkCost;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;

class ProjectAchievementController extends Controller
{
    /**
     * 案件実績の一覧を表示
     *
     * @return JsonResponse
     */
    public function index(): JsonResponse
    {
        // すべての案件実績を取得
        $achievements = WorkCost::all();

        return response()->json([
            'achievements' => ProjectAchievementResource::collection($achievements)
        ], 200);
    }

    /**
     * 特定の案件実績を表示
     *
     * @param int $id
     * @return JsonResponse
     */
    public function show($id): JsonResponse
    {
        // 指定されたIDの案件実績を取得
        $achievement = WorkCost::findOrFail($id);

        return response()->json(new ProjectAchievementResource($achievement));
    }

    /**
     * 案件実績を更新または新規作成
     *
     * @param ProjectAchievementRequest $request
     * @param int $id
     * @param UpdateAction $action
     * @return JsonResponse
     */
    public function update(ProjectAchievementRequest $request, int $id, UpdateAction $action): JsonResponse
    {
        // UpdateAction を実行し、案件実績を更新または作成
        $action($request, $id);

        return response()->json([], 204);
    }

    /**
     * 特定の案件実績を削除
     *
     * @param int $id
     * @return JsonResponse
     */
    public function destroy($id): JsonResponse
    {
        // 指定されたIDの案件実績を削除
        WorkCost::destroy($id);

        return response()->json([], 204);
    }
}
