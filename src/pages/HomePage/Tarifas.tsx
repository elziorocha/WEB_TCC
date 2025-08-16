import TarifasCardsInfo from "@/components/HomeComponents/InicioComponents/TarifasCardsInfo";
import { MegaphoneIcon } from "lucide-react";

export const Tarifas = () => {
  return (
    <main className="p-4 flex flex-col gap-4">
      <h2 className="text-tertiary font-semibold text-xl text-center">
        Quais os custos{" "}
        <span className="font-semibold text-green-600 italic">tarifários</span>{" "}
        dos nossos serviços?
      </h2>

      <TarifasCardsInfo />

      <hr className="border-zinc-400 w-11/12 self-center" />

      <article className="flex flex-col gap-4">
        <h2 className="text-tertiary font-semibold text-xl text-center">
          Como saber qual cartão devo utilizar?
        </h2>

        <article className="flex items-center gap-3 p-1">
          <div className="rounded-full bg-primary/5 p-2 flex items-center justify-center self-center shadow-md">
            <MegaphoneIcon className="text-primary size-8 flex-shrink-0" />
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-bold">
              Quem pode ter um <span className="text-tertiary">EDUCARD</span>?
            </h3>
            <p className="text-sm text-justify leading-5 text-zinc-800 font-semibold">
              Todo <span className="text-secondary">Estudante</span> da{" "}
              <span className="text-secondary">Rede Pública</span>, seja do
              ensino fundamental, médio ou superior.
            </p>
          </div>
        </article>
      </article>
    </main>
  );
};
