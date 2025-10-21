import axios from 'axios';
import Cookies from 'js-cookie';

const baseURL =
  window.location.hostname === 'localhost'
    ? import.meta.env.VITE_API_BASE_URL_DEV
    : import.meta.env.VITE_API_BASE_URL_PROD;

const instanciaAPI = axios.create({
  baseURL,
  withCredentials: true,
});

instanciaAPI.interceptors.request.use((config) => {
  const token = Cookies.get('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default instanciaAPI;
