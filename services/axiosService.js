import axios from "axios";
import config from "./apiConfig";


//Create a basic axios instance to reuse throughout the app.
const axiosInstance = axios.create(config);
export default axiosInstance
