import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  BookUserIcon,
  BusFrontIcon,
  ClockIcon,
  HistoryIcon,
  Home,
  Menu,
  MessageCircleMoreIcon,
} from "lucide-react";

const MenuComponent = () => {
  const [menuAtivo, setMenuAtivo] = useState(false);

  return (
    <Sheet>
      <SheetTrigger>
        <Menu
          onClick={() => setMenuAtivo(!menuAtivo)}
          className="size-10 p-1 rounded-lg bg-tertiary block sm:block md:hidden z-50"
        />
      </SheetTrigger>
      <SheetContent
        side="top"
        className="bg-tertiary text-white border-none mx-auto max-w-md rounded-2xl shadow-2xl 
                   data-[state=open]:slide-in-from-top-4 data-[state=closed]:slide-out-to-top-4
                   data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0
                   data-[state=open]:zoom-in-95 data-[state=closed]:zoom-out-95
                   inset-x-4 top-20 bottom-auto h-auto"
      >
        <SheetTitle className="text-white py-4 pl-6 text-lg border-b border-zinc-200">
          Menu de navegação
        </SheetTitle>
        <SheetDescription hidden>menu de navegação do website</SheetDescription>
        <section className="px-2 pb-4 flex -mt-1">
          <ul className="px-2 flex flex-col gap-1.5">
            <li className="botao_menu">
              <Home size={20} />
              Home
            </li>
            <li className="botao_menu">
              <HistoryIcon size={20} />
              Nossa História
            </li>
            <li className="botao_menu">
              <MessageCircleMoreIcon size={20} />
              Fale Conosco
            </li>
            <li className="botao_menu">
              <ClockIcon size={20} />
              Horários e Itinerários
            </li>
          </ul>
        </section>

        <hr className="border-zinc-300 -mt-5" />

        <section className="px-2 pb-4 gap-2">
          <ul className="px-2 flex flex-col gap-1">
            <li className="botao_menu">
              <BookUserIcon size={20} />
              Portal do Aluno
            </li>
            <li className="botao_menu">
              <BusFrontIcon size={20} />
              Área do Colaborador
            </li>
          </ul>
        </section>
      </SheetContent>
    </Sheet>
  );
};

export default MenuComponent;
