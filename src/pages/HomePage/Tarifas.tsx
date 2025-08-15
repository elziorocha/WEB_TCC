import { HandCoins } from "lucide-react";

export const Tarifas = () => {
  return (
    <main className="p-4 flex flex-col gap-5">
      <h2 className="text-tertiary font-semibold text-xl text-center">
        Quais os custos{" "}
        <span className="font-semibold text-green-600 italic">tarifários</span>{" "}
        dos nossos serviços?
      </h2>

      <article className="shadow-md rounded-2xl flex items-center gap-3 p-4 bg-white">
        <HandCoins className="text-primary size-10 flex-shrink-0" />
        <p className="text-sm text-justify leading-5 text-zinc-700">
          A tarifa do transporte coletivo atualmente em{" "}
          <span className="font-bold text-primary">Guarapuava</span> para o
          usuário que paga em dinheiro é de:{" "}
          <span className="font-semibold text-green-600">R$6,50</span>.
        </p>
      </article>
    </main>
  );
};
