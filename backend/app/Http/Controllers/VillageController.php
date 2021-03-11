<?php

namespace App\Http\Controllers;

use App\Services\VillageServices;
use Illuminate\Http\Request;

class VillageController extends Controller
{

    protected $village;

    public function __construct()
    {
        $this->middleware('permission:desa');
        $this->village = new VillageServices();
    }
    public function index()
    {
        return $this->village->index();
    }

    public function show($id)
    {
        return $this->village->show($id);
    }

    public function update(Request $request, $id)
    {
        return $this->village->update($request, $id);
    }

    public function store(Request $request)
    {
        return $this->village->store($request);
    }
}
