<?php

namespace App\Http\Controllers;

use App\Http\Requests\CommentRequest;
use App\Http\Resources\CommentResource;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use App\UseCases\Comment\IndexAction;
use App\UseCases\Comment\StoreAction;

class CommentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(IndexAction $action, Request $request):JsonResponse
    {
        $project_id = $request->input('project_id');
        $comment = $action($project_id);
        return response()->json(CommentResource::collection($comment));
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
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
