import TelaCarregando from '@/components/componentesUI/TelaCarregando';
import { PortalDoAlunoDashboardCards } from '@/components/PortalDoAlunoComponents/PortalDoAlunoDashboardCards';
import { alunoData } from '@/services/ChamadasApi/apiAluno';

export function PortalDoAlunoDashboard() {
  const { aluno, loading: loadingAluno } = alunoData();

  if (loadingAluno) return <TelaCarregando />;

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
    </main>
  );
}
