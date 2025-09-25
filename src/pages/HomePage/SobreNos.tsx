export const SobreNos = () => {
  return (
    <main className="flex flex-col gap-16 md:p-8">
      {/* Seção 1: Nossa História */}
      <section className="flex flex-col gap-4 text-center">
        <h2 className="text-tertiary text-4xl font-bold">Nossa História</h2>
        <h3 className="text-secondary text-2xl font-semibold">
          Uma trajetória de dedicação que começou em 1973
        </h3>
        <p className="mx-auto max-w-3xl text-base text-gray-700 md:text-lg">
          A Pérola do Oeste nasceu da visão do Sr. Waldemar Tonatto e, desde
          então, tornou-se parte fundamental da história de Guarapuava.
          Superamos desafios com trabalho árduo e, desde 1985, sob nova direção,
          transformamos a empresa em uma referência em transporte.
        </p>
        <p className="mx-auto max-w-3xl text-base text-gray-700 md:text-lg">
          Hoje, contamos com uma frota moderna de mais de 80 veículos e uma
          equipe de 250 colaboradores dedicados, sempre evoluindo para servir
          melhor nossa comunidade.
        </p>
      </section>

      {/* Seção 2: Missão, Visão e Valores */}
      <section className="flex flex-col gap-8">
        <h2 className="text-tertiary text-center text-3xl font-bold">
          Nossos Compromissos
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {/* Missão */}
          <div className="flex flex-col gap-4 rounded-2xl bg-white p-6 shadow-md">
            <h3 className="text-secondary text-xl font-bold">Missão</h3>
            <p className="text-base text-gray-700">
              Atender às necessidades de mobilidade das pessoas, buscando
              excelência em qualidade, segurança e preço justo. Valorizamos a
              satisfação de colaboradores e comunidade, preservando o meio
              ambiente e assegurando crescimento sustentável.
            </p>
          </div>

          {/* Visão */}
          <div className="flex flex-col gap-4 rounded-2xl bg-white p-6 shadow-md">
            <h3 className="text-secondary text-xl font-bold">Visão</h3>
            <p className="text-base text-gray-700">
              Ser o principal agente de integração social e econômica de
              Guarapuava, conectando 100% dos bairros com soluções inovadoras e
              eficientes.
            </p>
          </div>

          {/* Valores */}
          <div className="flex flex-col gap-4 rounded-2xl bg-white p-6 shadow-md">
            <h3 className="text-secondary text-xl font-bold">Nossa Cultura</h3>
            <ul className="list-inside list-disc space-y-2 text-gray-700">
              <li>
                <strong>Qualidade:</strong> Atender e superar expectativas de
                passageiros, poder público e empresas.
              </li>
              <li>
                <strong>Pessoas:</strong> Investir em colaboradores treinados,
                capacitados e valorizados.
              </li>
              <li>
                <strong>Tecnologia:</strong> Manter frota e processos
                continuamente atualizados.
              </li>
              <li>
                <strong>Comunidade:</strong> Participar ativamente do
                desenvolvimento da cidade.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Seção 3: Diferenciais e Qualidade */}
      <section className="flex flex-col gap-6">
        <h2 className="text-tertiary text-center text-3xl font-bold">
          Qualidade que Faz a Diferença
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-3 rounded-2xl bg-white p-6 text-center shadow-md">
            <h3 className="text-secondary font-bold">Frota Moderna</h3>
            <p className="text-sm text-gray-700">
              Tecnologia de ponta para sua segurança e conforto.
            </p>
          </div>
          <div className="flex flex-col gap-3 rounded-2xl bg-white p-6 text-center shadow-md">
            <h3 className="text-secondary font-bold">
              Colaboradores Especializados
            </h3>
            <p className="text-sm text-gray-700">
              Uma equipe treinada e comprometida.
            </p>
          </div>
          <div className="flex flex-col gap-3 rounded-2xl bg-white p-6 text-center shadow-md">
            <h3 className="text-secondary font-bold">Compromisso Social</h3>
            <p className="text-sm text-gray-700">
              Atuamos com responsabilidade socioambiental.
            </p>
          </div>
          <div className="flex flex-col gap-3 rounded-2xl bg-white p-6 text-center shadow-md">
            <h3 className="text-secondary font-bold">AFUFAPE</h3>
            <p className="text-sm text-gray-700">
              Espaço de lazer completo para colaboradores, reforçando nosso
              cuidado com a equipe.
            </p>
          </div>
        </div>
      </section>

      {/* Seção CTA */}
      <section className="bg-primary rounded-3xl p-8 text-center text-white">
        <h2 className="mb-4 text-3xl font-bold">
          Pronto para Embarcar Conosco?
        </h2>
        <p className="mb-6 text-lg">
          Seja no transporte urbano, fretamento empresarial ou turismo, estamos
          aqui para servir você com excelência.
        </p>
        <button className="bg-tertiary hover:bg-tertiary/90 rounded-xl px-6 py-3 font-bold text-white transition-colors">
          Saiba Mais
        </button>
      </section>
    </main>
  );
};
