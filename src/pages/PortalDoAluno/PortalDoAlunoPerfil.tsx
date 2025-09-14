import TelaCarregando from '@/components/componentesUI/TelaCarregando';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { alunoData } from '@/services/apiAluno';
import { ArrowLeftIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

export function PortalDoAlunoPerfil() {
  const { aluno, loading: loadingAluno } = alunoData();

  if (loadingAluno) return <TelaCarregando />;

  return (
    <main className="flex w-full flex-col gap-4 self-center p-3">
      <Link
        to="/portal-do-aluno/dashboard"
        className="bg-primary text-blackText hover:bg-primary/70 self-start rounded-lg px-3 py-1.5 text-sm shadow-md transition-all sm:px-4 sm:py-2 sm:text-base"
      >
        <div className="text-yellowText flex items-center gap-1 font-semibold">
          <ArrowLeftIcon className="size-5" />
          <span>Voltar</span>
        </div>
      </Link>

      <Card className="border-none">
        <CardHeader>
          <h2 className="text-tertiary font-medium">
            Perfil de:{' '}
            <span className="text-primary capitalize">{aluno?.nome}</span>
          </h2>
        </CardHeader>
        <CardContent>
          <section>
            <span>E-mail: {aluno?.email}</span>
            <span>Telefone: {aluno?.telefone}</span>
          </section>
        </CardContent>
      </Card>
    </main>
  );
}
