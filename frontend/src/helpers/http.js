import axios from 'axios';
import store from '../store';
import ActionTypes from '../store/action-types';

const http = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
});
http.interceptors.request.use(function (config) {
    let token = localStorage.getItem("token");
    config.headers.Authorization = `Bearer ${token}`;
    return config;
});
http.interceptors.response.use(
    response => response,
    (error) => {
        if (error.response.status === 401) {
            store.dispatch({ type: ActionTypes.LOGOUT_USER })
        }
        return Promise.reject(error);
    }
);
export { http };
