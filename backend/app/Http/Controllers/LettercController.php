<?php

namespace App\Http\Controllers;

use App\Services\LettercServices;
use Illuminate\Http\Request;

class LettercController extends Controller
{

    protected $letterc;

    public function __construct()
    {
        $this->middleware(['permission:letterc']);
        $this->letterc = new LettercServices();
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return $this->letterc->index();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        return $this->letterc->store($request);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Letterc  $letterc
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return $this->letterc->show($id);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Letterc  $letterc
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        return $this->letterc->update($request, $id);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Letterc  $letterc
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        return $this->letterc->destroy($id);
    }

    public function detailLetter($id)
    {
        return $this->letterc->detailLetter($id);
    }
}
