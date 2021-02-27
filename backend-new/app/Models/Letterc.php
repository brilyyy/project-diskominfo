<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Letterc extends Model
{
    use HasFactory;
    protected $table = 'lettercs';
    protected $fillable = [
        'nama',
        'nomor',
        'no_persil_sawah',
        'desa_sawah',
        'nasional_sawah',
        'luas_sawah',
        'pajak_sawah',
        'mutasi_bumi',
        'no_persil_darat',
        'desa_darat',
        'nasional_darat',
        'luas_darat',
        'pajak_darat',
        'no_persil_bangunan',
        'gol_bangunan',
        'luas_bangunan',
        'pajak_bangunan',
        'mutasi_bangunan',
        'foto',
    ];
    public function user(){
        $this->belongsTo(User::class);
    }
}
