import axios from "axios";
import React,{useEffect, useState} from 'react';

import Todo from "./Todo";



const Todos = () => {
    let [posts, setPosts] = useState([]);
    useEffect(() => {
        axios('https://jsonplaceholder.typicode.com/todos')
            .then(value => value.data)
            .then(value => {
                setPosts(value);
            });

    }, [])

    return (
        <div>


            <div>
                <h2>All todos</h2>

                {
                    posts.map(value => <Todo item={value} key={value.id}/>)
                }

            </div>
        </div>
    );
};

export default Todos;