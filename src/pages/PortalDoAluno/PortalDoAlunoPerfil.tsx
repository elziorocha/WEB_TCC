import TelaCarregando from '@/components/componentesUI/TelaCarregando';
import { Card } from '@/components/ui/card';
import { alunoData } from '@/services/apiAluno';

export function PortalDoAlunoPerfil() {
  const { aluno, loading: loadingAluno } = alunoData();

  if (loadingAluno) return <TelaCarregando />;

  return (
    <main className="p-3">
      <Card className="border-none">
        <div className="text-black">{aluno?.nome}</div>
      </Card>
    </main>
  );
}
