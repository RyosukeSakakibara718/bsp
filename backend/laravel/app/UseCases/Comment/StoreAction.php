<?php

declare(strict_types=1);

namespace App\UseCases\Comment;

use App\Http\Requests\CommentRequest;
use App\Models\Comment;

class StoreAction
{
    public function __invoke(CommentRequest $request): void
    {
        Comment::create([
            'project_id' => $request->input('project_id'),
            'comment' => $request->input('comment'),
        ]);
    }
}
