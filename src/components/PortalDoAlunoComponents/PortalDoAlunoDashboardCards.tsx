import type { AlunoInterface } from '@/utils/interfaces.interface';
import { cardsDashboardPortalAluno } from '@/utils/objetosExportaveis/objetosExportaveis';
import { Link } from 'react-router-dom';

import { PortalDoAlunoMatriculaModal } from './Modals/PortalDoAlunoMatriculaModal';
import { PortalDoAlunoProcessoModal } from './Modals/PortalDoAlunoProcessoModal';

export const PortalDoAlunoDashboardCards = ({
  aluno,
}: {
  aluno: AlunoInterface | null;
}) => {
  return (
    <article className="flex flex-wrap justify-center gap-4">
      {cardsDashboardPortalAluno.map((item) => {
        if (item.key === '1') {
          return (
            <Link
              key={item.key}
              to="/portal-do-aluno/aluno-perfil"
              className="hover:bg-tertiary/5 flex min-h-36 w-36 flex-col gap-4 rounded-2xl bg-white px-2 py-4 shadow-md transition-colors"
            >
              <div className="bg-secondary/10 flex items-center justify-center self-center rounded-full p-3 shadow-md">
                <item.icon className="text-secondary size-7" />
              </div>
              <h4 className="text-tertiary text-center text-base font-medium">
                Perfil de{' '}
                <span className="capitalize">
                  {aluno?.nome.split(' ')[0] ?? 'Aluno'}
                </span>
              </h4>
            </Link>
          );
        }

        if (item.key === '2') {
          return <PortalDoAlunoProcessoModal key={item.key} item={item} />;
        }

        if (item.key === '3') {
          return <PortalDoAlunoMatriculaModal key={item.key} item={item} />;
        }

        return (
          <section
            key={item.key}
            className="hover:bg-tertiary/5 flex min-h-36 w-36 cursor-pointer flex-col gap-4 rounded-2xl bg-white px-2 py-4 shadow-md transition-colors"
          >
            <div className="bg-secondary/10 flex items-center justify-center self-center rounded-full p-3 shadow-md">
              <item.icon className="text-secondary size-7" />
            </div>
            <h4 className="text-tertiary text-center text-base font-medium">
              {item.label}
            </h4>
          </section>
        );
      })}
    </article>
  );
};
