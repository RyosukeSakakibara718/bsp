<?php

declare(strict_types=1);

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * @property int $id
 * @property int $project_id
 * @property string $name 名前
 * @property int $estimate_cost 見積原価
 * @property int|null $cost 実績原価
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property \Illuminate\Support\Carbon|null $deleted_at
 * @property-read \App\Models\Project $project
 *
 * @method static \Illuminate\Database\Eloquent\Builder|Outsource newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Outsource newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Outsource onlyTrashed()
 * @method static \Illuminate\Database\Eloquent\Builder|Outsource query()
 * @method static \Illuminate\Database\Eloquent\Builder|Outsource whereCost($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Outsource whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Outsource whereDeletedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Outsource whereEstimateCost($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Outsource whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Outsource whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Outsource whereProjectId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Outsource whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Outsource withTrashed()
 * @method static \Illuminate\Database\Eloquent\Builder|Outsource withoutTrashed()
 *
 * @mixin \Eloquent
 */
class Outsource extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'project_id',
        'name',
        'estimate_cost',
        'cost',
    ];

    // リレーション: Outsource は Project に属する
    public function project()
    {
        return $this->belongsTo(Project::class);
    }
}
