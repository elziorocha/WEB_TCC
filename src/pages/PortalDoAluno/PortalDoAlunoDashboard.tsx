import TelaCarregando from '@/components/componentesUI/TelaCarregando';
import { PortalDoAlunoDashboardDocumentosCard } from '@/components/PortalDoAlunoComponents/PortalDoAlunoCards/PortalDoAlunoDashboardDocumentosCard';
import { PortalDoAlunoDashboardMatriculaCard } from '@/components/PortalDoAlunoComponents/PortalDoAlunoCards/PortalDoAlunoDashboardMatriculaCard';
import { PortalDoAlunoDashboardaCardsCentrais } from '@/components/PortalDoAlunoComponents/PortalDoAlunoDashboardaCardsCentrais';
import { PortalDoAlunoDashboardCards } from '@/components/PortalDoAlunoComponents/PortalDoAlunoDashboardCards';
import { alunoData } from '@/services/ChamadasApi/apiAluno';

export function PortalDoAlunoDashboard() {
  const { aluno, loading: loadingAluno } = alunoData();

  if (loadingAluno) return <TelaCarregando />;

  return (
    <main className="flex flex-col gap-5 p-6">
      <div className="bg-primary absolute -top-10 -left-24 rounded-[41%_59%_75%_25%_/_58%_40%_60%_42%] sm:size-58 lg:size-72"></div>
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

      <PortalDoAlunoDashboardCards aluno={aluno} />

      <hr className="via-primary my-6 h-1 w-10/12 self-center border-0 bg-gradient-to-r from-transparent to-transparent" />

      <section className="flex w-full flex-col items-center justify-center gap-8 2xl:flex-row">
        <PortalDoAlunoDashboardMatriculaCard />

        <PortalDoAlunoDashboardaCardsCentrais aluno={aluno} />

        <PortalDoAlunoDashboardDocumentosCard aluno={aluno} />
      </section>
    </main>
  );
}
