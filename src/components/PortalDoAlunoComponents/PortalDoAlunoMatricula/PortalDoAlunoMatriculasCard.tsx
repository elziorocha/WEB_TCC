import type { AlunoMatriculaInterface } from '@/utils/interfaces.interface';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import {
  Building2Icon,
  CalendarDays,
  GraduationCap,
  BookOpen,
  Clock,
  Handshake,
  MapPinIcon,
  FileText,
} from 'lucide-react';
import {
  getStatusMatriculaBadge,
  getTurnoBadge,
} from '@/utils/objetosExportaveisReact';

const PortalDoAlunoMatriculasCard = ({
  alunoMatricula,
}: {
  alunoMatricula: AlunoMatriculaInterface;
}) => {
  const mostrarDadosCEEBJA =
    alunoMatricula.grau_scolaridade?.includes('CEEBJA');
  const mostrarCurso =
    alunoMatricula.grau_scolaridade === 'Ensino Superior' ||
    alunoMatricula.grau_scolaridade?.includes('Técnico');

  return (
    <Card className="mb-8 gap-2 overflow-hidden rounded-2xl border-none pt-4 pb-0 shadow-md">
      <CardHeader className="px-4">
        <CardTitle className="flex items-center justify-between">
          <span className="text-lg font-semibold">
            Matrícula {alunoMatricula.ano_letivo.toString() + alunoMatricula.id}
          </span>
          {getStatusMatriculaBadge(alunoMatricula.status_matricula)}
        </CardTitle>
      </CardHeader>

      <hr className="border-dashed border-zinc-300" />

      <CardContent className="px-4 pt-3 pb-5">
        <div className="flex flex-col gap-3 text-sm">
          <div className="text-muted-foreground flex items-center gap-2">
            <CalendarDays className="size-4" />
            <span className="font-medium">Ano Letivo:</span>
            <p className="font-semibold text-black">
              {alunoMatricula.ano_letivo}
            </p>
          </div>

          <section className="from-primary/10 to-primary/20 border-primary/30 rounded-xl border bg-gradient-to-br px-3 py-2 shadow-sm">
            <div className="text-primary flex items-center gap-2 font-semibold">
              <Building2Icon className="size-5" />
              <span className="uppercase">Instituição</span>
            </div>
            <p className="mt-1 text-sm font-medium text-black capitalize">
              {alunoMatricula.instituicao}
            </p>
          </section>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div className="flex items-center gap-2">
              <GraduationCap className="text-muted-foreground size-4" />
              <span className="text-muted-foreground font-medium">
                Série/Período:
              </span>
              <p className="text-tertiary font-semibold">
                {alunoMatricula.serie_ou_periodo}º
              </p>
            </div>
            {mostrarCurso ? (
              <div className="-mt-1.5 flex items-center gap-2">
                <BookOpen className="text-muted-foreground size-4" />
                <span className="text-muted-foreground font-medium">
                  Curso:
                </span>
                <p className="font-semibold">{alunoMatricula.curso}</p>
              </div>
            ) : (
              <></>
            )}
          </div>

          <div className="mt-2 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <CalendarDays className="text-muted-foreground size-4" />
                <span className="text-muted-foreground font-medium">
                  Início:
                </span>
                <p className="font-semibold">
                  {new Date(alunoMatricula.data_inicio).toLocaleDateString()}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <CalendarDays className="text-muted-foreground size-4" />
                <span className="text-muted-foreground font-medium">Fim:</span>
                <p className="font-semibold">
                  {new Date(alunoMatricula.data_fim).toLocaleDateString()}
                </p>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Clock className="text-muted-foreground size-4" />
                <span className="text-muted-foreground font-medium">
                  Turno:
                </span>
                {getTurnoBadge(alunoMatricula.turno.toLowerCase() as any)}
              </div>
              <div className="flex items-center gap-2">
                <Handshake className="text-muted-foreground size-4" />
                <span className="text-muted-foreground font-medium">
                  Convênio:
                </span>
                <p className="font-semibold">{alunoMatricula.convenio}</p>
              </div>
            </div>

            {mostrarDadosCEEBJA ? (
              <div className="space-y-2">
                <hr className="border-dashed border-zinc-300" />
                <div className="flex items-center gap-2">
                  <MapPinIcon className="text-muted-foreground size-4" />
                  <span className="text-muted-foreground font-medium">
                    Distância:
                  </span>
                  <p className="font-semibold">
                    {alunoMatricula.distancia_instituicao} Km
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <FileText className="text-muted-foreground size-4" />
                  <span className="text-muted-foreground font-medium">
                    CGM:
                  </span>
                  <p className="font-semibold">{alunoMatricula.cgm}</p>
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PortalDoAlunoMatriculasCard;
