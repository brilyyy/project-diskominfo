<?php

namespace App\Http\Controllers;

use App\Services\VillageServices;
use Illuminate\Http\Request;

class VillageController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return VillageServices::all();
    }

    public function show($id)
    {
        return VillageServices::show($id);
    }

    public function update(Request $request, $id)
    {
        return VillageServices::update($request, $id);
    }
}
