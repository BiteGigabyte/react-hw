import React from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";


import {commentValidator} from "../../validators/comment-validator";
import {jsonServises} from "../../services/json-servises";

const CommentForm = ({setComments}) => {

    const {register, handleSubmit, reset, formState: {errors, isValid}} = useForm(
        {
            mode: 'all',
            resolver: joiResolver(commentValidator)
        }
    );

    const create = async (comment) => {
        const {data} = await jsonServises.createNewComment(comment);
        setComments(prev => [...prev, data]);
        reset();
    }


    return (
        <form onSubmit={handleSubmit(create)}>
            <input type="text" placeholder={'name'} {...register('name'
            )} />
            {errors.name && <span>{errors.name.message}</span>}
            <input type="text" placeholder={'email'} {...register('email'
            )} />
            {errors.email && <span>{errors.email.message}</span>}
            <input type="text" placeholder={'body'} {...register('body'
            )} />
            {errors.body && <span>{errors.body.message}</span>}
            <button disabled={!isValid} >Create</button>
        </form>
    );
};

export default CommentForm;