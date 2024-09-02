<?php

declare(strict_types=1);

namespace App\UseCases\Project;

use App\Models\Project;
use Illuminate\Support\Facades\Log;

class IndexAction
{
    public function __invoke(array $searchQuery = [], $cursor = null)
    {

        $query = Project::query();

        // プロジェクト名で検索
        if (isset($searchQuery['name']) && $searchQuery['name']) {
            $query->where('name', 'like', '%' . $searchQuery['name'] . '%');
        }

        // 終了日でソート
        $query->orderBy('end_date');

        // カーソルによるページネーション
        $projects = $query->cursorPaginate(10, ['*'], 'cursor', $cursor);

        return $projects;
    }
}
