import axios from "axios";

const instanciaAPI = axios.create({
  baseURL: "http://localhost:3001/api/",
});

export default instanciaAPI;
