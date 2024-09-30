<?php

declare(strict_types=1);

namespace App\UseCases\Comment;

use App\Http\Resources\CommentResource;
use App\Models\Comment;
use App\Models\Project;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class ShowAction
{
    public function __invoke(Project $project, Comment $comment): Comment
    {
        return $comment;
    }
}
