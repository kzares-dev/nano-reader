import axios from 'axios';
import Cookies from 'js-cookie';

const axiosInstance = axios.create({
    // TODO: This should be loading the server url from .env & be dinamic
    baseURL: 'http://localhost:3001',
});

axiosInstance.interceptors.request.use(
    (config) => {
        const token = Cookies.get("jwt")
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

export default axiosInstance;