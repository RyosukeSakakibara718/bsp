<?php

declare(strict_types=1);

namespace Database\Seeders;

use App\Models\WorkCost;
use Illuminate\Database\Seeder;

class WorkCostTableSeeder extends Seeder
{
    public function run()
    {
        WorkCost::factory()->count(10)->create();
    }
}
