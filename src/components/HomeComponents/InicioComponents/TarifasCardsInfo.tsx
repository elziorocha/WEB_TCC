import {
  CreditCardIcon,
  HandCoins,
  IdCardIcon,
  TicketsIcon,
} from "lucide-react";

const TarifasCardsInfo = () => {
  return (
    <main className="flex flex-col gap-5">
      <article className="shadow-md rounded-2xl flex items-center gap-3 p-4 bg-white">
        <div className="rounded-full bg-primary/10 p-2 flex items-center justify-center self-center shadow-md">
          <HandCoins className="text-primary size-10 flex-shrink-0" />
        </div>
        <p className="text-sm text-justify leading-5 text-zinc-700">
          A tarifa do transporte coletivo atualmente em{" "}
          <span className="font-bold text-primary">Guarapuava</span> para o
          usuário que paga em dinheiro é de{" "}
          <span className="font-semibold text-green-600 underline underline-offset-3">
            R$6,50
          </span>
          .
        </p>
      </article>

      <article className="shadow-md rounded-2xl flex justify-between p-3 bg-white">
        <section className="flex flex-1 flex-col items-center justify-center gap-2 p-1 text-center">
          <div className="rounded-full bg-secondary/10 p-2 flex items-center justify-center self-center shadow-md">
            <TicketsIcon className="text-tertiary size-8 flex-shrink-0" />
          </div>
          <p className="text-sm leading-5 text-zinc-700">
            A tarifa do cartão{" "}
            <span className="font-bold text-secondary">GUARACARD</span> é de{" "}
            <span className="font-semibold text-green-600 underline underline-offset-3">
              R$4,00
            </span>
            .
          </p>
        </section>

        <hr className="border border-zinc-200 h-26 self-center" />

        <section className="flex flex-1 flex-col items-center justify-center gap-2 p-1 text-center">
          <div className="rounded-full bg-secondary/10 p-2 flex items-center justify-center self-center shadow-md">
            <CreditCardIcon className="text-tertiary size-8 flex-shrink-0" />
          </div>
          <p className="text-sm leading-5 text-zinc-700">
            A tarifa do cartão{" "}
            <span className="font-bold text-secondary">VEM ESCOLAR</span> é de{" "}
            <span className="font-semibold text-green-600 underline underline-offset-3">
              R$3,25
            </span>
            .
          </p>
        </section>
      </article>

      <article className="shadow-md rounded-2xl flex items-center gap-3 p-4 bg-white">
        <div className="rounded-full bg-secondary/10 p-2 flex items-center justify-center self-center shadow-md">
          <IdCardIcon className="text-tertiary size-8 flex-shrink-0" />
        </div>
        <p className="text-sm text-justify leading-5 text-zinc-700">
          Os <span className="font-bold text-primary">Estudantes</span> possuem
          o direito do valor da passagem ser de{" "}
          <span className="font-semibold text-green-600 underline underline-offset-3">
            R$1,00
          </span>{" "}
          com a utilização do cartão{" "}
          <span className="font-bold text-secondary">EDUCARD</span>, conforme a
          Lei Municipal 3026, de 16 de dezembro de 2019.
        </p>
      </article>
    </main>
  );
};

export default TarifasCardsInfo;
