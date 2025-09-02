import { alunoLogado } from "@/services/auth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function alunoEstaLogado() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!alunoLogado()) {
      navigate("/portal-do-aluno/login");
    }
  }, []);
}
