<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class ChangeLettercTableStructure extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('lettercs', function(Blueprint $table){
            $table->string('nama')->nullable()->change();
            $table->bigInteger('nomor')->nullable()->change();
            $table->string('no_persil_sawah')->nullable()->change();
            $table->string('desa_sawah')->nullable()->change();
            $table->string('nasional_sawah')->nullable()->change();
            $table->string('luas_sawah')->nullable()->change();
            $table->string('pajak_sawah')->nullable()->change();
            $table->string('mutasi_bumi')->nullable()->change();
            $table->string('no_persil_darat')->nullable()->change();
            $table->string('desa_darat')->nullable()->change();
            $table->string('nasional_darat')->nullable()->change();
            $table->string('luas_darat')->nullable()->change();
            $table->string('pajak_darat')->nullable()->change();
            $table->string('no_persil_bangunan')->nullable()->change();
            $table->string('gol_bangunan')->nullable()->change();
            $table->string('luas_bangunan')->nullable()->change();
            $table->string('pajak_bangunan')->nullable()->change();
            $table->string('mutasi_bangunan')->nullable()->change();
            $table->string('foto')->nullable()->change();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('lettercs', function (Blueprint $table) {
            //
        });
    }
}
