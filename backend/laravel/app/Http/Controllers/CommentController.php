<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Http\Requests\CommentRequest;
use App\Http\Resources\CommentResource;
use App\Models\Comment;
use App\Models\Project;
use App\UseCases\Comment\DestroyAction;
use App\UseCases\Comment\IndexAction;
use App\UseCases\Comment\ShowAction;
use App\UseCases\Comment\StoreAction;
use App\UseCases\Comment\UpdateAction;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;

class CommentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(IndexAction $action, Request $request, Project $project): JsonResponse
    {
        $comments = $action($project);

        return response()->json(CommentResource::collection($comments));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(CommentRequest $request, StoreAction $action, Project $project)
    {
        $action($request, $project);

        return response()->json([], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(ShowAction $action, Project $project, Comment $comment): JsonResponse
    {
        $comment = $action($project, $comment);

        return response()->json(CommentResource::make($comment));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(CommentRequest $request, UpdateAction $action, Project $project, Comment $comment)
    {
        $action($request, $project, $comment);

        return response()->json([], 201);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(DestroyAction $action, Project $project, Comment $comment): JsonResponse
    {
        $action($project, $comment);

        return response()->json([], 204);
    }
}
