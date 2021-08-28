<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Jawaban_kuesioner extends Model
{
    use HasFactory;
    protected $table = 'jawaban_kuesioners';
    public $timestamps = true;

    protected $fillable = [
        domainId,
        kriteriaId,
        jawaban,
        evidence,
        catatan
    ];
}

