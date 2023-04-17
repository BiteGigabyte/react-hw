
// {/*з jsonplaceholder отримати всі пости в компоненту Posts.js*/}
// {/*відобразити кожного інформацію (id,title) з кожного поста (компонента Post)*/}
// {/*Зробити кнопку вибора поста, при натисканні на яку в Posts.js ви покажете детальну інфомацію про пост(всю інфу)*/}


import React, { useState, useEffect } from 'react';
import './Posts.css';

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [currentPostId, setCurrentPostId] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => setPosts(data));
    }, []);

    const handleClick = id => {
        // setCurrentPostId(id);
        if (id === currentPostId) {
            setCurrentPostId(null);
        } else {
            setCurrentPostId(id);
        }
    };

    return (
        <div>
            {posts.map((post) => (
                <div key={post.id} className={'task1'}>
                    <h2>
                        {post.id}: {post.title}
                    </h2>
                    <button onClick={() => handleClick(post.id)}>Вибрати пост</button>
                    {currentPostId === post.id && (
                        <div className={'borderius'}>
                            <h2>
                                {post.id}: {post.title}
                            </h2>
                            <h3>user id: {post.userId}</h3>
                            <p>{post.body}</p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Posts;
