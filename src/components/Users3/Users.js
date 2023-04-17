import React, {useEffect, useState} from 'react';
import axios from "axios";
import Post from "./Post";
import './Users.css';


                                // {/*// /!*#Advance*!/*/}
    //


const Users = () => {

    const [users, setUsers] = useState([]);
    const [posts, setPosts] = useState(null);

    useEffect(() => {
        axios('https://jsonplaceholder.typicode.com/users/').then(value => value.data).then(value => {
            setUsers(value);
        })
    }, [])


    const clickMethod = (id) => {
        if (id === posts) {
        setPosts(null);
    } else {
        setPosts(id);
    }
    }


    return (
        <div className={'main_users3'}>
            {users.map(value => {

                    return (
                        <div key={value.id} className={'users3'}>

                                {/*// /!*вивести всіх юзерів з плайсхолдеру*!/*/}
                                <h2>{value.id}: {value.name}</h2>
                                <h3>{value.username}</h3>
                                <p>{value.email}</p>
                                {/*// /!*в кожного юзера має бути кнопка яка буде показувати пости цього юзера*!/*/}
                                <button onClick={() => clickMethod(value.id)}>User details</button>
                                {/*// /!*пости мають виводитись під компонетою Users (в App компоненті)*!/*/}
                                {
                                    posts === value.id && <Post id={posts} />
                                }

                        </div>
                    )
                }
            )
            }
        </div>
    );
};

export default Users;