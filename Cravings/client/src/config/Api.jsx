import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://locslhost:4500"
});

export default axiosInstance; 
