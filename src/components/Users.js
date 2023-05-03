import React from 'react';
import {useSelector} from "react-redux";

import store from "../redux(store)/store";

const Users = () => {

    const {users} = useSelector(store => store.users);

    return (
        <div>
            Users
        </div>
    );
};

export {Users};