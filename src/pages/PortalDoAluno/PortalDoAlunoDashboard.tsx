import { useEffect, useState } from 'react';
import { getAluno, getAlunoDocumentos } from '@/services/api';
import type {
  AlunoDocumentoInterface,
  AlunoInterface,
} from '@/utils/interfaces.interface';
import { PortalDoAlunoDashboardCards } from '@/components/PortalDoAlunoComponents/PortalDoAlunoDashboardCards';

export function PortalDoAlunoDashboard() {
  const [aluno, setAluno] = useState<AlunoInterface | null>(null);
  const [alunoDocumento, setAlunoDocumento] =
    useState<AlunoDocumentoInterface | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAluno = async () => {
      try {
        const dadosAluno = await getAluno();
        setAluno(dadosAluno);
      } catch (err: unknown) {
        console.error(err);
        setError('Erro ao carregar dados do aluno');
      } finally {
        setLoading(false);
      }
    };

    fetchAluno();
  }, []);

  useEffect(() => {
    const fetchAlunoDocumentos = async () => {
      try {
        const dadosAlunoDocumentos = await getAlunoDocumentos();
        setAlunoDocumento(dadosAlunoDocumentos);
      } catch (err: unknown) {
        console.error(err);
        setError('Erro ao carregar documentos do aluno');
      } finally {
        setLoading(false);
      }
    };

    fetchAlunoDocumentos();
  }, []);

  if (loading) return <main>Carregando...</main>;
  if (error) return <main>{error}</main>;

  return (
    <main className="flex flex-col gap-5 p-6">
      <div className="flex flex-col gap-1">
        <h2 className="text-2xl font-bold">
          Olá,{' '}
          <span className="text-secondary capitalize">
            {aluno?.nome.split(' ')[0]}
          </span>
          !
        </h2>
        <h3 className="font-medium">O que deseja fazer hoje?</h3>
      </div>

      <PortalDoAlunoDashboardCards aluno={aluno} />

      <h3 className="mt-2 flex items-center gap-1.5 font-medium">
        Status atual:{' '}
        {alunoDocumento?.liberado ? (
          <span className="rounded bg-green-500 px-1.5 py-0.5 font-normal shadow-sm">
            Vigente
          </span>
        ) : (
          <span className="rounded bg-red-500 px-1.5 py-0.5 font-normal shadow-sm">
            Bloqueado
          </span>
        )}
      </h3>
    </main>
  );
}

export default PortalDoAlunoDashboard;
