import { ArrowLeftIcon } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { DataTable } from '../../components/PortalDoAlunoComponents/PortalDoAlunoDataTable';
import { alunoProcessosData } from '@/services/ChamadasApi/apiProcessos';
import TelaCarregando from '@/components/componentesUI/TelaCarregando';
import PortalDoAlunoProcessosCard from '@/components/PortalDoAlunoComponents/PortalDoAlunoCards/PortalDoAlunoProcessosCard';
import { colunasAlunoProcessoDataTable } from '@/utils/objetosExportaveis/objetosExportaveisDataTable';
import { useEffect } from 'react';
import toast from 'react-hot-toast';

export const PortalDoAlunoConsultarProcessos = () => {
  const { alunoProcessos, loading } = alunoProcessosData();
  const location = useLocation();

  useEffect(() => {
    if (location.state?.toastMessage) {
      toast.error(location.state.toastMessage);
      window.history.replaceState({}, document.title);
    }
  }, [location.state]);

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
        columns={colunasAlunoProcessoDataTable}
        data={alunoProcessos}
        renderizarMobile={(alunoProcesso) => (
          <PortalDoAlunoProcessosCard alunoProcesso={alunoProcesso} />
        )}
      />
    </main>
  );
};
