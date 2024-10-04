<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProjectAchievementRequest;
use App\UseCases\ProjectAchievement\UpdateAction;
use Illuminate\Http\JsonResponse;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Log;

class ProjectAchievementController extends Controller
{
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
