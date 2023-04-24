import axios from "axios";
import {Outlet} from "react-router-dom";
import React,{useEffect, useState} from 'react';

import Comment from "./Comment";



const Todos = () => {
    let [posts, setPosts] = useState([]);
    useEffect(() => {
        axios('https://jsonplaceholder.typicode.com/comments')
            .then(value => value.data)
            .then(value => {
                // setPosts([...value]);
                setPosts(value);
            });

    }, [])

    return (
        <div>


            <div>
                <h2>All comments</h2>

                {
                    posts.map(value => <Comment item={value} key={value.id}/>)
                }

            </div>

            {/*<div>*/}
            {/*    <h4>Comment details view: </h4>*/}
            {/*    <Outlet/>*/}
            {/*</div>*/}
        </div>
    );
};

export default Todos;