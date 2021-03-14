<?php

namespace App\Http\Controllers;

use App\Models\Krawangan;
use App\Services\KrawanganServices;
use Illuminate\Http\Request;

class KrawanganController extends Controller
{

    protected $krawangan;

    public function __construct()
    {
        $this->krawangan = new KrawanganServices();
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return $this->krawangan->index();
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
        return $this->krawangan->store($request);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Krawangan  $krawangan
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return $this->krawangan->show($id);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Krawangan  $krawangan
     * @return \Illuminate\Http\Response
     */
    public function edit(Krawangan $krawangan)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Krawangan  $krawangan
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Krawangan $krawangan)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Krawangan  $krawangan
     * @return \Illuminate\Http\Response
     */
    public function destroy(Krawangan $krawangan)
    {
        //
    }
}
