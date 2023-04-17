import React, {useEffect, useState} from 'react';
import axios from "axios";
import './SpaceLaunches.css'

// {/*https://api.spacexdata.com/v3/launches/*/}
// {/*потрібно вивести всі запуски кораблів окрім 2020 року*/}
// {/*репрезентувати тільки окремі поля (зазначені в скрнішоті в папці)*/}

const SpaceLaunches = () => {

const [launches, setLaunches] = useState([]);

useEffect(() => {
    axios('https://api.spacexdata.com/v3/launches/').then(value => value.data).then(value => {
        const filteredLaunch = value.filter(v => v.launch_year !== '2020');
        setLaunches(filteredLaunch);
    })
}, [])

    // return(
   return (
       <div className={'launchBlock'}>
           {launches.map((launch, index) => {
        return (
            <div key={launch.flight_number} className={'launchDetails'}>
                <h2>{launch.mission_name}</h2>
                <h3>year: {launch.launch_year}</h3>
                <img src={launch.links.mission_patch_small} alt={index} />
            </div>
        )
    })}
       </div>
   )

    // );
};

export default SpaceLaunches;