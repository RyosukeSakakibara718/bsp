<?php

declare(strict_types=1);

use App\Http\Controllers\MemberController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\CommentController;
use Illuminate\Support\Facades\Route;

Route::apiResource('members', MemberController::class);
Route::apiResource('projects', ProjectController::class);
Route::apiResource('projects.comments', CommentController::class);

