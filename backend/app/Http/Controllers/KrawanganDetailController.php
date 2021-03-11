<?php

namespace App\Http\Controllers;

use App\Models\KrawanganDetail;
use App\Services\KrawanganDetailServices;
use Illuminate\Http\Request;

class KrawanganDetailController extends Controller
{
    protected $krawanganDetail;
    public function __construct()
    {
        $this->middleware(['permission:krawangan']);
        $this->krawanganDetail = new KrawanganDetailServices();
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        return $this->krawanganDetail->store($request);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\KrawanganDetail  $krawanganDetail
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return $this->krawanganDetail->show($id);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\KrawanganDetail  $krawanganDetail
     * @return \Illuminate\Http\Response
     */
    public function edit(KrawanganDetail $krawanganDetail)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\KrawanganDetail  $krawanganDetail
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, KrawanganDetail $krawanganDetail)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\KrawanganDetail  $krawanganDetail
     * @return \Illuminate\Http\Response
     */
    public function destroy(KrawanganDetail $krawanganDetail)
    {
        //
    }
}
