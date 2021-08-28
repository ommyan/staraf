<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class General extends Model
{
    use HasFactory;
    protected $table = 'generals';
    public $timestamps = true;

    protected $fillable = [
        nama,
        userid,
        kategori,
        pemilik_web,
        pemilik_email,
        pemilik_telp,
        pengembang_email,
        pengembang_telp,
        pengembang_web,
        implementor_email,
        implementor_telp,
        implementor_web,
        catatan
    ];
};
