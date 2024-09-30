<?php

declare(strict_types=1);

namespace App\UseCases\Comment;

use App\Models\Comment;

class IndexAction
{
    public function __invoke(string $project_id)
    {
        return Comment::where('project_id', $project_id)->orderby('created_at', 'desc')->get();
    }
}
