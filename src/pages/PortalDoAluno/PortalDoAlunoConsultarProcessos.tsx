import { ArrowLeftIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
// import { DataTable } from '../../components/PortalDoAlunoComponents/PortalDoAlunoMatricula/PortalDoAlunoMatriculasDataTable';
// import { alunoProcessosData } from '@/services/apiProcessos';

export const PortalDoAlunoConsultarProcessos = () => {
  // const { alunoProcessos, loading } = alunoProcessosData();

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

      {/* {/* <DataTable
        columns={colunasAlunoMatriculaDataTable}
        data={alunoProcessos}
        renderizarMobile={(alunoMatricula) => (
          <PortalDoAlunoProcessosCard alunoMatricula={alunoMatricula} />
        )}
      /> */}
    </main>
  );
};
