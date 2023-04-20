import React from 'react';

const User = ({user}) => {

    const {id, name, username, email} = user;


    return (
        <div>
            <h3>id: {id}, username: {username}</h3>
            <h4>name: {name}</h4>
            <p>email: {email}</p>
        </div>
    );
};

export default User;