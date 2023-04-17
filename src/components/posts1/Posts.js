// import React, { useState, useEffect } from 'react';
// // import Post from './Post';
//
//
// {/*з jsonplaceholder отримати всі пости в компоненту Posts.js*/}
// {/*відобразити кожного інформацію (id,title) з кожного поста (компонента Post)*/}
// {/*Зробити кнопку вибора поста, при натисканні на яку в Posts.js ви покажете детальну інфомацію про пост(всю інфу)*/}
//
//
// const Posts = () => {
//     const [posts, setPosts] = useState([]);
//     const [selectedPost, setSelectedPost] = useState(null);
//
//     useEffect(() => {
//         fetch('https://jsonplaceholder.typicode.com/posts')
//             .then(response => response.json())
//             .then(data => setPosts(data));
//     }, []);
//
//
//     return (
//         <div>
//             {/* Відображення кожного поста */}
//             {posts.map(post => (
//                 <div key={post.id}>
//                     <h2>{post.id}: {post.title}</h2>
//                     {/* Кнопка вибору поста */}
//                     <button onClick={() => setSelectedPost(prev => !prev)}>Вибрати пост</button>
//             {selectedPost && <div>
//                 <h2>{selectedPost.id} {selectedPost.title}</h2>
//                 <h3>user id: {selectedPost.userId}</h3>
//                 <p>{selectedPost.body}</p>
//             </div>}
//                 </div>
//             ))}
//             {/* Відображення детальної інформації про обраний пост */}
//
//         </div>
//     );
// };
//
// export default Posts;


import React, { useState, useEffect } from 'react';

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [currentPostId, setCurrentPostId] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => setPosts(data));
    }, []);

    const handleClick = id => {
        setCurrentPostId(id);
    };

    return (
        <div>
            {posts.map(post => (
                <div key={post.id}>
                    <h2>
                        {post.id}: {post.title}
                    </h2>
                    <button onClick={() => handleClick(post.id)}>Вибрати пост</button>
                    {currentPostId === post.id && (
                        <div>
                            <h2>
                                {post.id}: {post.title}
                            </h2>
                            <h3>user id: {post.userId}</h3>
                            <p>{post.body}</p>
                        </div>
                    )}
                    <br />
                    <br />
                </div>
            ))}
        </div>
    );
};

export default Posts;
