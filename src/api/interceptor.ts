import axios, {
   AxiosInstance,
   AxiosRequestHeaders,
   InternalAxiosRequestConfig,
} from "axios";
import { AuthResponse } from "../types/auth";

const $api: AxiosInstance = axios.create({
   withCredentials: true,
   baseURL: process.env.REACT_APP_DB_URL,
});

$api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
   const token = localStorage.getItem("persist:auth");
   config.headers = (config.headers as AxiosRequestHeaders) || {};
   if (token) {
      const parsedToken = JSON.parse(token).token.replace(/"/g, "");
      config.headers.Authorization = `Bearer ${parsedToken}`;
   }
   return config;
});

$api.interceptors.response.use(
   (config) => {
      return config;
   },
   async (error) => {
      const originalRequest = error.config;
      if (
         error.response.status === 401 &&
         error.config &&
         !error.config._isRetry
      ) {
         originalRequest._isRetry = true;
         try {
            const { data } = await axios.get<AuthResponse>(
               `${process.env.REACT_APP_DB_URL}user/refresh`,
               {
                  withCredentials: true,
               }
            );
            console.log("data", data);

            data.accessToken && localStorage.setItem("token", data.accessToken);

            return $api.request(originalRequest);
         } catch (error) {
            return Promise.reject(new Error("Not authorized"));
         }
      }

      throw error;
   }
);

export default $api;
