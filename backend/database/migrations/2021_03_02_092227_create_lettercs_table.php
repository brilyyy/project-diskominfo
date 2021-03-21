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
            $table->unsignedBigInteger('village_id')->nullable();
            $table->unsignedBigInteger('parent_id')->nullable();
            $table->string('name')->nullable();
            $table->bigInteger('nomor')->nullable();
            $table->string('tempat_tinggal')->nullable();
            $table->string('no_persil_sawah')->nullable();
            $table->string('desa_sawah')->nullable();
            $table->string('nasional_sawah')->nullable();
            $table->string('luas_sawah')->nullable();
            $table->string('pajak_sawah')->nullable();
            $table->string('mutasi_bumi')->nullable();
            $table->string('no_persil_darat')->nullable();
            $table->string('desa_darat')->nullable();
            $table->string('nasional_darat')->nullable();
            $table->string('luas_darat')->nullable();
            $table->string('pajak_darat')->nullable();
            $table->string('no_persil_bangunan')->nullable();
            $table->string('gol_bangunan')->nullable();
            $table->string('luas_bangunan')->nullable();
            $table->string('pajak_bangunan')->nullable();
            $table->string('mutasi_bangunan')->nullable();
            $table->timestamps();
        });
        Schema::table('lettercs', function (Blueprint $table) {
            $table->foreign('village_id')->references('id')->on('villages');
            $table->foreign('parent_id')->references('id')->on('lettercs')->onDelete('set null')->onUpdate('set null');
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
