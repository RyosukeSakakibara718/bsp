<?php

declare(strict_types=1);

use App\Http\Controllers\MemberController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\ProjectAchievementController;
use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;

Route::apiResource('members', MemberController::class);
Route::apiResource('projects', ProjectController::class);
Route::get('projectsAchievements/{id}', [ProjectAchievementController::class, 'show']);
Route::put('projectsAchievements', [ProjectAchievementController::class, 'update']);
Route::get('/homeInformation/{id}', HomeController::class);
