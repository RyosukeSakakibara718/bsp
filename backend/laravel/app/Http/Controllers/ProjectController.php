<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Http\Resources\ProjectResource;
use App\UseCases\Project\DestroyAction;
use App\UseCases\Project\IndexAction;
use App\UseCases\Project\ShowAction;
use App\UseCases\Project\StoreAction;
use App\UseCases\Project\UpdateAction;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Log;

class ProjectController extends Controller
{
    /**
     * Display a listing of the resource, including search functionality.
     */
    public function index(IndexAction $action, Request $request): JsonResponse
    {
        // プロジェクト名で検索
        $searchQuery = $request->only(['name']);
        Log::info('Search Query:', $searchQuery);  // 検索クエリの内容をログに出力

        $cursor = $request->input('cursor');
        Log::info('Cursor:', ['cursor' => $cursor]);  // カーソルの値をログに出力

        // IndexActionに検索クエリを渡してプロジェクトを取得
        $projects = $action($searchQuery, $cursor);
        Log::info('Projects Retrieved: ' . json_encode($projects->items()));


        // 直接返す
        return response()->json([
            'projects' => ProjectResource::collection($projects),
            'next_cursor' => $projects->nextCursor(),
            'previous_cursor' => $projects->previousCursor(),
        ], 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request, StoreAction $action)
    {
        $project = $action($request);

        return response()->json(new ProjectResource($project), 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(ShowAction $action, string $id)
    {
        $project = $action($id);

        return response()->json(ProjectResource::make($project));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, UpdateAction $action, string $id)
    {
        $project = $action($request, $id);

        return response()->json(new ProjectResource($project), 204);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(DestroyAction $action, string $id)
    {
        // アクションを呼び出してプロジェクトを削除
        $action($id);

        // 成功時に204 No Contentを返す
        return response()->json([], 204);
    }
}
