<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::prefix('v1')->group(function(){

    Route::get('/userpayment', 'UserPaymentController@index');
    Route::get('/customers', 'CustomerController@index');
    Route::get('/customersstep', 'CustomerStepController@index');
    Route::get('/customersaddress', 'CustomerAddressController@index');

    Route::get('/customers/{id}', 'CustomerController@show');
    Route::get('/customersuser/{id}', 'CustomerController@showUser');
    Route::get('/customersstep/{id}', 'CustomerStepController@show');
    Route::get('/customersaddress/{id}', 'CustomerAddressController@show');
    Route::get('/customerspayment/{id}', 'CustomerPaymentController@showCustomer');

    Route::post('/userpayment', 'UserPaymentController@show');
    Route::post('/customers', 'CustomerController@store');
    Route::post('/customersstep', 'CustomerStepController@store');
    Route::post('/customersaddress', 'CustomerAddressController@store');
    Route::post('/customerspayment', 'CustomerPaymentController@store');

    Route::post('/demopayment', 'DemoPaymentController@show');
});
