import TelaCarregando from '@/components/componentesUI/TelaCarregando';
import { PortalDoAlunoDashboardCards } from '@/components/PortalDoAlunoComponents/PortalDoAlunoDashboardCards';
import { Card } from '@/components/ui/card';
import { alunoData } from '@/services/ChamadasApi/apiAluno';
import { IdCardIcon } from 'lucide-react';

export function PortalDoAlunoDashboard() {
  const { aluno, loading: loadingAluno } = alunoData();

  if (loadingAluno) return <TelaCarregando />;

  const tipoCartao = (tipoCartao: any) => {
    switch (tipoCartao) {
      case 'EDUCARD':
        return {
          css: 'text-secondary underline underline-offset-2',
          cartao: 'EDUCARD',
        };
      case 'VEM':
        return {
          css: 'text-primary underline underline-offset-2',
          cartao: 'VEM ESCOLAR',
        };
      default:
        return {
          css: 'text-red-600 underline underline-offset-2',
          cartao: 'Sem cartão definido',
        };
    }
  };
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

      <section className="mt-10 flex w-full items-center gap-6">
        <div className="flex items-center gap-2 rounded-xl bg-white px-6 py-4 text-lg">
          <IdCardIcon className="size-8" />
          <h3 className="font-semibold">Seu cartão: </h3>
          <span className="font-bold">
            {(() => {
              const { css, cartao } = tipoCartao(aluno?.tipo_cartao);
              return <p className={css}>{cartao}</p>;
            })()}
          </span>
        </div>

        <Card>teste</Card>
      </section>
    </main>
  );
}
