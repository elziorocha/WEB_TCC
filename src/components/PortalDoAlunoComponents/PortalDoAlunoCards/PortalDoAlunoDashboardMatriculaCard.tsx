import { alunoMatriculasData } from '@/services/ChamadasApi/apiMatricula';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  GraduationCap,
  Building2,
  BookOpen,
  Calendar,
  AlertCircle,
  School2Icon,
  Clock,
} from 'lucide-react';

export const PortalDoAlunoDashboardMatriculaCard = () => {
  const { alunoMatriculas, loading } = alunoMatriculasData();

  const matriculaAtiva = alunoMatriculas.find(
    (matricula) => matricula.status_matricula === true
  );

  if (loading) {
    return (
      <Card className="max-w-5xl rounded-2xl border-none shadow-md">
        <CardContent className="flex items-center justify-center py-8">
          <p className="text-muted-foreground text-sm font-medium">
            Carregando...
          </p>
        </CardContent>
      </Card>
    );
  }

  if (!matriculaAtiva) {
    return (
      <Card className="max-w-5xl min-w-2xl rounded-2xl border-none shadow-md">
        <CardContent className="flex items-center gap-3 py-6">
          <AlertCircle className="size-8 text-amber-500" />
          <p className="text-muted-foreground text-base font-medium">
            Nenhuma matrícula ativa em vigor!
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-3xl gap-0 overflow-hidden rounded-2xl border-none py-3 shadow-md">
      <CardHeader className="px-4">
        <CardTitle className="flex items-center gap-2">
          <School2Icon className="text-secondary size-6" />
          <span className="text-lg font-semibold">Matrícula Ativa</span>
        </CardTitle>
      </CardHeader>

      <hr className="border-dashed border-zinc-300" />

      <CardContent className="px-4 pt-4 pb-5">
        <div className="flex flex-col gap-4 text-sm">
          <section className="from-secondary/10 to-secondary/25 border-secondary/35 rounded-xl border bg-gradient-to-br px-3 py-2 shadow-sm">
            <div className="text-secondary flex items-center gap-2 font-semibold">
              <Building2 className="size-5" />
              <span className="uppercase">Instituição</span>
            </div>
            <p className="text-tertiary mt-2 ml-0.5 text-sm font-semibold">
              {matriculaAtiva.instituicao}
            </p>
          </section>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <section className="flex items-center gap-1">
              <BookOpen className="text-muted-foreground size-4" />
              <span className="text-muted-foreground font-medium">Curso:</span>

              <p className="text-tertiary ml-0.5 font-semibold">
                {matriculaAtiva.curso}
              </p>
            </section>

            <section className="flex items-center gap-1">
              <GraduationCap className="text-muted-foreground size-4" />
              <span className="text-muted-foreground font-medium">
                Série/Período:
              </span>
              <p className="text-tertiary font-semibold">
                {matriculaAtiva.serie_ou_periodo}º
              </p>
            </section>

            <section className="flex items-center gap-1">
              <Clock className="text-muted-foreground size-4" />
              <span className="text-muted-foreground font-medium">Turno:</span>

              <p className="text-tertiary ml-0.5 font-semibold capitalize">
                {matriculaAtiva.turno}
              </p>
            </section>

            <section className="flex items-center gap-1">
              <Calendar className="text-muted-foreground size-4" />
              <span className="text-muted-foreground font-medium">
                Vigência:
              </span>

              <p className="text-tertiary ml-0.5 text-xs font-semibold sm:text-sm">
                De:{' '}
                {new Date(matriculaAtiva.data_inicio).toLocaleDateString(
                  'pt-BR'
                )}{' '}
                Até{' '}
                {new Date(matriculaAtiva.data_fim).toLocaleDateString('pt-BR')}
              </p>
            </section>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
