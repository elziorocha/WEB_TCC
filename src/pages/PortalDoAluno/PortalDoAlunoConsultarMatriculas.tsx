import { ArrowLeftIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import PortalDoAlunoMatriculasCard from '../../components/PortalDoAlunoComponents/PortalDoAlunoMatricula/PortalDoAlunoMatriculasCard';
import { DataTable } from '../../components/PortalDoAlunoComponents/PortalDoAlunoMatricula/PortalDoAlunoMatriculasDataTable';
import TelaCarregando from '@/components/componentesUI/TelaCarregando';
import { colunasAlunoMatriculaDataTable } from '@/utils/objetosExportaveis/objetosExportaveisDataTable';
import { alunoMatriculasData } from '@/services/ChamadasApi/apiMatricula';

export function PortalDoAlunoConsultarMatriculas() {
  const { alunoMatriculas, loading } = alunoMatriculasData();

  if (loading) return <TelaCarregando />;

  return (
    <main className="flex flex-col gap-4 p-3">
      <Link
        to="/portal-do-aluno/dashboard"
        className="bg-primary text-blackText self-start rounded-lg px-3 py-1.5 text-sm shadow-md"
      >
        <div className="text-yellowText flex items-center gap-1 font-semibold">
          <ArrowLeftIcon className="size-5" />
          <span>Voltar</span>
        </div>
      </Link>

      <DataTable
        columns={colunasAlunoMatriculaDataTable}
        data={alunoMatriculas}
        renderizarMobile={(alunoMatricula) => (
          <PortalDoAlunoMatriculasCard alunoMatricula={alunoMatricula} />
        )}
      />
    </main>
  );
}
