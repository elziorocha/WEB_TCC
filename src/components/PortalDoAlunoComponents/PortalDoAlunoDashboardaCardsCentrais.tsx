import type { alunoProps } from '@/utils/interfaces.interface';
import { getStatusProcessoBadgeDashboard } from '@/utils/objetosExportaveis/objetosExportaveisDataTable';
import { IdCardIcon } from 'lucide-react';
import { useProcessos } from '@/services/hooks/useProcessos';
import TelaCarregando from '@/components/componentesUI/TelaCarregando';
import { tipoCartao } from '@/utils/objetosExportaveis/objetosExportaveis';

export const PortalDoAlunoDashboardaCardsCentrais = ({ aluno }: alunoProps) => {
  const { processos, loading } = useProcessos();

  if (loading) return <TelaCarregando />;

  const alunoProcesso = processos?.find(
    (processo) =>
      processo.aluno_id === aluno?.id || processo.aluno_id === aluno?.id
  );

  const { css, cartao } = tipoCartao(aluno?.tipo_cartao);

  return (
    <main className="flex flex-col items-center justify-between gap-12">
      <div
        className={`flex min-w-xs items-center gap-3 self-center rounded-2xl border px-6 py-5 shadow-sm transition hover:shadow-md sm:min-w-md sm:self-start ${css}`}
      >
        <div className="flex items-center justify-center rounded-xl bg-white/60 p-2 shadow-inner">
          <IdCardIcon className="size-8" />
        </div>
        <div className="flex w-full flex-col items-center gap-2 text-lg font-bold tracking-wide sm:flex-row">
          <h3>Seu cartão:</h3>
          <p>{cartao}</p>
        </div>
      </div>

      <div className="bg-quarter/15 border-quarter/45 flex min-w-xs items-center gap-3 self-center rounded-2xl border px-6 py-5 shadow-sm transition hover:shadow-md sm:min-w-md sm:self-start">
        <div className="flex items-center justify-center rounded-xl bg-white/60 p-2 shadow-inner">
          <IdCardIcon className="text-secondary size-8" />
        </div>
        <div className="flex w-full flex-col items-center justify-between gap-2 text-lg font-bold tracking-wide sm:flex-row">
          <h3 className="text-quarter">Status do processo:</h3>
          <p className={!alunoProcesso ? 'text-tertiary' : ''}>
            {alunoProcesso
              ? getStatusProcessoBadgeDashboard(alunoProcesso)
              : 'Sem processo'}
          </p>
        </div>
      </div>
    </main>
  );
};
