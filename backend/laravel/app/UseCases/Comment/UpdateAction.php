<?php

declare(strict_types=1);

namespace App\UseCases\Comment;

use App\Http\Requests\CommentRequest;
use App\Models\Comment;

class UpdateAction
{
    public function __invoke(CommentRequest $request, string $id)
    {
        $comment = Comment::find($id);

        Comment::upsert(
            [
                [
                    'id' => $id,
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
