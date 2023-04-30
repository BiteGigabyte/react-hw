import {Link, Route, Routes} from "react-router-dom";
import React from "react";
// import { useState } from "react";

// import { Posts } from "./components/posts1/Posts";
// import {PostsPage} from "./components/posts1/Posts-page";
import './App.css';
import {Posts} from "./components/posts1/Posts";
import {Comments} from "./components/comments2/Comments";
//


// отримати пости та вивести їх використовуючи класові копмоненти
// отримати коментарі та вивести їх використовуючи класові копмоненти
//
// Використовуючи хук useReducer в якому початковый стейт буде {cats: [], dogs:[]}
// Реалізвути збереження окремо нового кота, та окремо собаку (приклад на зображенні)
//
// Advance
// реалізувати видалення для кожного при натисканні на кнопку delete


function App() {


    return (
        <div className="App">

        <Link to={'posts1'}>Posts - 1</Link>
        <Link to={'comments2'}>Comments - 2</Link>

        <Routes>

            <Route path={'posts1'} element={<Posts/>}/>
            <Route path={'comments2'} element={<Comments/>}/>
            {/*<Route path={'comments2'} element={}*/}

        </Routes>


        </div>
    );
}

export default App;
