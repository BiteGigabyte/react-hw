import React from 'react';
import {carService} from "../../services/cars-servise";

// import './Car.css';

const Car = ({cars}) => {

    const Delete = (id) => carService.deleteById(id);

    const {id, brand, price, year} = cars;

    return (
        <div className={'carDiv'}>
            <h3>post id: {id}. brand: {brand}.</h3>
            <h4>price: {price}</h4>
            <h5>year: {year}</h5>
            <button onClick={() => Delete(id)}>Delete</button>
            <button>Update car</button>
            <button>Update car element</button>
        </div>
    );
};

export default Car;