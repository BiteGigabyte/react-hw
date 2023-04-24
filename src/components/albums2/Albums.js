import axios from "axios";
import React,{useEffect, useState} from 'react';

import Album from "./Album";



const Albums = () => {
    let [posts, setPosts] = useState([]);
    useEffect(() => {
        axios('https://jsonplaceholder.typicode.com/albums')
            .then(value => value.data)
            .then(value => {
                setPosts(value);
            });

    }, [])

    return (
        <div>


            <div>
                <h2>All albums</h2>

                {
                    posts.map(value => <Album item={value} key={value.id}/>)
                }

            </div>
        </div>
    );
};

export default Albums;