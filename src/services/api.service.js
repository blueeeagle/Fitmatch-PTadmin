import axios from "axios";
import { LOCAL_STORE_KEYS } from '@/models/app.model';
import {  getLocalStorage } from '@/services/localStore.service';

function formatResponse(response) {
    return {
        data: response.data.data,
        message: response.data.message ? response.data.message : null,
        success: true
    }
}

function formatError(error) {
    return {
        message: error.response.data.message ? error.response.data.message : error.message,
        success: false
    }
}

const api = axios.create({
    baseURL: process.env.VUE_APP_API_PREFIX_URI,
    headers: {
        // "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        // "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH",
        // "Accept": "application/json",
        "apiKey": process.env.VUE_APP_API_KEY,
        "Authorization": ''
    }

})

api.interceptors.request.use(
    config => {
        const token = getLocalStorage(LOCAL_STORE_KEYS.AUTH_TOKEN);
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    }, error => {
        return Promise.reject(error);
    }
);

api.interceptors.response.use(
    response => {
        return formatResponse(response);
    }, error => {
        return formatError(error);
    }
)


export default api;

