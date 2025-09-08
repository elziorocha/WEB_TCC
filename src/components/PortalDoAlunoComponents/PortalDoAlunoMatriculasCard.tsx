import type { AlunoMatriculaInterface } from '@/utils/interfaces.interface';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Building2Icon } from 'lucide-react';
import { Badge } from '../ui/badge';
import { getTurnoBadge } from '@/utils/objetosExportaveisReact';

const PortalDoAlunoMatriculasCard = ({
  alunoMatricula,
}: {
  alunoMatricula: AlunoMatriculaInterface;
}) => {
  return (
    <Card className="mb-4 gap-2 border-none py-4 shadow-md">
      <CardHeader className="px-4">
        <CardTitle className="flex items-center justify-between">
          <section className="text-lg font-medium">
            Matrícula: {alunoMatricula.id}
          </section>

          <Badge>{alunoMatricula.status_matricula}</Badge>
        </CardTitle>
      </CardHeader>

      <CardContent className="px-4">
        <div className="flex flex-col gap-1 text-sm">
          <div className="ml-2 flex items-center gap-2">
            <span className="font-medium">Ano Letivo:</span>
            <p className="text-tertiary font-semibold">
              {alunoMatricula.ano_letivo}
            </p>
          </div>

          <section className="from-primary/15 to-primary/45 border-primary/40 mt-1 rounded-xl border bg-gradient-to-br px-3 py-2 shadow-md">
            <div className="text-yellowText flex items-center gap-2">
              <Building2Icon className="bg-primary/70 size-6 rounded-md p-1" />
              <span className="font-semibold uppercase">Instituição:</span>
            </div>

            <p className="mt-2">{alunoMatricula.instituicao}</p>
          </section>

          <section className="mt-2 flex items-center gap-2">
            <span className="font-medium">Série:</span>
            <p className="text-tertiary font-semibold">
              {alunoMatricula.serie_ou_periodo}
            </p>
          </section>

          <section className="flex items-center gap-1">
            <span className="font-medium">Curso:</span>
            <p>{alunoMatricula.curso}</p>
          </section>

          <section className="mt-2 flex justify-between">
            <section className="flex flex-col gap-2">
              <div className="flex items-center gap-1">
                <span className="font-medium">Início:</span>
                <p>
                  {new Date(alunoMatricula.data_inicio).toLocaleDateString()}
                </p>
              </div>
              <div className="flex items-center gap-1">
                <span className="font-medium">Fim:</span>
                <p>{new Date(alunoMatricula.data_fim).toLocaleDateString()}</p>
              </div>
            </section>

            <section className="flex flex-col gap-2">
              <div className="flex items-center gap-1">
                <span className="font-medium">Período:</span>
                <div>{getTurnoBadge(alunoMatricula.turno)}</div>
              </div>
              <div className="flex items-center gap-1">
                <span className="font-medium">Convênio:</span>
                <p>{alunoMatricula.convenio}</p>
              </div>
            </section>
          </section>
        </div>
      </CardContent>
    </Card>
  );
};

export default PortalDoAlunoMatriculasCard;
