<?php

declare(strict_types=1);

namespace Tests\Unit\UseCase;

use App\Models\Member;
use App\UseCases\Member\IndexAction;
use App\UseCases\Member\ShowAction;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class MemberUseCaseTest extends TestCase
{
    use RefreshDatabase;

    public function testUseCaseMemberIndexAction(): void
    {
        // 生成するメンバー数
        $count = 10;

        Member::factory($count)->create();

        $action = new IndexAction();

        $members = $action();

        // IndexActionで取得したメンバーの数が生成した数と同じこと確認
        $this->assertCount($count, $members);

        $this->assertInstanceOf(Member::class, $members->first());
    }

    public function testUseCaseMemberShowAction(): void
    {
        $members = Member::factory()->count(10)->create();

        $id = $members[0]->id;

        $action = new ShowAction();

        $member = $action((string)$id);

        $this->assertSame($member->id, $id);
    }
}
