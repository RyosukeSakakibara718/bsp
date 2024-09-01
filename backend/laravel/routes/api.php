<?php

declare(strict_types=1);

use App\Http\Controllers\MemberController;
use Illuminate\Support\Facades\Route;

Route::apiResource('members', MemberController::class);
