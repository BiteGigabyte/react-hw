import React from 'react';

const Todo = ({item}) => {
    return (
        <div>
            <h4>userId: {item.userId}; id: {item.id}.</h4>
            <h3> title: {item.title}</h3>
        </div>
    );
};

export default Todo;