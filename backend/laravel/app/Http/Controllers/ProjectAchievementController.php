<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Http\Requests\ProjectAchievementRequest;
use App\Http\Resources\ProjectAchievementResource;
use App\Models\ProjectAchievement;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ProjectAchievementController extends Controller
{
    /**
     * 特定の案件に関連する実績一覧を表示
     *
     * @param int $projectId
     * @return JsonResponse
     */
    public function index($projectId): JsonResponse
    {
        // 指定されたプロジェクトIDの案件実績を取得
        $achievements = ProjectAchievement::where('project_id', $projectId)->get();

        return response()->json([
            'achievements' => ProjectAchievementResource::collection($achievements)
        ], 200);
    }

    /**
     * 新しい案件実績の作成画面を表示
     */
    public function create()
    {
        // 新しい案件実績を作成するためのレスポンスまたはビューを返す
    }

    /**
     * 新しい案件実績を保存
     *
     * @param ProjectAchievementRequest $request
     * @return JsonResponse
     */
    public function store(ProjectAchievementRequest $request): JsonResponse
    {
        // 新しい案件実績を作成
        $achievement = ProjectAchievement::create($request->validated());

        return response()->json(new ProjectAchievementResource($achievement), 201);
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
        $achievement = ProjectAchievement::findOrFail($id);

        return response()->json(new ProjectAchievementResource($achievement));
    }

    /**
     * 特定の案件実績の編集画面を表示
     *
     * @param int $id
     */
    public function edit($id)
    {
        // 指定された案件実績の編集フォームを返す
    }

    /**
     * 特定の案件実績を更新
     *
     * @param ProjectAchievementRequest $request
     * @param int $id
     * @return JsonResponse
     */
    public function update(ProjectAchievementRequest $request, $id): JsonResponse
    {
        // 指定されたIDの案件実績を更新
        $achievement = ProjectAchievement::findOrFail($id);
        $achievement->update($request->validated());

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
        ProjectAchievement::destroy($id);

        return response()->json([], 204);
    }
}
