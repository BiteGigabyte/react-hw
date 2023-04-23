import React from 'react';

import './Comment.css';

const Comment = ({comments}) => {

    const {postId, id, name, email, body} = comments;

    return (
        <div className={'commentDiv'}>
            <h4>post id: {postId}. id: {id}.</h4>
            <h3>name: {name}</h3>
            <h5>email: {email}</h5>
            <h3>{body}</h3>
        </div>
    );
};

export default Comment;