<?php

declare(strict_types=1);

namespace App\UseCases\Member;

use App\Models\Member;

class IndexAction
{
    public function __invoke($searchQuery = [], $cursor = null, $fetchAll)
    {
        $query = Member::query()
            ->searchByName($searchQuery['name'] ?? null)
            ->orderBy('id');

        return $fetchAll
            ? $this->fetchAllMembers($query)
            : $this->paginateMembers($query, $cursor);
    }

    private function fetchAllMembers($query)
    {
        return $query->get();
    }

    private function paginateMembers($query, ?string $cursor)
    {
        return $query->cursorPaginate(10, ['*'], 'cursor', $cursor);
    }
}
