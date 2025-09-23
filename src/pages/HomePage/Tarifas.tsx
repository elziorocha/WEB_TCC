import TarifasCardsInfo from '@/components/HomeComponents/InicioComponents/TarifasCardsInfo';
import { MegaphoneIcon } from 'lucide-react';

export const Tarifas = () => {
  return (
    <main className="flex flex-col gap-4 p-4">
      <h2 className="text-tertiary text-center text-xl font-semibold">
        Quais os custos{' '}
        <span className="font-semibold text-green-600 italic">tarifários</span>{' '}
        dos nossos serviços?
      </h2>

      <TarifasCardsInfo />

      <hr className="w-11/12 self-center border-zinc-400" />

      <article className="flex flex-col gap-4">
        <h2 className="text-tertiary text-center text-xl font-semibold">
          Como saber qual cartão devo utilizar?
        </h2>

        <article className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-md">
          <div className="bg-primary/10 flex items-center justify-center self-center rounded-full p-2 shadow-md">
            <MegaphoneIcon className="text-primary size-8 flex-shrink-0" />
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-bold">
              Quem pode ter um <span className="text-tertiary">EDUCARD</span>?
            </h3>
            <p className="text-justify text-sm leading-5 font-semibold text-zinc-800">
              Todo <span className="text-secondary">Estudante</span> da{' '}
              <span className="text-secondary">Rede Pública</span>, seja do
              ensino fundamental, médio ou superior.
            </p>
          </div>
        </article>
      </article>
    </main>
  );
};
