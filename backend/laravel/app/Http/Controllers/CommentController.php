<?php

namespace App\Http\Controllers;

use App\Http\Requests\CommentRequest;
use App\Http\Resources\CommentResource;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use App\UseCases\Comment\IndexAction;
use App\UseCases\Comment\StoreAction;
use App\UseCases\Comment\ShowAction;
use App\UseCases\Comment\UpdateAction;
use App\UseCases\Comment\DestroyAction;

class CommentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(IndexAction $action, Request $request):JsonResponse
    {
        $project_id = $request->input('project_id');
        $comments = $action($project_id);

        return response()->json(CommentResource::collection($comments));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(CommentRequest $request, StoreAction $action)
    {
        $action($request);

        return response()->json([], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(ShowAction $action, Request $request, string $id):JsonResponse
    {
        $comment = $action($id);

        return response()->json(CommentResource::make($comment));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(CommentRequest $request, UpdateAction $action, string $id)
    {
        $action($request, $id);

        return response()->json([], 201);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(DestroyAction $action, string $id)
    {
        $action($id);

        return response()->json([], 204);
    }
}
