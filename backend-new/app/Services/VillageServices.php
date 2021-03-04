<?php

namespace App\Services;

use App\Models\Village;
use App\Http\Resources\VillageResource;
use App\Services\JsonResponse;
use App\Traits\ApiResponser;
use Illuminate\Http\Request;

class VillageServices
{
    use ApiResponser;

    public function index()
    {
        $data = Village::where('id', '!=', 1)->get();
        return $this->successResponse($data, 'Villages Data Retreived Successfully');
    }

    public function show($id){
        $data = Village::find($id);
        return $this->successResponse($data, 'Village Details Retreived Successfully');
    }

    public function update(Request $request, $id){
        $village = Village::find($id);
        $village->kepala_desa = $request->get('kepala_desa');
        $village->nip_desa = $request->get('nip_desa');
        $village->save();
        return $this->successResponse($village, 'Village Updated Successfully');
    }
}
