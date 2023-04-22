import React, {useEffect, useState} from 'react';
import {jsonServise} from "../../services/json-servise";


import User from "./User";
import UsersForm from "./UsersForm";
import './Users.css';
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
            {
            showUsers && users.map((user) => <User key={user.id} user={user} />)
            }
            <button className={'showButton'} onClick={() => handleSubmit(!showUsers)}>
                {showUsers ? 'Hide' : 'Show'} Users
            </button>
        </div>
    );
};

export default Users;