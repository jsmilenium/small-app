<?php

namespace App\Http\Controllers;

use App\CustomerStep;
use Illuminate\Http\Request;

class CustomerStepController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return CustomerStep::all();
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
        CustomerStep::create($request->all());
    }

    /**
     * Display the specified resource.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request)
    {
        $rs = CustomerStep::with('customer')->where('id_customer', $request->route('id'))->orderByDesc('id_step')->get();
        return $rs;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\CustomerStep  $customerStep
     * @return \Illuminate\Http\Response
     */
    public function edit(CustomerStep $customerStep)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\CustomerStep  $customerStep
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, CustomerStep $customerStep)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\CustomerStep  $customerStep
     * @return \Illuminate\Http\Response
     */
    public function destroy(CustomerStep $customerStep)
    {
        //
    }
}
