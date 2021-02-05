<?php

namespace App\Services;

use App\Http\Resources\LettercResource;
use App\Models\Letterc;
use App\Traits\ApiResponser;
use Illuminate\Http\Request;

class LettercServices
{
    use ApiResponser;

    public function index()
    {
        $lettercs = Letterc::all();
        return $this->successResponse($lettercs, 'Lettercs Data Retrieved Successfully');
    }

    public function store(Request $request)
    {
        $letterc = new Letterc;
        $letterc->nama = $request->get('nama');
        $letterc->nomor = $request->get('nomor');
        $letterc->no_persil_sawah = $request->get('no_persil_sawah');
        $letterc->desa_sawah = $request->get('desa_sawah');
        $letterc->nasional_sawah = $request->get('nasional_sawah');
        $letterc->luas_sawah = $request->get('luas_sawah');
        $letterc->pajak_sawah = $request->get('pajak_sawah');
        $letterc->mutasi_bumi = $request->get('mutasi_bumi');
        $letterc->no_persil_darat = $request->get('no_persil_darat');
        $letterc->desa_darat = $request->get('desa_darat');
        $letterc->nasional_darat = $request->get('nasional_darat');
        $letterc->luas_darat = $request->get('luas_darat');
        $letterc->pajak_darat = $request->get('pajak_darat');
        $letterc->no_persil_bangunan = $request->get('no_persil_bangunan');
        $letterc->gol_bangunan = $request->get('gol_bangunan');
        $letterc->luas_bangunan = $request->get('luas_bangunan');
        $letterc->pajak_bangunan = $request->get('pajak_bangunan');
        $letterc->mutasi_bangunan = $request->get('mutasi_bangunan');

        if($letterc->save())
        {
            return $this->successResponse(new LettercResource($letterc), 'Letterc Stored Successfully', 201);
        }

    }

    public function show($id)
    {
        $data = Letterc::find($id);
        return $this->successResponse($data, 'Letterc Details Retrieved Successfully', 200);
    }

    public function update(Request $request, $id)
    {
        $letterc = Letterc::find($id);

        $letterc->nama = $request->get('nama');
        $letterc->nomor = $request->get('nomor');
        $letterc->no_persil_sawah = $request->get('no_persil_sawah');
        $letterc->desa_sawah = $request->get('desa_sawah');
        $letterc->nasional_sawah = $request->get('nasional_sawah');
        $letterc->luas_sawah = $request->get('luas_sawah');
        $letterc->pajak_sawah = $request->get('pajak_sawah');
        $letterc->mutasi_bumi = $request->get('mutasi_bumi');
        $letterc->no_persil_darat = $request->get('no_persil_darat');
        $letterc->desa_darat = $request->get('desa_darat');
        $letterc->nasional_darat = $request->get('nasional_darat');
        $letterc->luas_darat = $request->get('luas_darat');
        $letterc->pajak_darat = $request->get('pajak_darat');
        $letterc->no_persil_bangunan = $request->get('no_persil_bangunan');
        $letterc->gol_bangunan = $request->get('gol_bangunan');
        $letterc->luas_bangunan = $request->get('luas_bangunan');
        $letterc->pajak_bangunan = $request->get('pajak_bangunan');
        $letterc->mutasi_bangunan = $request->get('mutasi_bangunan');

        if($letterc->save())
        {
            return $this->successResponse(new LettercResource($letterc), 'Letterc Stored Successfully', 200);
        }
    }

    public function destroy($id)
    {
        $letterc = Letterc::find($id);
        $letterc->delete();

        return $this->successResponse($letterc, 'Letterc Deleted Successfully', 200);
    }


}
