import React, {useEffect, useState} from 'react';
import axios from "axios";

const Post = ({id}) => {

    const [post, setPost] = useState([]);

    useEffect(() => {
        axios(`https://jsonplaceholder.typicode.com/users/${id}/posts`).then(value => value.data).then(value => {
            setPost(value);
        })
    }, [id])


    return (
        <div>
            {
                post.map((value) => {
                    return (
                        <div key={value.id}>
                        <h2>{value.id}: {value.title}</h2>
                        <h3>{value.body}</h3>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Post;