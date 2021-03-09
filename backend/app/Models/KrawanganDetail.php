<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class KrawanganDetail extends Model
{
    use HasFactory;

    protected $table = 'krawangan_details';

    protected $fillable = [
        'krawangan_id',
        'nomor_letterc',
        'luas',
        'mutasi',
        'blok_persil'
    ];

    public function krawangan()
    {
        return $this->belongsTo(Krawangan::class);
    }
}
