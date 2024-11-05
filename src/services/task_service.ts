import { Task } from "../models/task_model";
import api from "../api/api";


export const listTasks = async () => {
    const response = await api.get('task/list')
    return response.data
}

export const getTaskById = async(id:number) => {
    const response = await api.get(`task/${id}`);
    return response.data
}

export const createTask = async(task:Task) => {
    const response = await api.post('task/', task);
    return response.data
}

export const updateTask = async(task:Task) => {
    const response = await api.put('task/', task);
    return response.data
}

export const deleteTask = async(id:number) => {
    const response = await api.delete(`task/${id}`);
    return response.data
}