import CarrosselInicio from "@/components/HomeComponents/InicioComponents/CarrosselInicio";
import ServicosCardsInicio from "@/components/HomeComponents/InicioComponents/ServicosCardsInicio";

export function Inicio() {
  return (
    <main className="flex flex-col gap-3">
      <section className="bg-secondary px-2 pt-1 pb-4">
        <div className="text-center text-whiteText flex flex-col gap-2">
          <h2 className="text-2xl font-bold lg:text-4xl">
            Viaje com <span className="text-primary">Segurança</span> e{" "}
            <span className="text-primary">Conforto</span>
          </h2>
          <h3 className="text-sm text md:text-2xl font-medium">
            Conectamos você aos seus destinos com qualidade, pontualidade e o
            melhor atendimento do <span className="text-primary">Paraná</span>!
          </h3>
        </div>
      </section>

      <CarrosselInicio />

      <ServicosCardsInicio />
    </main>
  );
}

export default Inicio;
