import React, {useEffect, useState} from 'react';
import axios from "axios";


                                // {/*// /!*#Advance*!/*/}
    //


const Users = () => {

    const [users, setUsers] = useState([]);
    // const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios('https://jsonplaceholder.typicode.com/users/').then(value => value.data).then(value => {
            setUsers(value);
        })
    }, [])

    // const clickMethod (id) = {
    //
    // }


    return (
        <div>
            {users.map(value => {

                    return (
                        <div key={value.id}>

                                {/*// /!*вивести всіх юзерів з плайсхолдеру*!/*/}
                                <h2>{value.id}: {value.name}</h2>
                                <h3>{value.username}</h3>
                                <p>{value.email}</p>
                                {/*// /!*в кожного юзера має бути кнопка яка буде показувати пости цього юзера*!/*/}
                                {/*<button onClick={clickMethod}>User details</button>*/}
                                {/*// /!*пости мають виводитись під компонетою Users (в App компоненті)*!/*/}


                        </div>
                    )
                }
            )
            }
        </div>
    );
};

export default Users;