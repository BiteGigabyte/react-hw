import React, {useEffect, useState} from "react";

import Car from "./Car";
import CarForm from "./Car-form";
// import "./Cars.css";
import {carService} from "../../services/cars-servise";

const Cars = () => {
    const [cars, setCars] = useState([]);
    const [showCars, setShowCars] = useState(false);
    const [carIndex, setCarIndex] = useState(0);
    const [numCars, setNumCars] = useState(5);

    useEffect(() => {
        carService
            .getAll()
            .then((value) => value.data)
            .then((value) => setCars(value));
    }, []);


    const handleSubmit = (action) => {
        setShowCars(action !== false);
    };

    const handlePrevClick = () => {
        setCarIndex(Math.max(0, carIndex - numCars));
    };

    const handleNextClick = () => {
        setCarIndex(Math.min(cars.length - numCars, carIndex + numCars));
    };

    const handleNumCommentsChange = (event) => {
        setNumCars(parseInt(event.target.value, 10));
        setCarIndex(0);
    };


    const displayedComments = showCars ? cars.slice(carIndex, carIndex + numCars) : [];

    return (
        <div className={"carsDiv"}>
            {showCars && displayedComments.map((car) => <Car key={car.id} cars={car} />)}
            <CarForm setCars={setCars}/>
            <div className={"carsButtonDiv"}>
                <div className={"pagination"}>
                    <button className={"prevButton"} onClick={handlePrevClick} disabled={carIndex === 0}>
                        Prev
                    </button>
                    <button className={"nextButton"} onClick={handleNextClick} disabled={carIndex + numCars >= cars.length}>
                        Next
                    </button>
                </div>
                <div className={"numCarsSelect"}>
                    <label htmlFor={"numCarsSelect"}>Show</label>
                    <select id={"numCarsSelect"} value={numCars} onChange={handleNumCommentsChange}>
                        <option value={5}>5</option>
                        <option value={10}>10</option>
                        <option value={20}>20</option>
                        <option value={cars.length}>All</option>
                    </select>
                    <label htmlFor={"numCarsSelect"}>cars</label>
                </div>
                <button className={"showButton"} onClick={() => handleSubmit(!showCars)}>
                    {showCars ? "Hide" : "Show"} Cars
                </button>
            </div>
        </div>
    );
};

export default Cars;
