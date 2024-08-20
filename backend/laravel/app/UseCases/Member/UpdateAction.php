<?php

declare(strict_types=1);

namespace App\UseCases\Member;

use App\Models\Member;
use App\Http\Requests\MemberRequest;

class UpdateAction
{
    public function __invoke(MemberRequest $request, string $id)
    {
        $member = Member::find($id);

        $member->name = $request->name;
        $member->base_cost = $request->base_cost;
        $member->rank = $request->rank;
        $member->base_cost_start_date = $request->base_cost_start_date;

        $member->save();

        return $member;
    }
}


