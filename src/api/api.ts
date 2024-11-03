import axios, { AxiosResponse, InternalAxiosRequestConfig } from "axios";

const api = axios.create({
    baseURL: `${process.env.BACK_END_API}`,
    headers: {
        'Content-Type': 'application/json'
    }
})

api.interceptors.request.use(
    (request: InternalAxiosRequestConfig) => {
        
        const token = localStorage.getItem('token') != null ? localStorage.getItem('token') : "";
        
        request.headers['Authorization'] = `Bearer ${token}`;

        return request;
    },
    (error) => {
        return Promise.reject(error);
    }
)

api.interceptors.response.use(
    (response: AxiosResponse) => response,
    (error) => {
        if (error.response) {
            const {logout} = error.response.data;

            if (logout) {
                localStorage.removeItem('token');
                localStorage.removeItem('user');
                window.location.href = '/';
            }
        }
    }
)

export default api