import { User } from "../models/user_model";

const ApiUrl = 'http://localhost:5000/user/api/';

export const register = async (user:User) => {

    try{

        
        const response = await fetch(`${ApiUrl}/register/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });

        return response.json()
    } catch (error){
        console.error('Error', error)
        throw error
    }

}

export const login = async (user:User) => {

    try{

        
        const response = await fetch(`${ApiUrl}/login/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });

        return response.json()
    } catch (error){
        console.error('Error', error)
        throw error
    }

}

export const unauthenticateUser = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user')
}