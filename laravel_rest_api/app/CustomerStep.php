<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CustomerStep extends Model
{
    protected $table = 'customer_step';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'id_customer', 'id_step', 'telephone',
    ];

    public function customer(){
        return $this->hasMany(Customer::class, 'id_customer', 'id_customer');
    }
}
