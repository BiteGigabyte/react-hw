// import React from 'react';
import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    cars: [

    ]
}

const carsSlice = createSlice({
    name: 'carsSlice',
    initialState

})

const carsReducer = carsSlice.reducer;

export default carsReducer;