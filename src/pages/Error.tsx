export function Error() {
  return (
    <main className="h-full flex flex-col gap-16 items-center justify-center">
      <section className="flex flex-col gap-3 text-center text-secondary font-bold">
        <h1 className="text-7xl">Error 404</h1>
        <h2 className="text-6xl">Página não encontrada</h2>
      </section>

      <button className="rounded-2xl bg-secondary px-4 py-2 text-zinc-200 cursor-pointer">
        Voltar
      </button>
    </main>
  );
}

export default Error;
