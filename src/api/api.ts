import axios, { AxiosResponse, InternalAxiosRequestConfig } from "axios";

const api = axios.create({
    baseURL: `${import.meta.env.VITE_BACK_END_API}`,
    headers: {
        'Content-Type': 'application/json'
    }
})

api.interceptors.request.use(
    (request: InternalAxiosRequestConfig) => {

        const token = localStorage.getItem('token') != null ? localStorage.getItem('token') : "";
        request.headers['Authorization'] = `${token}`;

        return request;
    },
    (error) => {
        return error;
    }
)

api.interceptors.response.use(
    (response: AxiosResponse) => {return response},
    (error) => {
        if (error.response) {
            const {logout} = error.response.data;
            if (logout) {
                localStorage.removeItem('token');
                localStorage.removeItem('user');
            }
   
        }
        return error.response;
    }
)

export default api