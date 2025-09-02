import type { AlunoInterface } from "@/utils/interfaces.interface";
import { cardsDashboardPortalAluno } from "@/utils/objetosExportaveis";

export const PortalDoAlunoDashboardCards = ({
  aluno,
}: {
  aluno: AlunoInterface | null;
}) => {
  return (
    <article className="flex flex-wrap justify-center gap-4">
      {cardsDashboardPortalAluno.map((item) => (
        <section
          key={item.key}
          className="bg-white hover:bg-tertiary/5 transition-colors rounded-2xl shadow-md px-2 py-4 flex flex-col gap-4 w-36 min-h-36"
        >
          <div className="rounded-full bg-secondary/10 p-3 flex items-center justify-center self-center shadow-md">
            <item.icon className="text-secondary size-7" />
          </div>

          <h4 className="text-base text-tertiary font-medium text-center">
            {item.key === "1" ? (
              <p>
                Perfil de{" "}
                <span className="capitalize">
                  {aluno?.nome.split(" ")[0] ?? "Aluno"}
                </span>
              </p>
            ) : (
              item.label
            )}
          </h4>
        </section>
      ))}
    </article>
  );
};
