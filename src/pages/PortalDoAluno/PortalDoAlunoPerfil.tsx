import TelaCarregando from '@/components/componentesUI/TelaCarregando';
import { alunoData } from '@/services/apiAluno';

export function PortalDoAlunoPerfil() {
  const { aluno, loading: loadingAluno } = alunoData();

  if (loadingAluno) return <TelaCarregando />;

  return (
    <main>
      <div className="text-black">{aluno?.nome}</div>
    </main>
  );
}
