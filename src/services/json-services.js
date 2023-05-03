import {axiosServiceJson} from "./axios-service";
import {urls} from "../configs/urls";


const jsonServices = {
    getAllUsers:()=>axiosServiceJson.get(urls.users),
    createNewUser: (user)=>axiosServiceJson.post(urls.users, user),
    getComments:()=>axiosServiceJson.get(urls.comments),
    createNewComment:(comment)=>axiosServiceJson.post(urls.comments, comment)
}

export {
    jsonServices
}