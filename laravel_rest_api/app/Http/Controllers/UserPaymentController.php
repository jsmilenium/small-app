<?php

namespace App\Http\Controllers;

use App\UserPayment;
use Illuminate\Http\Request;

class UserPaymentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return UserPayment::all();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\UserPayment  $userPayment
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request, UserPayment $userPayment)
    {
        $post = $request->all();
        return UserPayment::where('username', $post["username"])->where('password' , $post["password"])->get();
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\UserPayment  $user
     * @return \Illuminate\Http\Response
     */
    public function edit(UserPayment $user)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\UserPayment  $user
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, UserPayment $user)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\UserPayment  $user
     * @return \Illuminate\Http\Response
     */
    public function destroy(UserPayment $user)
    {
        //
    }
}
