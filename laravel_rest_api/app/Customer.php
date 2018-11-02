<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{

    protected $table = 'customer';
    protected $primaryKey = 'id_customer';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'first_name', 'last_name', 'telephone', 'id_user'
    ];

    public function customerAddress(){
        return $this->belongsTo(CustomerAddress::class);
    }
    public function customerStep(){
        return $this->belongsTo(CustomerStep::class);
    }

    public function userPayment(){
        return $this->hasMany(UserPayment::class, 'id_user', 'id_user');
    }

}
