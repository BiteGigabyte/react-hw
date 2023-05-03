import axios from "axios";


import {basicURLJson, basicURLCars} from "../configs/urls";


const axiosServiceJson = axios.create({baseURL: basicURLJson});
const axiosServiceCars = axios.create({baseURL: basicURLCars});


export {
    axiosServiceJson,
    axiosServiceCars
}