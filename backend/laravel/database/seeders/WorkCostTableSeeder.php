<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\WorkCost;

class WorkCostTableSeeder extends Seeder
{
    public function run()
    {
        WorkCost::factory()->count(10)->create();
    }
}
