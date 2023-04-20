

import {axiosServiceJson} from "./axios-service";
import {urls} from "../configs/urls";


const jsonServise = {
    getAllUsers:()=>axiosServiceJson.get(urls.users),
    createNewUser: ()=>axiosServiceJson.post(urls.users),
    createNewComment:(comment)=>axiosServiceJson.post(urls.comments, comment)
}

export {
    jsonServise
}