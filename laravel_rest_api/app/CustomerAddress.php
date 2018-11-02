<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CustomerAddress extends Model
{
    protected $table = 'customer_address';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'id_customer', 'street', 'house_number', 'zip_code', 'city',
    ];

    public function customer(){
        return $this->hasMany(Customer::class, 'id_customer', 'id_customer');
    }
}
