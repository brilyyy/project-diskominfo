<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Image extends Model
{
    use HasFactory;
    protected $table = 'images';
    protected $fillable = [
        'letterc_id',
        'path',
    ];

    public function letterc(){
        return $this->belongsTo(Letterc::class);
    }
}
