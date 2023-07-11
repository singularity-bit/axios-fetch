import { useState } from "react";
import axiosInstance from "@/services/axiosService";

export const useLoading=()=>{
    const [loading, setLoading] = useState(false);
  
    axiosInstance.interceptors.request.use(function (config) {
      setLoading(true);
      return config;
    }, function (error) {
      setLoading(false);
      return Promise.reject(error);
    });
  
    axiosInstance.interceptors.response.use(function (response) {
      setLoading(false);
      return response;
    }, function (error) {
      setLoading(false);
      return Promise.reject(error);
    });
  
    return [loading ? <h1>loading....</h1>: null];
}