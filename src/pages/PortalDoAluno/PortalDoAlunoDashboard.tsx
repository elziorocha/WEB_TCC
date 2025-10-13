import TelaCarregando from '@/components/componentesUI/TelaCarregando';
import { PortalDoAlunoDashboardMatriculaCard } from '@/components/PortalDoAlunoComponents/PortalDoAlunoCards/PortalDoAlunoDashboardMatriculaCard';
import { PortalDoAlunoDashboardCards } from '@/components/PortalDoAlunoComponents/PortalDoAlunoDashboardCards';
import { alunoData } from '@/services/ChamadasApi/apiAluno';
import { IdCardIcon } from 'lucide-react';

export function PortalDoAlunoDashboard() {
  const { aluno, loading: loadingAluno } = alunoData();

  if (loadingAluno) return <TelaCarregando />;

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
    <main className="flex flex-col gap-5 p-6">
      <div className="flex flex-col gap-1 sm:text-center">
        <h2 className="text-2xl font-bold sm:text-4xl">
          Olá,{' '}
          <span className="text-secondary capitalize">
            {aluno?.nome?.split(' ')[0]}
          </span>
          !
        </h2>
        <h3 className="font-medium sm:text-xl">O que deseja fazer hoje?</h3>
      </div>

      <PortalDoAlunoDashboardCards aluno={aluno ?? null} />

      <section className="mt-10 flex w-full flex-col items-center gap-6 sm:flex-row">
        <div
          className={`flex items-center gap-3 rounded-2xl border px-6 py-5 shadow-sm backdrop-blur-md transition hover:shadow-md ${css}`}
        >
          <div className="flex items-center justify-center rounded-xl bg-white/60 p-2 shadow-inner">
            <IdCardIcon className="size-8" />
          </div>
          <div>
            <h3 className="text-base font-semibold">Seu cartão:</h3>
            <p className="text-lg font-bold tracking-wide">{cartao}</p>
          </div>
        </div>

        <PortalDoAlunoDashboardMatriculaCard />
      </section>
    </main>
  );
}
