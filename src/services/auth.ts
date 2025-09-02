import instanciaAPI from "./instanciaApi";
import Cookies from "js-cookie";
import type {
  AlunoLoginInterface,
  AlunoRegistroInterface,
} from "@/utils/interfaces";

export const register = async (userData: AlunoRegistroInterface) => {
  const response = await instanciaAPI.post("aluno/registro", userData, {
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
  const response = await instanciaAPI.post("aluno/login", credentials, {
    withCredentials: true,
  });

  Cookies.set("token", response.data.token, {
    expires: 0.25,
    secure: true,
    sameSite: "Strict",
  });

  return response.data.alunoAuth;
};

export const alunoLogado = (): boolean => {
  const token = Cookies.get("token");
  return !!token;
};

export const logout = () => {
  Cookies.remove("token");
};
