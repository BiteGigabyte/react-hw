import React from 'react';
import {Outlet, useNavigate, useParams} from "react-router-dom";

const Comment = ({item}) => {
    let navigate = useNavigate();
    const { id } = useParams();
    return (
        <div style={{border: '2px solid red'}}>
            <h4>userId: {item.postId}; id: {item.id}.</h4>
            <h3> name: {item.name}</h3>
            <h3> email: {item.email}</h3>
            <h4>body: {item.body}</h4>

            <button style={{margin: '5px'}} onClick={() => {
                navigate(item.postId.toString());
            }}>details of comment
            </button>


            <div>
                {id === item.postId.toString() &&
                    (<Outlet id={item.postId}/>)}
            </div>
        </div>
    );
};

export default Comment;