<?php

declare(strict_types=1);

namespace Database\Seeders;

use App\Models\Member;
use Illuminate\Database\Seeder;

class MemberTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // 10人のメンバーを作成
        Member::factory()->count(10)->create();
    }
}
