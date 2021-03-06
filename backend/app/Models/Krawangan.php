<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Krawangan extends Model
{
    use HasFactory;

    protected $table = 'krawangans';

    protected $fillable = [
        'village_id',
        'no_persil'
    ];

    public function village(){
        return $this->belongsTo(Village::class);
    }

    public function krawanganDetail() {
        return $this->hasMany(KrawanganDetail::class);
    }
}
