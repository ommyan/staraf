<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateGeneralTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('general', function (Blueprint $table) {
            $table->id();
            $table->string('nama');
            $table->string('userid')->unique();
            $table->string('kategori');
            $table->string('pemilik_web');
            $table->string('pemilik_email');
            $table->string('pemilik_telp');
            $table->string('pengembang_web');
            $table->string('pengembang_email');
            $table->string('pengembang_telp');
            $table->string('implementor_web');
            $table->string('implementor_email');
            $table->string('implementor_telp');
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
        Schema::dropIfExists('general');
    }
}
