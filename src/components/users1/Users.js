import React, {useEffect, useState} from 'react';
import {jsonServise} from "../../services/json-servise";


import User from "./User";
import UsersForm from "./UsersForm";
// import {urls} from "../../configs/urls";


const Users = () => {

    const [users, setUsers] = useState([]);
    const [showUsers, setShowUsers] = useState(false);

    useEffect(() => {
        jsonServise.getAllUsers().then(value => value.data).then(value => setUsers(value));
    }, [])


    const handleSubmit = (action) => {
        setShowUsers(action !== false);
    };

    return (
        <div>
            <UsersForm setUsers={setUsers}/>
            {/*<button onClick={() => handleSubmit(showUsers ? false : true)}>*/}
            <button onClick={() => handleSubmit(!showUsers)}>
                {showUsers ? 'Hide' : 'Show'} Users
            </button>
            {
            showUsers && users.map((user) => <User key={user.id} user={user} />)
            }
        </div>
    );
};

export default Users;