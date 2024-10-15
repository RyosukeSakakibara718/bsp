<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Http\Resources\HomeResource;
use App\UseCases\HomeAction;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;

class HomeController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(HomeAction $action, Request $request, string $id)
    {
        $project = $action($id);

        return response()->json(HomeResource::make($project));
    }
}
