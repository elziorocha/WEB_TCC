import { EyeIcon, HistoryIcon, LandmarkIcon, ShieldIcon } from 'lucide-react';
import imagemHistoria1 from '/assets/foto_historia_1.jpg';
import imagemHistoria2 from '/assets/foto_historia_2.png';

export const SobreNos = () => {
  return (
    <main className="flex flex-col gap-7 md:gap-12">
      <section className="flex flex-col gap-3 p-4 text-center md:p-8">
        <h1 className="text-tertiary text-xl font-bold sm:text-4xl">
          Conectando Guarapuava com Segurança e Qualidade
        </h1>
        <h2 className="text-secondary text-base font-bold sm:text-2xl">
          Há 50 anos, somos o coração da mobilidade urbana em Guarapuava
        </h2>
      </section>

      <hr className="-mt-10 rounded border-2 border-zinc-400" />

      <section className="flex flex-col items-center gap-6 p-4 sm:gap-8 md:px-0 xl:flex-row xl:justify-between">
        <img
          src={imagemHistoria2}
          alt="Imagem antiga de ônibus da Pérola do Oeste"
          className="w-full max-w-md rounded-2xl object-cover shadow-sm sm:max-w-lg xl:max-w-md xl:rounded-r-full"
        />

        <article className="flex flex-col gap-5 text-center md:max-w-2xl lg:mx-6 lg:w-1/2">
          <div className="flex items-center justify-center gap-3">
            <h2 className="text-tertiary text-lg font-bold sm:text-3xl">
              Nossa História
            </h2>
            <HistoryIcon className="text-tertiary size-10 font-bold" />
          </div>

          <h3 className="text-secondary text-base font-semibold sm:text-2xl">
            Uma trajetória de dedicação que começou em 1973
          </h3>

          <p className="mx-auto max-w-3xl text-justify text-sm text-gray-700 sm:text-base md:text-center md:text-lg">
            A Pérola do Oeste nasceu da visão do Sr. Waldemar Tonatto e, desde
            então, tornou-se parte fundamental da história de Guarapuava.
            Superamos desafios com trabalho árduo e, desde 1985, sob nova
            direção, transformamos a empresa em uma referência em transporte.
          </p>
          <p className="mx-auto max-w-3xl text-justify text-sm text-gray-700 sm:text-base md:text-center md:text-lg">
            Hoje, contamos com uma frota moderna superior a 80 veículos e uma
            equipe de 250 colaboradores dedicados, sempre evoluindo para servir
            melhor nossa comunidade.
          </p>
        </article>

        <img
          src={imagemHistoria1}
          alt="Imagem antiga de ônibus da Pérola do Oeste"
          className="w-full max-w-md rounded-2xl object-cover shadow-sm sm:max-w-lg xl:max-w-md xl:rounded-l-full"
        />
      </section>

      <article className="mt-2 flex flex-col gap-8 p-4 md:p-8">
        <h2 className="text-tertiary text-center text-3xl font-bold">
          Nossos Compromissos
        </h2>

        <section className="grid gap-6 md:grid-cols-3">
          <div className="flex flex-col justify-between rounded-2xl bg-white p-6 shadow-md transition-all hover:scale-102">
            <div className="flex flex-col gap-4">
              <h3 className="text-secondary text-center text-xl font-bold">
                Missão
              </h3>
              <p className="text-base text-gray-700">
                Atender às necessidades de mobilidade das pessoas, buscando
                excelência em qualidade, segurança e preço justo. Valorizamos a
                satisfação de colaboradores e comunidade, preservando o meio
                ambiente e assegurando crescimento sustentável.
              </p>
            </div>
            <ShieldIcon className="text-secondary mt-6 size-14 self-center" />
          </div>

          <div className="flex flex-col justify-between rounded-2xl bg-white p-6 shadow-md transition-all hover:scale-102">
            <div className="flex flex-col gap-2">
              <h3 className="text-secondary text-center text-xl font-bold">
                Visão
              </h3>
              <p className="text-base text-gray-700">
                Ser o principal meio de integração social e econômica de nossa
                cidade, conectando 100% dos bairros com soluções inovadoras e
                eficientes.
              </p>
              <p>
                <span className="text-secondary font-bold">ISO9001</span> – A
                empresa está certificada na ISO9001 desde 2001. Em 2022 foi
                recertificada pela 7ª vez. Esta certificação demonstra que a
                Pérola do Oeste tem um sistema de gestão da qualidade adequado
                aos requisitos exigidos.
              </p>
            </div>
            <EyeIcon className="text-secondary mt-6 size-14 self-center" />
          </div>

          <div className="flex flex-col justify-between rounded-2xl bg-white p-6 shadow-md transition-all hover:scale-102">
            <div className="flex flex-col gap-4">
              <h3 className="text-secondary text-center text-xl font-bold">
                Cultura
              </h3>
              <div className="space-y-2 text-gray-700">
                <p>
                  <span className="text-secondary font-bold">Qualidade</span>{' '}
                  Atender e superar expectativas de passageiros, poder público e
                  empresas.
                </p>
                <p>
                  <span className="text-secondary font-bold">Pessoas</span>{' '}
                  Investir em colaboradores treinados, capacitados e
                  valorizados.
                </p>
                <p>
                  <span className="text-secondary font-bold">Comunidade</span>{' '}
                  Participar ativamente do desenvolvimento da cidade.
                </p>
              </div>
            </div>
            <LandmarkIcon className="text-secondary mt-6 size-14 self-center" />
          </div>
        </section>
      </article>

      <section className="flex flex-col gap-6 p-4 md:p-8">
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
    </main>
  );
};
