import type { AlunoInterface } from "@/utils/interfaces.interface"
import { cardsDashboardPortalAluno } from "@/utils/objetosExportaveis"
import { Link } from "react-router-dom"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog"
import { Eye, Plus, GraduationCap, X } from "lucide-react"

export const PortalDoAlunoDashboardCards = ({
  aluno,
}: {
  aluno: AlunoInterface | null
}) => {
  return (
    <article className="flex flex-wrap justify-center gap-4">
      {cardsDashboardPortalAluno.map((item) => {
        if (item.key === "3") {
          return (
            <Dialog key={item.key}>
              <DialogTrigger asChild>
                <section className="cursor-pointer bg-white hover:bg-tertiary/5 transition-colors rounded-2xl shadow-md px-2 py-4 flex flex-col gap-4 w-36 min-h-36">
                  <div className="rounded-full bg-secondary/10 p-3 flex items-center justify-center self-center shadow-md">
                    <item.icon className="text-secondary size-7" />
                  </div>
                  <h4 className="text-base text-tertiary font-medium text-center">{item.label}</h4>
                </section>
              </DialogTrigger>

              <DialogContent showCloseButton={false} className="w-[90vw] max-w-md p-4 sm:p-6 rounded-2xl">
                  <DialogClose asChild>
                    <button className="absolute right-4 top-4 bg-gray-200 hover:bg-gray-300 rounded-full p-1 flex items-center justify-center
                    transition-all focus:outline-none cursor-pointer">
                      <X className="size-5" />
                    </button>
                  </DialogClose>

                <DialogHeader className="space-y-2">
                  <div className="size-14 sm:size-16 bg-gradient-to-br from-quarter to-tertiary rounded-full flex items-center justify-center shadow-lg self-center">
                    <GraduationCap className="size-8 sm:size-10 text-white" />
                  </div>
                  <DialogTitle className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-fifth to-secondary bg-clip-text text-transparent text-center">
                    Gestão de Matrículas
                  </DialogTitle>
                  <DialogDescription className="text-sm sm:text-base text-gray-700 text-center">
                    Escolha uma das opções para gerenciar suas matrículas
                  </DialogDescription>
                </DialogHeader>

                <section className="grid gap-3 sm:gap-4 mt-2 sm:mt-4">
                  <Link
                    to="/portal-do-aluno/consultar-matricula"
                    className="relative overflow-hidden bg-gradient-to-r from-fifth/15 to-fifth/25 hover:from-fifth/25 hover:to-fifth/35
                    border border-quarter/30 rounded-xl p-4 sm:p-6 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
                  >
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
                        <Eye className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-blue-900 text-base sm:text-lg">
                          Ver Matrículas
                        </h3>
                        <p className="text-blue-700 text-xs sm:text-sm">
                          Consulte suas matrículas
                        </p>
                      </div>
                    </div>
                  </Link>

                  <Link
                    to="/portal-do-aluno/nova-matricula"
                    className="relative overflow-hidden bg-gradient-to-r from-primary/15 to-primary/25 hover:from-primary/25 hover:to-primary/35
                    border border-primary/40 rounded-xl p-4 sm:p-6 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
                  >
                    <section className="flex items-center gap-3 sm:gap-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
                        <Plus className="size-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-[#403503] text-base sm:text-lg">
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
          )
        }

        if (item.key === "1") {
          return (
            <Link
              key={item.key}
              to="/portal-do-aluno/aluno-perfil"
              className="bg-white hover:bg-tertiary/5 transition-colors rounded-2xl shadow-md px-2 py-4 flex flex-col gap-4 w-36 min-h-36"
            >
              <div className="rounded-full bg-secondary/10 p-3 flex items-center justify-center self-center shadow-md">
                <item.icon className="text-secondary size-7" />
              </div>
              <h4 className="text-base text-tertiary font-medium text-center">
                Perfil de <span className="capitalize">{aluno?.nome.split(" ")[0] ?? "Aluno"}</span>
              </h4>
            </Link>
          )
        }

        return (
          <section
            key={item.key}
            className="bg-white hover:bg-tertiary/5 transition-colors rounded-2xl shadow-md px-2 py-4 flex flex-col gap-4 w-36 min-h-36 cursor-pointer"
          >
            <div className="rounded-full bg-secondary/10 p-3 flex items-center justify-center self-center shadow-md">
              <item.icon className="text-secondary size-7" />
            </div>
            <h4 className="text-base text-tertiary font-medium text-center">{item.label}</h4>
          </section>
        )
      })}
    </article>
  )
}
