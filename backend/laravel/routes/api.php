<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('index', function() {
    return 'Hello, World';
})->name('index');
