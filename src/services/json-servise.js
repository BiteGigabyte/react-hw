

import {axiosServiceJson} from "./axios-service";
import {urls} from "../configs/urls";


const jsonServise = {
    getAllUsers:()=>axiosServiceJson.get(urls.users),
    createNewUser: (user)=>axiosServiceJson.post(urls.users, user),
    createNewComment:(comment)=>axiosServiceJson.post(urls.comments, comment)
}

export {
    jsonServise
}