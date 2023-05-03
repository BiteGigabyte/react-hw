import {configureStore} from "@reduxjs/toolkit";


import usersReducer from "./slices/users-slice";
import carsReducer from "./slices/cars-slice";
import commentsReducer from "./slices/comments-slice";

const store = () => configureStore({
    reducer: {
        users: usersReducer,
        comments: commentsReducer,
        cars: carsReducer


    }
});

export default store;