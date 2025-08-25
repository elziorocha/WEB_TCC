import axios from "axios";
import instanciaAPI from "./api";
import Cookies from "js-cookie";
import type {
  AlunoLoginInterface,
  AlunoRegistroInterface,
} from "@/utils/interfaces";

export const register = async (userData: AlunoRegistroInterface) => {
  const response = await axios.post(`${instanciaAPI}/registro`, userData, {
    withCredentials: true,
  });

  Cookies.set("token", response.data.token, {
    expires: 0.25,
    secure: true,
    sameSite: "Strict",
  });
  return response.data.aluno;
};

export const login = async (credentials: AlunoLoginInterface) => {
  const response = await axios.post(`${instanciaAPI}/login`, credentials, {
    withCredentials: true,
  });

  Cookies.set("token", response.data.token, {
    expires: 0.25,
    secure: true,
    sameSite: "Strict",
  });
  return response.data.alunoAuth;
};

export const logout = () => {
  Cookies.remove("token");
};
