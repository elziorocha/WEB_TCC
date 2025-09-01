import axios from "axios";
import Cookies from "js-cookie";

const instanciaAPI = axios.create({
  baseURL: "http://localhost:3000/api/",
  withCredentials: true,
});

instanciaAPI.interceptors.request.use((config) => {
  const token = Cookies.get("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default instanciaAPI;
