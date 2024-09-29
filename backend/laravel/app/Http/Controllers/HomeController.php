<?php

namespace App\Http\Controllers;

use App\Http\Resources\HomeResource;
use App\Models\Project;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;

class HomeController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request, string $id)
    {
        $project = Project::findOrFail($id);

        return response()->json(HomeResource::make($project));
    }
}
