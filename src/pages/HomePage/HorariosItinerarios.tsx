import { Link } from 'react-router-dom';
import { ChevronRight, Clock } from 'lucide-react';
import { horariosItinerarios } from '@/utils/objetosHorariosItinerarios/listaHorarios';

export const HorariosItinerarios = () => {
  return (
    <main className="flex min-h-screen flex-col gap-6 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-4 md:p-8">
      <div className="space-y-3 text-center">
        <h1 className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-800 bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
          Horários e Itinerários
        </h1>
        <p className="mx-auto max-w-2xl text-base text-slate-600">
          Consulte os horários das linhas de ônibus da Pérola do Oeste em
          Guarapuava
        </p>
      </div>

      <section className="mx-auto flex w-full max-w-7xl flex-col gap-6">
        {horariosItinerarios.map((grupo, index) => (
          <div
            key={grupo.titulo}
            className="group relative overflow-hidden rounded-xl border border-white/20 bg-white/80 shadow-lg backdrop-blur-sm"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/3 via-indigo-500/3 to-blue-600/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <div className="relative p-4 md:p-6">
              <div className="mb-4 flex items-center justify-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 shadow-md">
                  <Clock className="size-5 text-white" />
                </div>
                <h2 className="text-center text-xl font-bold text-slate-800 md:text-2xl">
                  {grupo.titulo}
                </h2>
              </div>

              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:gap-3 lg:grid-cols-4 xl:grid-cols-5">
                {grupo.linhas.map((linha) => (
                  <Link
                    to={`/horarios-itinerarios/${linha.nome
                      .toLowerCase()
                      .normalize('NFD')
                      .replace(/[\u0300-\u036f]/g, '')
                      .replace(/\s+/g, '-')}`}
                    title={linha.nome}
                    key={linha.numero}
                    className="group/item flex w-full items-center justify-between truncate rounded-lg border border-slate-200/50 bg-gradient-to-br from-white to-slate-50 p-2.5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md md:p-3"
                  >
                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-md bg-gradient-to-br from-blue-100 to-indigo-100 text-xs font-bold text-blue-700 transition-all duration-300 group-hover/item:from-blue-200 group-hover/item:to-indigo-200">
                        {linha.numero}
                      </div>
                      {linha.nome}
                    </div>
                    <ChevronRight className="size-5 text-zinc-600 opacity-0 transition-opacity duration-300 group-hover/item:opacity-100" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};
