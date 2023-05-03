
import {axiosServiceCars} from "./axios-service";
import {urls} from "../configs/urls";


const carService = {
    getAll: () => axiosServiceCars.get(urls.cars),
    create: (car) => axiosServiceCars.post(urls.cars, car),
    getById: (id) => axiosServiceCars.get(`${urls.cars}/${id}`),
    updateById: (id, car) => axiosServiceCars.put(`${urls.cars}/${id}`, car),
    updatePartById: (id, car) => axiosServiceCars.patch(`${urls.cars}/${id}`, car),
    deleteById: (id) => axiosServiceCars.delete(`${urls.cars}/${id}`)
}

export {
    carService
}