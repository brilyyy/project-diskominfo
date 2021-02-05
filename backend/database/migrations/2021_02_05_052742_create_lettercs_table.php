<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLettercsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('lettercs', function (Blueprint $table) {
            $table->id();
            $table->string('nama');
            $table->bigInteger('nomor');
            $table->string('no_persil_sawah');
            $table->string('desa_sawah');
            $table->string('nasional_sawah');
            $table->string('luas_sawah');
            $table->string('pajak_sawah');
            $table->string('mutasi_bumi');
            $table->string('no_persil_darat');
            $table->string('desa_darat');
            $table->string('nasional_darat');
            $table->string('luas_darat');
            $table->string('pajak_darat');
            $table->string('no_persil_bangunan');
            $table->string('gol_bangunan');
            $table->string('luas_bangunan');
            $table->string('pajak_bangunan');
            $table->string('mutasi_bangunan');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('lettercs');
    }
}
