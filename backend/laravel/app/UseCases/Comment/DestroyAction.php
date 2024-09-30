<?php

declare(strict_types=1);

namespace App\UseCases\Comment;

use App\Models\Comment;

class DestroyAction
{
    public function __invoke(string $id)
    {
        $Comment = Comment::find($id);
        $Comment->delete();
    }
}
