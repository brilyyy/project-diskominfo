<?php

namespace App\Http\Controllers;

use App\Http\Resources\LettercResource;
use App\Models\Letterc;
use Illuminate\Http\Request;

class LettercController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $lettercs = Letterc::paginate(10);
        return LettercResource::collection($lettercs);
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
        $letterc = new Letterc();
        $letterc->title = $request->title;
        $letterc->body = $request->body;
        if($letterc->save()){
            return new LettercResource($letterc);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $letterc = Letterc::findOrFail($id);
        return new LettercResource($letterc);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $letterc = Letterc::findOrFail($id);
        $letterc->title = $request->title;
        $letterc->body = $request->body;
        if($letterc->save()){
            return new LettercResource($letterc);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $letterc = Letterc::findOrFail($id);
        if($letterc->delete()){
            return new LettercResource($letterc);
        }
    }
}
