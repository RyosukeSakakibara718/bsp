<?php

declare(strict_types=1);

namespace Database\Factories;

use App\Models\Project;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Project>
 */
class ProjectFactory extends Factory
{
    /**
     * @var class-string<\Illuminate\Database\Eloquent\Model>
     */
    protected $model = Project::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        // Project->estimations&(assignmentMember->assignment_member_monthly_estimations)&outsources
        return [
            'freee_project_code' => $this->faker->regexify('[0-9]{2}-[0-9]{2}-[0-9]{5}'),
            'name' => $this->faker->words(3, true),
            'company_name' => fake()->company(),
            'contract' => $this->faker->numberBetween(1, 3),
            'phase' => $this->faker->numberBetween(1, 5),
            'start_date' => $this->faker->date('Y-m-d', 'now'),
            'end_date' => $this->faker->date('Y-m-d', '+1 year'),
            'created_at' => now(),
            'updated_at' => now(),
        ];
    }
}
