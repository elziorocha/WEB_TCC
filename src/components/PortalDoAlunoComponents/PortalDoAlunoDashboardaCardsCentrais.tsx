import type { alunoProps } from '@/utils/interfaces.interface';
import { IdCardIcon } from 'lucide-react';

export const PortalDoAlunoDashboardaCardsCentrais = ({ aluno }: alunoProps) => {
  const tipoCartao = (tipoCartao: any) => {
    switch (tipoCartao) {
      case 'EDUCARD':
        return {
          css: 'text-secondary border-secondary/30 bg-secondary/10',
          cartao: 'EDUCARD',
        };
      case 'VEM':
        return {
          css: 'text-primary border-primary/30 bg-primary/10',
          cartao: 'VEM ESCOLAR',
        };
      default:
        return {
          css: 'text-red-600 border-red-300 bg-red-50',
          cartao: 'Sem cartão definido',
        };
    }
  };

  const { css, cartao } = tipoCartao(aluno?.tipo_cartao);
  return (
    <main className="flex flex-col items-center justify-between gap-12">
      <div
        className={`flex items-center gap-3 self-center rounded-2xl border px-6 py-5 shadow-sm backdrop-blur-md transition hover:shadow-md sm:min-w-sm sm:self-start ${css}`}
      >
        <div className="flex items-center justify-center rounded-xl bg-white/60 p-2 shadow-inner">
          <IdCardIcon className="size-8" />
        </div>
        <div className="flex items-center gap-2 text-lg font-bold tracking-wide">
          <h3>Seu cartão:</h3>
          <p>{cartao}</p>
        </div>
      </div>

      <div
        className={`flex items-center gap-3 self-center rounded-2xl border px-6 py-5 shadow-sm backdrop-blur-md transition hover:shadow-md sm:min-w-sm sm:self-start ${css}`}
      >
        <div className="flex items-center justify-center rounded-xl bg-white/60 p-2 shadow-inner">
          <IdCardIcon className="size-8" />
        </div>
        <div className="flex items-center gap-2 text-lg font-bold tracking-wide">
          <h3>Seu cartão:</h3>
          <p>{cartao}</p>
        </div>
      </div>
    </main>
  );
};
