import type { AlunoInterface } from '@/utils/interfaces.interface';
import { cardsDashboardPortalAluno } from '@/utils/objetosExportaveis';
import { Link } from 'react-router-dom';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';
import { Eye, Plus, GraduationCap, X } from 'lucide-react';

export const PortalDoAlunoDashboardCards = ({
  aluno,
}: {
  aluno: AlunoInterface | null;
}) => {
  return (
    <article className="flex flex-wrap justify-center gap-4">
      {cardsDashboardPortalAluno.map((item) => {
        if (item.key === '3') {
          return (
            <Dialog key={item.key}>
              <DialogTrigger asChild>
                <section className="hover:bg-tertiary/5 flex min-h-36 w-36 cursor-pointer flex-col gap-4 rounded-2xl bg-white px-2 py-4 shadow-md transition-colors">
                  <div className="bg-secondary/10 flex items-center justify-center self-center rounded-full p-3 shadow-md">
                    <item.icon className="text-secondary size-7" />
                  </div>
                  <h4 className="text-tertiary text-center text-base font-medium">
                    {item.label}
                  </h4>
                </section>
              </DialogTrigger>

              <DialogContent
                showCloseButton={false}
                className="w-[90vw] max-w-md rounded-2xl p-4 sm:p-6"
              >
                <DialogClose asChild>
                  <button className="absolute top-4 right-4 flex cursor-pointer items-center justify-center rounded-full bg-gray-200 p-1 transition-all hover:bg-gray-300 focus:outline-none">
                    <X className="size-5" />
                  </button>
                </DialogClose>

                <DialogHeader className="space-y-2">
                  <div className="from-quarter to-tertiary flex size-14 items-center justify-center self-center rounded-full bg-gradient-to-br shadow-lg sm:size-16">
                    <GraduationCap className="size-8 text-white sm:size-10" />
                  </div>
                  <DialogTitle className="from-fifth to-secondary bg-gradient-to-r bg-clip-text text-center text-2xl font-bold text-transparent sm:text-3xl">
                    Gestão de Matrículas
                  </DialogTitle>
                  <DialogDescription className="text-center text-sm text-gray-700 sm:text-base">
                    Escolha uma das opções para gerenciar suas matrículas
                  </DialogDescription>
                </DialogHeader>

                <section className="mt-2 grid gap-3 sm:mt-4 sm:gap-4">
                  <Link
                    to="/portal-do-aluno/consultar-matricula"
                    className="from-fifth/15 to-fifth/25 hover:from-fifth/25 hover:to-fifth/35 border-quarter/30 relative overflow-hidden rounded-xl border bg-gradient-to-r p-4 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg sm:p-6"
                  >
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500 shadow-md transition-shadow group-hover:shadow-lg sm:h-12 sm:w-12">
                        <Eye className="h-5 w-5 text-white sm:h-6 sm:w-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-base font-semibold text-blue-900 sm:text-lg">
                          Ver Matrículas
                        </h3>
                        <p className="text-xs text-blue-700 sm:text-sm">
                          Consulte suas matrículas
                        </p>
                      </div>
                    </div>
                  </Link>

                  <Link
                    to="/portal-do-aluno/nova-matricula"
                    className="from-primary/15 to-primary/25 hover:from-primary/25 hover:to-primary/35 border-primary/40 relative overflow-hidden rounded-xl border bg-gradient-to-r p-4 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg sm:p-6"
                  >
                    <section className="flex items-center gap-3 sm:gap-4">
                      <div className="bg-primary flex h-10 w-10 items-center justify-center rounded-lg shadow-md transition-shadow group-hover:shadow-lg sm:h-12 sm:w-12">
                        <Plus className="size-5 text-white sm:h-6 sm:w-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-base font-semibold text-[#403503] sm:text-lg">
                          Nova Matrícula
                        </h3>
                        <p className="text-yellowText text-xs sm:text-sm">
                          Cadastre uma nova matrícula
                        </p>
                      </div>
                    </section>
                  </Link>
                </section>
              </DialogContent>
            </Dialog>
          );
        }

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
