import { colunasAlunoMatriculaDataTable } from '@/utils/objetosExportaveisReact';
import PortalDoAlunoMatriculasCard from './PortalDoAlunoMatriculasCard';
import { alunoMatriculasData } from '@/services/apiMatricula';
import { DataTable } from './PortalDoAlunoMatriculasDataTable';

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
