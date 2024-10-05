<?php

declare(strict_types=1);

namespace App\UseCases\Comment;

use App\Http\Requests\CommentRequest;
use App\Models\Comment;
use App\Models\Project;

class UpdateAction
{
    public function __invoke(CommentRequest $request, Project $project, Comment $comment)
    {
        Comment::upsert(
            [
                [
                    'id' => $comment->id,
                    'project_id' => $comment->project_id,
                    'comment' => $request->input('comment'),
                    'created_at' => now(),
                    'updated_at' => now(),
                ],
            ],
            ['id'],
            ['id', 'comment']
        );
    }
}
