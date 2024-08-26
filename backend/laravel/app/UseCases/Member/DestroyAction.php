<?php

declare(strict_types=1);

namespace App\UseCases\Member;

use App\Models\Member;

class DestroyAction
{
    public function __invoke(string $id)
    {
        $member = Member::find($id);
        $member->delete();

        return $member;
    }
}
