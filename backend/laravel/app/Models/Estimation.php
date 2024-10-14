<?php

declare(strict_types=1);

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * @property int $id
 * @property int $project_id
 * @property int $order_price 受注額
 * @property int $estimate_cost 見積原価
 * @property string $estimate_person_month 見積工数
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property \Illuminate\Support\Carbon|null $deleted_at
 * @property-read \App\Models\Project $project
 *
 * @method static \Illuminate\Database\Eloquent\Builder|Estimation newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Estimation newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Estimation onlyTrashed()
 * @method static \Illuminate\Database\Eloquent\Builder|Estimation query()
 * @method static \Illuminate\Database\Eloquent\Builder|Estimation whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Estimation whereDeletedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Estimation whereEstimateCost($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Estimation whereEstimatePersonMonth($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Estimation whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Estimation whereOrderPrice($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Estimation whereProjectId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Estimation whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Estimation withTrashed()
 * @method static \Illuminate\Database\Eloquent\Builder|Estimation withoutTrashed()
 *
 * @mixin \Eloquent
 */
class Estimation extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'project_id',
        'order_price',
        'estimate_cost',
        'estimate_person_month',
    ];

    // リレーション: Estimation は Project に属する
    public function project()
    {
        return $this->belongsTo(Project::class);
    }
}
