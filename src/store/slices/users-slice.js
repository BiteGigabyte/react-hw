// import React from 'react';
import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    users: [

    ]
}

const usersSlice = createSlice({
    name: 'usersSlice',
    initialState

})


const usersReducer = usersSlice.reducer;

export default usersReducer;