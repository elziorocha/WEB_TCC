import TelaCarregando from '@/components/componentesUI/TelaCarregando';
import { PortalDoAlunoDashboardCards } from '@/components/PortalDoAlunoComponents/PortalDoAlunoDashboardCards';
import { alunoData } from '@/services/ChamadasApi/apiAluno';

export function PortalDoAlunoDashboard() {
  const { aluno, loading: loadingAluno } = alunoData();

  if (loadingAluno) return <TelaCarregando />;

  return (
    <main className="flex flex-col gap-5 p-6">
      <div className="flex flex-col gap-1">
        <h2 className="text-2xl font-bold">
          Olá,{' '}
          <span className="text-secondary capitalize">
            {aluno?.nome?.split(' ')[0]}
          </span>
          !
        </h2>
        <h3 className="font-medium">O que deseja fazer hoje?</h3>
      </div>

      <PortalDoAlunoDashboardCards aluno={aluno ?? null} />

      {/* <h3 className="mt-2 flex items-center gap-1.5 font-medium">
        Status atual:{' '}
        {liberado ? (
          <span className="rounded bg-green-500 px-1.5 py-0.5 font-normal shadow-sm">
            Vigente
          </span>
        ) : (
          <span className="rounded bg-red-500 px-1.5 py-0.5 font-normal shadow-sm">
            Bloqueado
          </span>
        )}
      </h3> */}
    </main>
  );
}

export default PortalDoAlunoDashboard;
