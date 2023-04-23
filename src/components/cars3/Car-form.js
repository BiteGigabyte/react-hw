import React from 'react';
import {useForm} from "react-hook-form";
// import {joiResolver} from "@hookform/resolvers/joi";


// import {carValidator} from "../../validators/car-validator";
import {carService} from "../../services/cars-servise";

const CarForm = ({setCars}) => {

    const {register, handleSubmit, reset, formState: {errors, isValid}} = useForm(
        {
            mode: 'all',
            // resolver: joiResolver(carValidator)
        }
    );

    const create = async (car) => {
        const {data} = await carService.create(car);
        setCars(prev => [...prev, data]);
        reset();
    }


    return (
        <form onSubmit={handleSubmit(create)}>
            {/*<input type="number" placeholder={'user id'} {...register('userId'*/}
            {/*)} />*/}
            {/*{errors.userId && <span>{errors.userId.message}</span>}*/}
            <input type="text" placeholder={'brand'} {...register('brand'
            )} />
            {errors.name && <span>{errors.name.message}</span>}
            <input type="number" placeholder={'price'} {...register('price'
            )} />
            {errors.email && <span>{errors.email.message}</span>}
            <input type="number" placeholder={'year'} {...register('year'
            )} />
            {errors.body && <span>{errors.body.message}</span>}
            <button disabled={!isValid}>Create</button>
        </form>
    );
};

export default CarForm;