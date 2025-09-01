import { useEffect, useState } from "react";
import { getAluno, getAlunoDocumentos } from "@/services/api";
import type {
  AlunoDocumentoInterface,
  AlunoInterface,
} from "@/utils/interfaces.interface";
import { useNavigate } from "react-router-dom";
import { alunoEstaLogado } from "@/services/auth";
import { cardsDashboardPortalAluno } from "@/utils/objetosExportaveis";

export function PortalDoAlunoDashboard() {
  const [aluno, setAluno] = useState<AlunoInterface | null>(null);
  const [alunoDocumento, setAlunoDocumento] =
    useState<AlunoDocumentoInterface | null>(null);
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
        const dadosAluno = await getAluno();
        setAluno(dadosAluno);
      } catch (err: unknown) {
        console.error(err);
        setError("Erro ao carregar dados do aluno");
      } finally {
        setLoading(false);
      }
    };

    fetchAluno();
  }, []);

  useEffect(() => {
    if (!alunoEstaLogado()) {
      navigate("/portal-do-aluno/login");
      return;
    }

    const fetchAlunoDocumentos = async () => {
      try {
        const dadosAlunoDocumentos = await getAlunoDocumentos();
        setAlunoDocumento(dadosAlunoDocumentos);
      } catch (err: unknown) {
        console.error(err);
        setError("Erro ao carregar documentos do aluno");
      } finally {
        setLoading(false);
      }
    };

    fetchAlunoDocumentos();
  }, []);

  if (loading) return <main>Carregando...</main>;
  if (error) return <main>{error}</main>;

  return (
    <main className="p-6 flex flex-col gap-5">
      <div className="flex flex-col gap-1">
        <h2 className="text-2xl font-bold">
          Olá,{" "}
          <span className="text-secondary capitalize">
            {aluno?.nome.split(" ")[0]}
          </span>
          !
        </h2>
        <h3 className="font-medium">O que deseja fazer hoje?</h3>
      </div>

      <article className="flex flex-wrap justify-center gap-4">
        {cardsDashboardPortalAluno.map((item) => (
          <section
            key={item.key}
            className="bg-white hover:bg-tertiary/5 transition-colors rounded-2xl shadow-md px-2 py-4 flex flex-col gap-4 w-36 min-h-36"
          >
            <div className="rounded-full bg-secondary/10 p-3 flex items-center justify-center self-center shadow-md">
              <item.icon className="text-secondary size-7" />
            </div>

            <h4 className="text-base text-tertiary font-medium text-center">
              {item.key === "1"
                ? `Perfil de ${aluno?.nome ?? "Aluno"}`
                : item.label}
            </h4>
          </section>
        ))}
      </article>

      <h3 className="font-medium flex gap-1.5 items-center">
        Status atual:{" "}
        {alunoDocumento?.liberado ? (
          <span className="bg-green-500 rounded shadow-sm px-1.5 py-0.5">
            Vigente
          </span>
        ) : (
          <span className="bg-red-600 rounded shadow-sm px-1.5 py-0.5">
            Bloqueado
          </span>
        )}
      </h3>
    </main>
  );
}

export default PortalDoAlunoDashboard;
