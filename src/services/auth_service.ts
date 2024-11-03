import { User } from "../models/user_model";
import api from "../api/api";
import { redirect } from "react-router-dom";

export const register = async (user:User) => {
    const response = await api.post('user/register', user);
    return response.data;
}

export const login = async (user:User) => {

   const response = await api.post('user/login', user);
   return response.data

}

export const AuthLoader = () => {
    const token = localStorage.getItem('token');

    if (!token){
        return redirect('/')
    }

    return true;
}
