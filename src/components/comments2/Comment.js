import React from 'react';

import './Comment.css';

const Comment = ({comments}) => {

    const {userId, id, name, email, body} = comments;

    return (
        <div className={'commentDiv'}>
            <h4>userd id: {userId}. id: {id}.</h4>
            <h3>name: {name}</h3>
            <h5>email: {email}</h5>
            <h3>{body}</h3>
        </div>
    );
};

export default Comment;