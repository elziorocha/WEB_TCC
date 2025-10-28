export const HomeFooter = () => {
  return (
    <footer className="from-tertiary to-quarter text-whiteText mt-8 bg-gradient-to-t lg:mt-0">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-6 py-6 text-center">
        <h2 className="text-sm font-medium tracking-wide sm:text-base md:text-lg">
          Rua Sorocaba, 277 - Bonsucesso - CEP: 85055-090
        </h2>
        <p className="text-xs opacity-80 sm:text-sm md:text-base">
          Guarapuava - Paraná | Fone:{' '}
          <span className="font-semibold">(42) 3035-3388</span>
        </p>

        <div className="my-2 h-px w-full bg-white/20" />

        <p className="text-[11px] opacity-60 sm:text-xs">
          © {new Date().getFullYear()} Transportes Coletivos Pérola do Oeste.
          Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default HomeFooter;
