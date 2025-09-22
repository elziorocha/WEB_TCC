import { Button } from '@/components/ui/button';
import { CircleXIcon, MonitorXIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function Error() {
  const navigate = useNavigate();

  return (
    <main className="flex h-full flex-col items-center justify-center gap-8 sm:gap-8 md:gap-14">
      <section className="text-tertiary z-50 flex flex-col items-center gap-3 text-center font-bold">
        <div className="flex items-center text-6xl sm:text-6xl md:text-7xl">
          <h1>Error 4</h1>
          <CircleXIcon className="text-primary size-15 sm:size-15 md:size-17" />
          <h1>4</h1>
        </div>
        <h2 className="text-2xl sm:text-2xl md:text-4xl">
          Página não encontrada
        </h2>
      </section>

      <MonitorXIcon className="text-tertiary size-52" />

      <Button
        onClick={() => navigate(-1)}
        className="bg-tertiary text-whiteText hover:bg-secondary px-6 text-lg"
      >
        Voltar
      </Button>
    </main>
  );
}
