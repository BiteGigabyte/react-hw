import React from 'react';
// import {useNavigate} from "react-router-dom";

const Todo = ({item}) => {
    // let navigate = useNavigate();
    return (
        <div>
            <h4>userId: {item.userId}; id: {item.id}.</h4>
            <h3> title: {item.title}</h3>
            <h4>completed: {item.completed.toString()}</h4>
            {/*{console.log(item.completed)}*/}

            {/*<button onClick={() => {*/}
            {/*    navigate(item.id.toString());*/}
            {/*}}>details of post*/}
            {/*</button>*/}

        </div>
    );
};

export default Todo;