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

    public function store(Request $request){
        $village = new Village();
        $village->nama_desa = $request->get('nama_desa');
        $village->alamat = $request->get('alamat');
        $village->kecamatan = $request->get('kecamatan');
        $village->no_surat = $request->get('no_surat');
        $village->kepala_desa = $request->get('kepala_desa');
        $village->nip_desa = $request->get('nip_desa');
        $village->status = $request->get('status');

        if($village->save())
        {
            return $this->successResponse($village, 'Village Stored Successfully', 201);
        }
    }

    public function update(Request $request, $id){
        $village = Village::find($id);
        $village->nama_desa = $request->get('nama_desa');
        $village->alamat = $request->get('alamat');
        $village->kecamatan = $request->get('kecamatan');
        $village->no_surat = $request->get('no_surat');
        $village->kepala_desa = $request->get('kepala_desa');
        $village->nip_desa = $request->get('nip_desa');
        $village->status = $request->get('status');
        $village->save();
        if($village->save())
        {
            return $this->successResponse($village, 'Village Updated Successfully', 201);
        }
    }
}
