<?php

namespace App\Http\Controllers;

use App\Services\VillageServices;
use Illuminate\Http\Request;

class VillageController extends Controller
{

    protected $village;

    public function __construct(VillageServices $village)
    {
        $this->village = $village;
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
}
