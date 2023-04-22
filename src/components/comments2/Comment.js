import React from 'react';

const Comment = ({comments}) => {

    const [userId, id, name, email, body] = comments;

    return (
        <div>
            <h3>userd id: {userId}. id: {id}.</h3>
            <h4>{name}</h4>
            <h5>{email}</h5>
            <h3>{body}</h3>
        </div>
    );
};

export default Comment;