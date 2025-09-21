import TelaCarregando from '@/components/componentesUI/TelaCarregando';
import { PortalDoAlunoPerfilCards } from '@/components/PortalDoAlunoComponents/PortalDoAlunoPerfilCards';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { alunoData } from '@/services/ChamadasApi/apiAluno';
import { BadgeCartao } from '@/utils/objetosExportaveis/objetosExportaveisDataTable';
import {
  User,
  Mail,
  Phone,
  Calendar,
  UserCircle,
  ArrowLeftIcon,
} from 'lucide-react';
import { Link } from 'react-router-dom';

export function PortalDoAlunoPerfil() {
  const { aluno, loading: loadingAluno } = alunoData();

  if (loadingAluno) return <TelaCarregando />;

  return (
    <main className="flex flex-col gap-4 p-3">
      <Link
        to="/portal-do-aluno/dashboard"
        className="bg-primary text-blackText self-start rounded-lg px-3 py-1.5 text-sm shadow-md"
      >
        <div className="text-yellowText flex items-center gap-1 font-semibold">
          <ArrowLeftIcon className="size-5" />
          <span>Voltar</span>
        </div>
      </Link>

      <Card className="relative max-w-5xl gap-2 overflow-hidden rounded-2xl border-none pt-4 pb-0 shadow-md sm:w-14/12 sm:self-center">
        <CardHeader className="px-4">
          <CardTitle className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <User className="text-secondary size-6" />
              <span className="text-lg font-semibold">Perfil do Aluno</span>
            </div>
            {aluno?.tipo_cartao && <BadgeCartao tipo={aluno.tipo_cartao} />}
          </CardTitle>
        </CardHeader>

        <hr className="border-dashed border-zinc-300" />

        <CardContent className="px-4 pt-3 pb-5">
          <div className="flex flex-col gap-4 text-sm">
            <section className="from-secondary/10 to-secondary/25 border-secondary/35 rounded-xl border bg-gradient-to-br px-3 py-2 shadow-sm">
              <div className="text-secondary flex items-center gap-2 font-semibold">
                <UserCircle className="size-5" />
                <span className="uppercase">Nome Completo</span>
              </div>
              <p className="text-tertiary mt-2 ml-0.5 text-sm font-semibold capitalize">
                {aluno?.nome}
              </p>
            </section>

            <section className="text-tertiary grid grid-cols-1 gap-4 sm:grid-cols-2">
              <section className="space-y-1">
                <div className="flex items-center gap-2">
                  <Mail className="text-muted-foreground size-4" />
                  <span className="text-muted-foreground font-medium">
                    E-mail:
                  </span>
                </div>
                <p className="ml-0.5 font-semibold break-all">{aluno?.email}</p>
              </section>

              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Phone className="text-muted-foreground size-4" />
                  <span className="text-muted-foreground font-medium">
                    Telefone:
                  </span>
                </div>
                <p className="ml-0.5 font-semibold">{aluno?.telefone}</p>
              </div>
            </section>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Calendar className="text-muted-foreground size-4" />
                  <span className="text-muted-foreground font-medium">
                    Data de Nascimento:
                  </span>
                </div>
                <p className="text-tertiary ml-1 font-semibold">
                  {new Date(aluno?.data_nascimento || '').toLocaleDateString(
                    'pt-BR'
                  )}
                </p>
              </div>
            </div>
          </div>
        </CardContent>

        <div className="bg-primary absolute -right-16 -bottom-12 size-36 rounded-[54%_46%_50%_50%_/_58%_100%_0%_42%]"></div>
      </Card>

      <PortalDoAlunoPerfilCards aluno={aluno} />
    </main>
  );
}
