<?php

declare(strict_types=1);

namespace App\UseCases\Comment;

use App\Http\Requests\CommentRequest;
use App\Models\Comment;
use App\Models\Project;

class StoreAction
{
    public function __invoke(CommentRequest $request, Project $project): Comment
    {
        return $project->comments()->create([
            'comment' => $request->input('comment'),
        ]);
    }
}
