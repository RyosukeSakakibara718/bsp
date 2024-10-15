<?php

declare(strict_types=1);

namespace App\UseCases\Comment;

use App\Models\Project;

class IndexAction
{
    public function __invoke(Project $project)
    {
        return $project->comments()->orderby('created_at', 'desc')->get();
    }
}
