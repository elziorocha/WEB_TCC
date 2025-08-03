import { Button } from "@/components/ui/button";
import { CircleXIcon, MonitorXIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function Error() {
  const navigate = useNavigate();

  return (
    <main className="h-full flex flex-col gap-8 sm:gap-8 md:gap-14 items-center justify-center">
      <section className="flex flex-col items-center gap-3 text-center text-tertiary font-bold z-50">
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

      <Button
        onClick={() => navigate(-1)}
        className="bg-tertiary px-6 text-lg text-whiteText hover:bg-secondary"
      >
        Voltar
      </Button>
    </main>
  );
}

export default Error;
