import axios from "axios";

const API_URL = 'http://localhost:5000/api';

export const $axios = axios.create({
   baseURL: API_URL,
   withCredentials: true
});

export const $axiosAuth = axios.create({
   baseURL: API_URL,
   withCredentials: true
});