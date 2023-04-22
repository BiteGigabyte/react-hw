

import {axiosServiceJson} from "./axios-service";
import {urls} from "../configs/urls";


const jsonServises = {
    getAllUsers:()=>axiosServiceJson.get(urls.users),
    createNewUser: (user)=>axiosServiceJson.post(urls.users, user),
    createNewComment:(comment)=>axiosServiceJson.post(urls.comments, comment)
}

export {
    jsonServises
}