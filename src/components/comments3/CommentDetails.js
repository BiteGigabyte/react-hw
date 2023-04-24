import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";

const CommentDetails = () => {

    let {id} = useParams();
    let [post, setPost] = useState(null);

    useEffect(() => {
        axios('https://jsonplaceholder.typicode.com/posts/' + id)
            .then(value => value.data)
            .then(value => {
                setPost(value);
            });
    }, [id]);

    return (
        <div>
            {/*<h4>user id: {post.userId.toString()}; id: {post.id}</h4>*/}
            {post && <h4>id: {post.id}</h4>}
            {post && <h3>title: {post.title}</h3>}
            {post && <h4>body: {post.body}</h4>}

            {/*{*/}
            {/*    // <!--post && JSON.stringify(post)-->*/}
            {/*}*/}

        </div>
    );
};

export default CommentDetails;