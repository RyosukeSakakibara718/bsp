<?php

declare(strict_types=1);

namespace App\UseCases\Comment;

use App\Models\Comment;
use App\Models\Project;

class DestroyAction
{
    public function __invoke(Project $project, Comment $comment)
    {
        $comment->delete();
    }
}
