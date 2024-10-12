import { Task } from "../models/task_model";

const ApiUrl = 'http://localhost:5000';

export const listTasks = async () => {

    try{
        const response = await fetch(`${ApiUrl}/task/list`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        return response.json()
    } catch (error){
        console.error('Error', error)
        throw error
    }

}

export const getTaskById = async(id:number) => {
    try{
        const response = await fetch(`${ApiUrl}/task/${id}`, {
            method:'GET',
            headers:{
                'Content-Type': 'application/json',
            },
        });

        return response.json();
    }catch (error){
        console.error('Error', error);
        throw error;
    }
}

export const createTask = async(task:Task) => {
    try{
        const response = await fetch(`${ApiUrl}/task/`, {
            method:'POST',
            body:JSON.stringify(task),
            headers: {
                'Content-Type': 'application/json',
            },
        })

        return response.json()
    }catch(error){
        console.error('Error', error);
    }
}

export const updateTask = async(task:Task) => {
    try{
        const response = await fetch(`${ApiUrl}/task/`, {
            method:'PUT',
            body: JSON.stringify(task),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        return response.json()
    }catch(error){
        console.error('Error', error)
    }
}

export const deleteTask = async(id:number) => {
    try{
        const response = await fetch(`${ApiUrl}/task/${id}`,
            {
                method:'DELETE',
                headers:{
                    'Content-Type': 'application/json'
                }
            }
        )

        return response.json()

    }catch(error){
        console.error('Error', error)
    }
}