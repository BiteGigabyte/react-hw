import React from 'react';
import {carService} from "../../services/cars-servise";

import './Car.css';

const Car = ({cars, setCarForUpdate, setShowCars}) => {

    const Delete = async (id) => {
        await carService.deleteById(id);
        setShowCars(true);
    }

    const {id, brand, price, year} = cars;

    return (
        <div className={'carDiv'}>
            <h3>post id: {id}. brand: {brand}.</h3>
            <h4>price: {price}</h4>
            <h5>year: {year}</h5>
            <div className={'carButtonsDiv'}>
            <button onClick={() => Delete(id)}>Delete</button>
            <button onClick={() => setCarForUpdate(cars)}>Update car</button>
            </div>
                {/*<button>Update car element</button>*/}
        </div>
    );
};

export default Car;