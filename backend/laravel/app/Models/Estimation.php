<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

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
