<?php

namespace App\Http\Controllers;

use App\Services\LettercServices;
use Illuminate\Http\Request;

class LettercController extends Controller
{
    public function index()
    {

        LettercServices::all();
    }

    public function store(Request $request)
    {
        LettercServices::add($request);
    }

    public function show($id)
    {
        LettercServices::show($id);
    }

    public function update(Request $request, $id)
    {
        LettercServices::update($request, $id);
    }

    public function destroy($id)
    {
        LettercServices::delete($id);
    }
}
