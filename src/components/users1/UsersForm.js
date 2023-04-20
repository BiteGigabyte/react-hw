import React from 'react';
import {useForm} from "react-hook-form";
import {jsonServise} from "../../services/json-servise";

const UsersForm = ({setUsers}) => {

    // const {register, handleSubmit, reset, formState: {errors, isValid}, setValue} = useForm(
    const {register, handleSubmit, reset, formState: {errors, isValid}} = useForm(
    {
        mode: 'all',
        // resolver: joiResolver(carValidator)
    }
    );

    const create = async (user) => {
        const {data} = await jsonServise.createNewUser(user);
        setUsers(prev => [...prev, data]);
        reset();
    }


    return (
        <form onSubmit={handleSubmit(create)}>
            <input type="text" placeholder={'name'} {...register('name', {
                pattern:
                    {
                    value: /^.+ .+$/,
                    message: 'Введіть через пробіл ім\'я та фамілію.'
                    },
                    required: {value: true, message: 'required field'}
            })} />
            {errors.name && <span>{errors.name.message}</span>}
            <input type="text" placeholder={'email'} {...register('email', {
                pattern:
                    {
                    value: /^.+@.+[.].{2,4}$/,
                    message: 'Введіть коректний email адрес.'
                    },
                    required: {value: true, message: 'required field'}
            })} />
            {errors.email && <span>{errors.email.message}</span>}
            <input type="text" placeholder={'username'} {...register('username', {
                pattern: {
                    value: /^[a-zA-Zа-яА-ЯёЁіІїЇ]+[a-zA-Zа-яА-ЯёЁіІїЇ0-9]+$/,
                    message: 'Введіть нікнейм - мінімум 2 символи'
                },
                required: {value: true, message: 'required field'}
            })} />
            {errors.username && <span>{errors.username.message}</span>}
            <button disabled={!isValid}>Create</button>
        </form>
    );
};

export default UsersForm;