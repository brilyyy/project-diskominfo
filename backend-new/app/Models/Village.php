<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Village extends Model
{
    use HasFactory;

    protected $table = 'villages';
    protected $fillable = [
        'kepala_desa',
        'nip'
    ];

    public function user(){
        return $this->belongsTo(User::class);
    }
    public function letterc(){
        return $this->hasMany(Letterc::class);
    }
}
