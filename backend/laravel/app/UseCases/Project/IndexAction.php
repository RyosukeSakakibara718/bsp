<?php

declare(strict_types=1);

namespace App\UseCases\Project;

use App\Models\Project;
use Carbon\Carbon;


class IndexAction
{
    public function __invoke(array $searchQuery = [], $cursor = null)
    {

        $query = Project::query();

        // プロジェクト名で検索
        if (isset($searchQuery['name']) && $searchQuery['name']) {
            $query->where('name', 'like', '%' . $searchQuery['name'] . '%');
        }

        // 現在以降の終了日でフィルタリングし、終了日が最も近い順にソート
        $query->where('end_date', '>=', Carbon::now())
              ->orderBy('end_date');

        // カーソルによるページネーション
        $projects = $query->cursorPaginate(10, ['*'], 'cursor', $cursor);

        return $projects;
    }
}
