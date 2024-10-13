<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProjectAchievementRequest;
use App\Http\Resources\ProjectAchievementResource;
use App\UseCases\ProjectAchievement\UpdateAction;
use App\UseCases\ProjectAchievement\ShowAction;
use Illuminate\Http\JsonResponse;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Log;

class ProjectAchievementController extends Controller
{
    /**
     * Display the specified resource.
     */
    public function show(ShowAction $action, string $id)
    {
        $project = $action($id);

        return response()->json(ProjectAchievementResource::make($project));
    }

    public function update(ProjectAchievementRequest $request, int $id, UpdateAction $action): JsonResponse
    {
        Log::info('Updating project achievement', ['id' => $id]);

        // リクエストデータを取得し、日付を必要に応じて変換
        $data = $request->all();

        // 更新処理を実行
        $action($request->merge($data), $id);

        return response()->json([], 204);
    }
}
