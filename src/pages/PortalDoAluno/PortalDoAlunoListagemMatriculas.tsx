import { colunasAlunoMatriculaDataTable } from '@/utils/objetosExportaveisReact';
import PortalDoAlunoMatriculasCard from '../../components/PortalDoAlunoComponents/PortalDoAlunoMatricula/PortalDoAlunoMatriculasCard';
import { alunoMatriculasData } from '@/services/apiMatricula';
import { DataTable } from '../../components/PortalDoAlunoComponents/PortalDoAlunoMatricula/PortalDoAlunoMatriculasDataTable';

export function PortalDoAlunoListagemMatriculas() {
  const { alunoMatriculas, loading, error } = alunoMatriculasData();

  if (loading) return <div>Carregando...</div>;
  if (error) return <div>Erro: {error}</div>;

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
