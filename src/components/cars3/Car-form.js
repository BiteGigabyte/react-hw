import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
// import {joiResolver} from "@hookform/resolvers/joi";


import {carsValidator} from "../../validators/cars-validator";
import {carService} from "../../services/cars-servise";

// const CarForm = ({setCars}) => {
const CarForm = ({setShowCars, carForUpdate, setCarForUpdate}) => {

    const {register, handleSubmit, reset, formState: {errors, isValid}, setValue} = useForm(
        {
            mode: 'all',
            resolver: joiResolver(carsValidator)
        }
    );

    useEffect(() => {
        if (carForUpdate) {
            setValue('brand', carForUpdate.brand, {shouldValidate: true})
            setValue('price', carForUpdate.price, {shouldValidate: true})
            setValue('year', carForUpdate.year, {shouldValidate: true})
        }
    },[carForUpdate, setValue])


    const create = async (car) => {
        // const {data} = await carService.create(car);
        setShowCars(prevState => prevState);
        await carService.create(car);
        // setCars(prev => [...prev]);
        reset();
    }

    const update = async (car) => {
        await carService.updateById(carForUpdate.id, car);
        setShowCars(prevState => prevState);
        reset();
        setCarForUpdate(null);
    }


    return (
        <form onSubmit={handleSubmit(carForUpdate ? update : create)}>
            <input style={{height: '39px'}} type="text" placeholder={'brand'} {...register('brand'
            )} />
            {errors.name && <span>{errors.name.message}</span>}
            <input style={{height: '39px'}} type="number" placeholder={'price'} {...register('price'
            )} />
            {errors.email && <span>{errors.email.message}</span>}
            <input style={{height: '39px'}} type="number" placeholder={'year'} {...register('year'
            )} />
            {errors.body && <span>{errors.body.message}</span>}
            <button style={{height: '39px', 'margin-left':'3px'}} disabled={!isValid} >{carForUpdate ? 'Update' : 'Create'}</button>
        </form>
    );
};

export default CarForm;