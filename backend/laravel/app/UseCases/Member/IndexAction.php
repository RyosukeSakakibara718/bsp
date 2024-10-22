<?php

declare(strict_types=1);

namespace App\UseCases\Member;

use App\Models\Member;

class IndexAction
{
    public function __invoke($searchQuery = [], $cursor = null, $fetchAll)
    {
        $query = Member::query();

        if (isset($searchQuery['name'])) {
            $query->where('name', 'like', '%' . $searchQuery['name'] . '%');
        }

        if($fetchAll){
            return $query->orderby('id')->get();
        }

        $members = $query->orderby('id')->cursorPaginate(10, ['*'], 'cursor', $cursor);

        return $members;
    }
}
