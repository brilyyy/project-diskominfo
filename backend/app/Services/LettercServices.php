<?php

namespace App\Services;

use App\Http\Resources\LettercResource;
use App\Models\Letterc;
use Illuminate\Http\Request;

class LettercServices
{
    public static function all() {
        $lettercs = Letterc::paginate(10);
        return LettercResource::collection($lettercs);
    }

    public static function add(Request $request){
        $letterc = new Letterc();
        $letterc->title = $request->title;
        $letterc->body = $request->body;
        if($letterc->save()){
            return new LettercResource($letterc);
        }
    }

    public static function update(Request $request, $id){
        $letterc = Letterc::findOrFail($id);
        $letterc->title = $request->title;
        $letterc->body = $request->body;
        if($letterc->save()){
            return new LettercResource($letterc);
        }
    }

    public static function show($id){
        $letterc = Letterc::findOrFail($id);
        return new LettercResource($letterc);
    }

    public static function delete($id){
        $letterc = Letterc::findOrFail($id);
        if($letterc->delete()){
            return new LettercResource($letterc);
        }
    }
}
