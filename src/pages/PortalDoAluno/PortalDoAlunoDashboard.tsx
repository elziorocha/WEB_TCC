import { useEffect, useState } from "react";
import { getAluno } from "@/services/aluno";
import type { AlunoInterface } from "@/utils/interfaces.interface";
import { useNavigate } from "react-router-dom";
import { alunoEstaLogado } from "@/services/auth";

export function PortalDoAlunoDashboard() {
  const [aluno, setAluno] = useState<AlunoInterface | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!alunoEstaLogado()) {
      navigate("/portal-do-aluno/login");
      return;
    }

    const fetchAluno = async () => {
      try {
        const dados = await getAluno();
        setAluno(dados);
      } catch (err: unknown) {
        console.error(err);
        setError("Erro ao carregar dados do aluno");
      } finally {
        setLoading(false);
      }
    };

    fetchAluno();
  }, []);

  if (loading) return <main>Carregando...</main>;
  if (error) return <main>{error}</main>;

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Bem-vindo, {aluno?.nome}!</h1>
      <p>Telefone: {aluno?.telefone}</p>
    </main>
  );
}

export default PortalDoAlunoDashboard;
