import { ArrowLeftIcon } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { DataTable } from '../../components/PortalDoAlunoComponents/PortalDoAlunoDataTable';
import TelaCarregando from '@/components/componentesUI/TelaCarregando';
import { colunasAlunoProcessoDataTable } from '@/utils/objetosExportaveis/objetosExportaveisDataTable';
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { PortalDoAlunoProcessosCard } from '@/components/PortalDoAlunoComponents/PortalDoAlunoCards/PortalDoAlunoProcessosCard';
import { uploadAlunoProcessos } from '@/services/api';
import { useProcessos } from '@/services/hooks/useProcessos';
import { apiError } from '@/services/apiError';

export const PortalDoAlunoConsultarProcessos = () => {
  const { processos, loading, carregarProcessos, atualizarProcesso } =
    useProcessos();
  const location = useLocation();

  const handleUpload = async (campo: string, arquivo: File) => {
    try {
      const formData = new FormData();
      formData.append(campo, arquivo);

      await uploadAlunoProcessos(formData);
      await carregarProcessos();

      toast.success(`${campo.replaceAll('_', ' ')} enviado com sucesso!`);
    } catch (err) {
      apiError(err, 'Erro ao enviar o arquivo.');
    }
  };

  const handleUpdate = async (campo: string, novaUrl: string | null) => {
    if (novaUrl === 'pending') {
      await carregarProcessos();
    } else {
      atualizarProcesso(campo, false, null);
    }
  };

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
        columns={colunasAlunoProcessoDataTable(handleUpload, handleUpdate)}
        data={processos}
        renderizarMobile={(alunoProcesso) => (
          <PortalDoAlunoProcessosCard
            alunoProcesso={alunoProcesso}
            onUpdate={handleUpdate}
          />
        )}
      />
    </main>
  );
};
