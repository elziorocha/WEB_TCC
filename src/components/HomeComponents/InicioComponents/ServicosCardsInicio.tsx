import { cardsInicio } from "@/utils/objetosExportaveis";

const ServicosCardsInicio = () => {
  return (
    <main className="flex flex-col gap-5 justify-center items-center p-2">
      <h2 className="text-tertiary font-bold text-2xl">Nossos Serviços</h2>

      <article className="flex flex-wrap justify-center gap-4">
        {cardsInicio.map((item) => (
          <section
            key={item.key}
            className="bg-white hover:bg-tertiary/5 transition-colors rounded-2xl shadow-md px-2 py-4 flex flex-col gap-4 w-36"
          >
            <div className="rounded-full bg-secondary/10 p-3 flex items-center justify-center self-center shadow-md">
              <item.icon className="text-secondary size-7" />
            </div>

            <h4 className="text-xs text-tertiary font-medium text-center">
              {item.label}
            </h4>
          </section>
        ))}
      </article>
    </main>
  );
};

export default ServicosCardsInicio;
