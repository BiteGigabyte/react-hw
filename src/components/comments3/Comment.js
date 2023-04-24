import React from 'react';
import {Outlet, useNavigate} from "react-router-dom";

const Comment = ({item}) => {
    let navigate = useNavigate();
    return (
        <div>
            <h4>userId: {item.postId}; id: {item.id}.</h4>
            <h3> name: {item.name}</h3>
            <h3> email: {item.email}</h3>
            <h4>body: {item.body}</h4>
            {/*{console.log(item.completed)}*/}

            <button onClick={() => {
                navigate(item.postId.toString());
            }}>details of comment
            </button>


            <div>
                <h4>Comment details view: </h4>
                <Outlet/>
            </div>
        </div>
    );
};

export default Comment;