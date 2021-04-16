<?php

namespace App\Services;

use App\Models\Krawangan;
use App\Models\User;
use App\Models\Village;
use App\Traits\ApiResponser;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class KrawanganServices
{
    use ApiResponser;

    public function index()
    {
        if (Auth::id() == 1) {
            $krawangans = Krawangan::with('village')->get();
        } else {
            $user = User::find(Auth::id());
            $krawangans = Krawangan::where('village_id', $user->village_id)->get();
        }
        return $this->successResponse($krawangans, 'Krawangan Data Retreived Successfully');
    }

    public function show($id)
    {
        $krawangan = Krawangan::with('krawanganDetail')->with('village')->where('krawangans.id', $id)->get();
        return $this->successResponse($krawangan, 'Krawangan Detail Data Retreived Successfully');
    }

    public function store(Request $request)
    {
        if ($request->file('image')) {
            $uploadFolder = 'krawangan';
            $image = $request->file('image');
            $image_uploaded_path = $image->store($uploadFolder, 'public');
        }

        $krawangan = new Krawangan();
        $krawangan->no_persil = $request->get('no_persil');
        $krawangan->foto = Storage::disk('public')->url($image_uploaded_path);

        if (Auth::id() != 1) {
            $user = User::find(Auth::id());
            $krawangan->village_id = $user['village_id'];
        } else {
            $krawangan->village_id = $request->get('village_id');
        }

        if ($krawangan->save()) {
            return $this->successResponse($krawangan, 'Krawangan Data Added Successfully');
        }
    }

    public function update(Request $request, $id)
    {
    }

    public function destroy($id)
    {
        $krawangan = Krawangan::find($id);
        $krawangan->delete();
        return $this->successResponse($krawangan, 'Krawangan Deleted Successfully', 200);
    }
}
