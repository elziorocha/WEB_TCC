import { cardsInicio } from '@/utils/objetosExportaveis/objetosExportaveis';

const ServicosCardsInicio = () => {
  return (
    <main className="mt-4 mb-8 flex flex-col items-center justify-center gap-5 p-2">
      <h2 className="text-tertiary text-2xl font-bold md:text-4xl">
        Nossos Serviços
      </h2>

      <article className="flex flex-wrap justify-center gap-4">
        {cardsInicio.map((item) => (
          <section
            key={item.key}
            className="hover:bg-tertiary/5 flex w-36 flex-col gap-4 rounded-2xl bg-white px-2 py-4 shadow-md transition-colors md:w-72"
          >
            <div className="bg-secondary/10 flex items-center justify-center self-center rounded-full p-3 shadow-md">
              <item.icon className="text-secondary size-7" />
            </div>

            <h4 className="text-tertiary text-center text-xs font-medium md:text-sm">
              {item.label}
            </h4>
          </section>
        ))}
      </article>
    </main>
  );
};

export default ServicosCardsInicio;
