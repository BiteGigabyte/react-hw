import React from 'react';
import {useForm} from "react-hook-form";

const UsersForm = () => {

    const {register, handleSubmit, reset, formState: {errors, isValid}, setValue} = useForm(
        // {
        // mode: 'all',
        // resolver: joiResolver(carValidator)
    // }
    );

    const create = (data) => {
        console.log(data);
    }


    return (
            <form onSubmit={handleSubmit(create)}>
                <input type="text" placeholder={'name'} {...register('name')} />
                <input type="text" placeholder={'email'} {...register('email')} />
                <input type="text" placeholder={'username'} {...register('username')} />
                <button>Create</button>
            </form>
    );
};

export default UsersForm;