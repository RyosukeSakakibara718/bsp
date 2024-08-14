<?php

declare(strict_types=1);

namespace Tests\Unit\UseCase;

use App\Http\Requests\MemberRequest;
use App\Models\Member;
use App\UseCases\Member\IndexAction;
use App\UseCases\Member\ShowAction;
use App\UseCases\Member\StoreAction;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class MemberUseCaseTest extends TestCase
{
    use RefreshDatabase;

    public function test_UseCaseでメンバー一覧を取得(): void
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

    public function test_UseCaseでメンバー詳細を取得(): void
    {
        $members = Member::factory()->count(10)->create();

        $id = $members[0]->id;

        $action = new ShowAction();

        $member = $action((string) $id);

        $this->assertSame($member->id, $id);
    }

    public function test_UseCaseでメンバー登録(): void
    {
        $data = [
            'name' => '田中太郎',
            'base_cost' => 420000,
            'rank' => 2,
            'base_cost_start_date' => '2005-11-01',
        ];

        $data = new MemberRequest($data);

        $action = new StoreAction();

        $action($data);

        $this->assertDatabaseHas(
            'members',
            [
                'name' => '田中太郎',
                'base_cost' => 420000,
                'rank' => 2,
                'base_cost_start_date' => '2005-11-01',
            ]
        );
    }
}
