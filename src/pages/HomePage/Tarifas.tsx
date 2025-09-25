import TarifasCardsInfo from '@/components/HomeComponents/TarifasCardsInfo';
import { TarifasEducardInfo } from '@/components/HomeComponents/TarifasEducardInfo';

export const Tarifas = () => {
  return (
    <main className="flex flex-col gap-4 p-4">
      <h2 className="text-tertiary my-2 text-center text-xl font-bold sm:text-2xl">
        Quais os custos{' '}
        <span className="font-semibold text-green-600 italic">tarifários</span>{' '}
        dos nossos serviços?
      </h2>

      <TarifasCardsInfo />

      <hr className="w-11/12 self-center border-zinc-400" />

      <article className="mt-2 flex flex-col gap-4">
        <h2 className="text-tertiary text-center text-xl font-bold sm:text-2xl">
          O que mais posso saber?
        </h2>
      </article>

      <TarifasEducardInfo />
    </main>
  );
};
