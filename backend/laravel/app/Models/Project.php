<?php

declare(strict_types=1);

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * 
 *
 * @property int $id
 * @property string|null $freee_project_code freeeプロジェクトコード
 * @property string $name プロジェクト名
 * @property int $contract 契約
 * @property int $phase 工程
 * @property \Illuminate\Support\Carbon $start_date プロジェクト開始日
 * @property \Illuminate\Support\Carbon $end_date プロジェクト終了日
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property \Illuminate\Support\Carbon|null $deleted_at
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\AssignmentMember> $assignmentMembers
 * @property-read int|null $assignment_members_count
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Estimation> $estimations
 * @property-read int|null $estimations_count
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Outsource> $outsources
 * @property-read int|null $outsources_count
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\WorkCost> $workCosts
 * @property-read int|null $work_costs_count
 * @method static \Database\Factories\ProjectFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder|Project newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Project newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Project onlyTrashed()
 * @method static \Illuminate\Database\Eloquent\Builder|Project query()
 * @method static \Illuminate\Database\Eloquent\Builder|Project whereContract($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Project whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Project whereDeletedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Project whereEndDate($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Project whereFreeeProjectCode($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Project whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Project whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Project wherePhase($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Project whereStartDate($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Project whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Project withTrashed()
 * @method static \Illuminate\Database\Eloquent\Builder|Project withoutTrashed()
 * @mixin \Eloquent
 */
class Project extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'freee_project_code',
        'name',
        'contract',
        'phase',
        'start_date',
        'end_date',
    ];

    protected $casts = [
        'start_date' => 'date:Y-m-d',
        'end_date' => 'date:Y-m-d',
    ];

    // リレーション: Project は複数の AssignmentMember を持つ
    public function assignmentMembers()
    {
        return $this->hasMany(AssignmentMember::class);
    }

    // リレーション: Project は複数の WorkCost を持つ
    public function workCosts()
    {
        return $this->hasMany(WorkCost::class);
    }

    // リレーション: Project は複数の Outsource を持つ
    public function outsources()
    {
        return $this->hasMany(Outsource::class);
    }

    // リレーション: Project は複数の Estimation を持つ
    public function estimations()
    {
        return $this->hasMany(Estimation::class);
    }
}
