import {Link, Route, Routes} from "react-router-dom";
import React from "react";
// import { useState } from "react";

// import { Posts } from "./components/posts1/Posts";
// import {PostsPage} from "./components/posts1/Posts-page";
import './App.css';
import {Posts} from "./components/posts1/Posts";
import {Comments} from "./components/comments2/Comments";
import AnimalsPage from "./components/animals3/Animals-page";
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
            <div>
                <Link to={'posts1'}> Posts - 1 </Link>
            </div>
            <div>
                <Link to={'comments2'}> Comments - 2 </Link>
            </div>
            <div>
                <Link to={'animals3'}> Animals - 3 </Link>
            </div>

        <Routes>
            <Route path={'posts1'} element={<Posts/>}/>
            <Route path={'comments2'} element={<Comments/>}/>
            <Route path={'animals3'} element={<AnimalsPage/>}/>
        </Routes>

        </div>
    );
}

export default App;
