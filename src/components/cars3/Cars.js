import React, {useEffect, useState} from "react";

import Car from "./Car";
import CarForm from "./Car-form";
// import "./Cars.css";
import {carService} from "../../services/cars-servise";

const Cars = () => {
    const [cars, setCars] = useState([]);
    const [showCars, setShowCars] = useState(false);
    const [carForUpdate, setCarForUpdate] = useState(null);
    //
    const [carIndex, setCarIndex] = useState(0);
    const [numCars, setNumCars] = useState(5);

    useEffect(() => {
        carService
            .getAll()
            .then((value) => value.data)
            .then((value) => setCars(value));
    }, [cars]);


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
            {showCars && displayedComments.map((car) => <Car key={car.id} cars={car} setCarForUpdate={setCarForUpdate}/>)}
            {/*<CarForm setCars={setCars}/>*/}
            <CarForm setShowCars={setShowCars} carForUpdate={carForUpdate} setCarForUpdate={setCarForUpdate}/>
            <div className={"carsButtonDiv"}>
                <div style={{'margin-top': '7px'}} className={"pagination"}>
                    <button style={{width: '19%', height: '50px'}} className={"prevButton"} onClick={handlePrevClick} disabled={carIndex === 0}>
                        Prev
                    </button>
                    <button style={{width: '19%', height: '50px'}} className={"nextButton"} onClick={handleNextClick} disabled={carIndex + numCars >= cars.length}>
                        Next
                    </button>
                </div>
                <div style={{'font-size': '200%'}} className={"numCarsSelect"}>
                    <label htmlFor={"numCarsSelect"}>Show</label>
                    <select style={{'font-size':'100%'}} id={"numCarsSelect"} value={numCars} onChange={handleNumCommentsChange}>
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
