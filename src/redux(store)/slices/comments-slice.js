// import React from 'react';
import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    comments: [

    ]
}

const commentsSlice = createSlice({
    name: 'commentsSlice',
    initialState

})


const commentsReducer = commentsSlice.reducer;

export default commentsReducer;