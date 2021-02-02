<?php

namespace App\Http\Controllers;

use App\Services\LettercServices;
use Illuminate\Http\Request;

class LettercController extends Controller
{
    public function index()
    {

        return LettercServices::all();
    }

    public function store(Request $request)
    {
        return LettercServices::add($request);
    }

    public function show($id)
    {
        return LettercServices::show($id);
    }

    public function update(Request $request, $id)
    {
        return LettercServices::update($request, $id);
    }

    public function destroy($id)
    {
        return LettercServices::delete($id);
    }
}
