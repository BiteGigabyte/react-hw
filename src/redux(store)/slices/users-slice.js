// import React from 'react';
import {createSlice} from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    users: [

    ]
}

const usersSlice = createSlice({
    name: 'usersSlice',
    initialState,
    reducers: {
        setUsers: (state, action) => {
            state.users = action.payload;
        }
    }

})


const usersReducer = usersSlice.reducer;


axios('https://jsonplaceholder.typicode.com/users')
    .then(response => response.data)
    .then(data => usersSlice.actions.setUsers(data));

export const { setUsers } = usersSlice.actions;
// export default usersSlice.reducer;

export default usersReducer;