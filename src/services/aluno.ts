import instanciaAPI from "./api";
import Cookies from "js-cookie";

export const getAluno = async () => {
  const token = Cookies.get("token");
  if (!token) throw new Error("Usuário não autenticado");

  const response = await instanciaAPI.get("/aluno", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    withCredentials: true,
  });

  return response.data;
};
