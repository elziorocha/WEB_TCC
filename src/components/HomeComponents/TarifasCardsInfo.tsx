import {
  CreditCardIcon,
  HandCoins,
  IdCardIcon,
  TicketsIcon,
} from 'lucide-react';

const TarifasCardsInfo = () => {
  return (
    <main className="flex max-w-5xl flex-col gap-5 self-center">
      <article className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-md">
        <div className="bg-primary/10 flex items-center justify-center self-center rounded-full p-2 shadow-md">
          <HandCoins className="text-primary size-10 flex-shrink-0" />
        </div>
        <p className="text-justify text-sm leading-5 text-zinc-700 md:text-base">
          A tarifa do transporte coletivo atualmente em{' '}
          <span className="text-primary font-bold">Guarapuava</span> para o
          usuário que paga em dinheiro é de{' '}
          <span className="font-bold text-green-600 underline underline-offset-3">
            R$6,50
          </span>
          .
        </p>
      </article>

      <article className="flex justify-between rounded-2xl bg-white p-3 shadow-md">
        <section className="flex flex-1 flex-col items-center justify-center gap-2 p-1 text-center">
          <div className="bg-secondary/10 flex items-center justify-center self-center rounded-full p-2 shadow-md">
            <TicketsIcon className="text-tertiary size-8 flex-shrink-0" />
          </div>
          <p className="mt-1 text-sm leading-5 text-zinc-700 md:text-base">
            A tarifa do cartão{' '}
            <span className="text-secondary font-bold">GUARACARD</span> é de{' '}
            <span className="font-bold text-green-600 underline underline-offset-3">
              R$4,00
            </span>
            .
          </p>
        </section>

        <hr className="h-26 self-center border border-zinc-200" />

        <section className="flex flex-1 flex-col items-center justify-center gap-2 p-1 text-center">
          <div className="bg-secondary/10 flex items-center justify-center self-center rounded-full p-2 shadow-md">
            <CreditCardIcon className="text-tertiary size-8 flex-shrink-0" />
          </div>
          <p className="mt-1 text-sm leading-5 text-zinc-700 md:text-base">
            A tarifa do cartão{' '}
            <span className="text-secondary font-bold">VEM ESCOLAR</span> é de{' '}
            <span className="font-bold text-green-600 underline underline-offset-3">
              R$3,25
            </span>
            .
          </p>
        </section>
      </article>

      <article className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-md">
        <div className="bg-secondary/10 flex items-center justify-center self-center rounded-full p-2 shadow-md">
          <IdCardIcon className="text-tertiary size-8 flex-shrink-0" />
        </div>
        <p className="text-justify text-sm leading-5 text-zinc-700 md:text-base">
          Os <span className="text-primary font-bold">Estudantes</span> possuem
          o direito do valor da passagem ser de{' '}
          <span className="font-bold text-green-600 underline underline-offset-3">
            R$1,00
          </span>{' '}
          com a utilização do cartão{' '}
          <span className="text-secondary font-bold">EDUCARD</span>, conforme a
          Lei Municipal 3026, de 16 de dezembro de 2019.
        </p>
      </article>
    </main>
  );
};

export default TarifasCardsInfo;
