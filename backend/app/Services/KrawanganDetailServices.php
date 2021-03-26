<?php

namespace App\Services;

use App\Models\KrawanganDetail;
use App\Traits\ApiResponser;
use Illuminate\Http\Request;

class KrawanganDetailServices
{
    use ApiResponser;

    public function index()
    {
    }

    public function show($id)
    {
        $detail = KrawanganDetail::where('krawangan_id', $id)->get();
        return $this->successResponse($detail, 'Success');
    }

    public function store(Request $request)
    {
        $detail = new KrawanganDetail();
        $detail->krawangan_id = $request->get('krawangan_id');
        $detail->nomor_letterc = $request->get('nomor_letterc');
        $detail->nama = $request->get('nama');
        $detail->luas = $request->get('luas');
        $detail->blok_persil = $request->get('blok_persil');

        if ($detail->save()) {
            return $this->successResponse($detail, 'Krawangan Detail Stored Successfully', 201);
        }
    }
}
