<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Master_kuesioner extends Model
{
    use HasFactory;
    protected $table = 'master_kuesioners';
    public $timestamps = true;

    protected $fillable = [
        domainId,
        domain_name,
        kriteriaId,
        kriteria_name,
        penjelasan,
        rendah,
        sedang,
        tinggi,
        sumber_evidence,
        asesee,
        catatan
    ];
}

