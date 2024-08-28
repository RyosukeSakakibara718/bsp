<?php

declare(strict_types=1);

namespace Tests\Unit\UseCase;

use App\Http\Requests\MemberRequest;
use App\Models\Member;
use App\UseCases\Member\DestroyAction;
use App\UseCases\Member\IndexAction;
use App\UseCases\Member\ShowAction;
use App\UseCases\Member\StoreAction;
use App\UseCases\Member\UpdateAction;
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

    public function test_UseCaseでメンバー編集(): void
    {
        $initialMember = Member::factory()->create([
            'id' => '1',
            'name' => '旧名　太郎',
            'base_cost' => 5000000,
            'rank' => '2',
            'base_cost_start_date' => '2023-08-20',
        ]);

        $newData = [
            'name' => '新名　太郎',
            'base_cost' => 10000000,
            'rank' => '4',
            'base_cost_start_date' => '2024-08-20',
        ];

        $request = new MemberRequest($newData);

        $action = new UpdateAction();

        $updatedMember = $action($request, (string) $initialMember->id);

        $this->assertEquals($newData['name'], $updatedMember->name);
        $this->assertEquals($newData['base_cost'], $updatedMember->base_cost);
        $this->assertEquals($newData['rank'], $updatedMember->rank);
        $this->assertEquals($newData['base_cost_start_date'], $updatedMember->base_cost_start_date->toDateString());

        $this->assertDatabaseHas('members', [
            'id' => $initialMember->id,
            'name' => $newData['name'],
            'base_cost' => $newData['base_cost'],
            'rank' => $newData['rank'],
            'base_cost_start_date' => $newData['base_cost_start_date'],
        ]);    }
}
