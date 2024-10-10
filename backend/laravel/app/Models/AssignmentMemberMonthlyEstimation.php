<?php

declare(strict_types=1);

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * @property int $id
 * @property int $assignment_member_id
 * @property string $target_month 該当月
 * @property string $estimate_person_month メンバーあたり見積人月
 * @property int $estimate_cost メンバーあたり見積原価
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property \Illuminate\Support\Carbon|null $deleted_at
 * @property-read \App\Models\AssignmentMember $assignmentMember
 *
 * @method static \Illuminate\Database\Eloquent\Builder|AssignmentMemberMonthlyEstimation newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|AssignmentMemberMonthlyEstimation newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|AssignmentMemberMonthlyEstimation onlyTrashed()
 * @method static \Illuminate\Database\Eloquent\Builder|AssignmentMemberMonthlyEstimation query()
 * @method static \Illuminate\Database\Eloquent\Builder|AssignmentMemberMonthlyEstimation whereAssignmentMemberId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AssignmentMemberMonthlyEstimation whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AssignmentMemberMonthlyEstimation whereDeletedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AssignmentMemberMonthlyEstimation whereEstimateCost($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AssignmentMemberMonthlyEstimation whereEstimatePersonMonth($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AssignmentMemberMonthlyEstimation whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AssignmentMemberMonthlyEstimation whereTargetMonth($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AssignmentMemberMonthlyEstimation whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AssignmentMemberMonthlyEstimation withTrashed()
 * @method static \Illuminate\Database\Eloquent\Builder|AssignmentMemberMonthlyEstimation withoutTrashed()
 *
 * @mixin \Eloquent
 */
class AssignmentMemberMonthlyEstimation extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'assignment_member_id',
        'target_month',
        'estimate_person_month',
    ];

    // AssignmentMember とのリレーション
    public function assignmentMember()
    {
        return $this->belongsTo(AssignmentMember::class, 'assignment_member_id');
    }
}
