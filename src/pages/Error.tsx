import { CircleXIcon, MonitorXIcon } from "lucide-react";

export function Error() {
  return (
    <main className="h-full flex flex-col gap-16 items-center justify-center">
      <section className="flex flex-col items-center gap-3 text-center text-secondary font-bold z-50">
        <div className="flex items-center text-6xl sm:text-6xl md:text-7xl">
          <h1>Error 4</h1>
          <CircleXIcon className="size-15 sm:size-15 md:size-17 text-primary" />
          <h1>4</h1>
        </div>
        <h2 className="text-2xl sm:text-2xl md:text-4xl">
          Página não encontrada
        </h2>
      </section>

      <MonitorXIcon className="size-52 text-tertiary" />

      <button className="rounded-2xl bg-tertiary px-4 py-2 text-zinc-200 cursor-pointer">
        Voltar
      </button>
    </main>
  );
}

export default Error;
