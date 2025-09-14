import { colunasAlunoMatriculaDataTable } from '@/utils/objetosExportaveisReact';
import PortalDoAlunoMatriculasCard from '../../components/PortalDoAlunoComponents/PortalDoAlunoMatricula/PortalDoAlunoMatriculasCard';
import { alunoMatriculasData } from '@/services/apiMatricula';
import { DataTable } from '../../components/PortalDoAlunoComponents/PortalDoAlunoMatricula/PortalDoAlunoMatriculasDataTable';
import TelaCarregando from '@/components/componentesUI/TelaCarregando';

export function PortalDoAlunoListagemMatriculas() {
  const { alunoMatriculas, loading } = alunoMatriculasData();

  if (loading) return <TelaCarregando />;

  return (
    <main>
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
