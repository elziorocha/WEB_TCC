import TarifasCardsInfo from '@/components/HomeComponents/TarifasCardsInfo';
import { TarifasEducardInfo } from '@/components/HomeComponents/TarifasEducardInfo';

export const Tarifas = () => {
  return (
    <main className="flex flex-col gap-4 p-4">
      <h2 className="text-tertiary my-2 text-center text-xl font-semibold sm:text-2xl">
        Quais os custos{' '}
        <span className="font-semibold text-green-600 italic">tarifários</span>{' '}
        dos nossos serviços?
      </h2>

      <TarifasCardsInfo />

      <hr className="w-11/12 self-center border-zinc-400" />

      <article className="flex flex-col gap-4">
        <h2 className="text-tertiary text-center text-xl font-semibold sm:text-2xl">
          Como saber qual cartão devo utilizar?
        </h2>
      </article>

      <TarifasEducardInfo />
    </main>
  );
};
