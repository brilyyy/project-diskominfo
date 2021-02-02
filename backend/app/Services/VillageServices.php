<?php

namespace App\Services;

use App\Http\Resources\VillageResource;
use App\Models\Village;
use Illuminate\Http\Request;

class VillageServices{
    public static function all(){
        $villages = Village::paginate(10);
        return VillageResource::collection($villages);
    }

    public static function update(Request $request, $id){
        $village = Village::findOrFail($id);
        $village->nama = $request->nama;
        $village->alamat_kantor = $request->alamat_kantor;
        $village->nama_kades = $request->nama_kades;
        $village->kode = $request->kode;
        $village->kode_desa = $request->kode_desa;
        if($village->save()){
            return new VillageResource($village);
        }
    }

    public static function show($id){
        $village = Village::findOrFail($id);
        return new VillageResource($village);
    }
}
