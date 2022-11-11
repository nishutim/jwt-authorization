import axios, { AxiosError } from "axios";
import AuthService from "../services/AuthService";

const API_URL = 'http://localhost:5000/api';

export const $axios = axios.create({
   baseURL: API_URL,
   withCredentials: true
});

export const $axiosAuth = axios.create({
   baseURL: API_URL,
   withCredentials: true
});

$axiosAuth.interceptors.request.use(config => {
   const token = localStorage.getItem('token');
   config.headers = config.headers ?? {};
   config.headers.authorization = `Bearer ${token}`;
   return config;
});

$axiosAuth.interceptors.response.use(config => config, async error => {
   const config = error.config;
   if (error.response?.status === 401 && !config.retried) {
      config.retried = true;
      try {
         const { accessToken } = await AuthService.refresh();
         localStorage.setItem('token', accessToken);

         config.headers = {
            ...config.headers,
            authorization: `Bearer ${accessToken}`
         };

         return $axiosAuth.request(config);
      } catch (e: any) {
         alert(e.message);
      }
   }
   return Promise.reject(error);
});