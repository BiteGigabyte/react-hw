import axios from "axios";
import {basicURL} from "../configs/urls";

const axiosService = axios.create({basicURL});


export {
    axiosService
}