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
        'tempat_tinggal',
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
        'village_id',
        'parent_id',
    ];
    public function village()
    {
        return $this->belongsTo(Village::class);
    }

    public function letterc()
    {
        return $this->hasMany(Letterc::class, 'parent_id');
    }

    public function children()
    {
        return $this->letterc()->with('children');
    }
}
