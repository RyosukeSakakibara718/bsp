<?php

declare(strict_types=1);

namespace App\UseCases\Comment;

use App\Http\Resources\CommentResource;
use App\Models\Comment;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class ShowAction
{
    public function __invoke(string $id)
    {
        $project = Comment::find($id);

        if (!$project) {
            throw new ModelNotFoundException('Comment not found');
        }

        return new CommentResource($project);
    }
}
