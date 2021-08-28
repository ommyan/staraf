<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateJawabanKuesionerTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('jawaban_kuesioner', function (Blueprint $table) {
            $table->id();
            $table->string('userid')->unique();
            $table->string('domainId');
            $table->string('kriteriaId');
            $table->string('jawaban');
            $table->string('evidence');
            $table->string('catatan');
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
        Schema::dropIfExists('jawaban_kuesioner');
    }
}
