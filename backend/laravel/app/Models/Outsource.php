<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

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
