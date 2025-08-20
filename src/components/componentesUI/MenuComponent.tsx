import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { navHome, navUsuarios } from "@/utils/objetosExportaveis";

export default function MenuComponent() {
  const [menuAtivo, setMenuAtivo] = useState(false);

  const fecharMenu = () => setMenuAtivo(false);

  return (
    <Sheet open={menuAtivo} onOpenChange={setMenuAtivo}>
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

        <section className="px-2 pb-4 flex flex-col gap-2">
          <ul className="px-2 flex flex-col gap-1.5 -mt-1">
            {navHome.map((item) => (
              <Link key={item.key} to={item.key} onClick={fecharMenu}>
                <li className="botao_menu">
                  <item.icon size={20} />
                  <label>{item.label}</label>
                </li>
              </Link>
            ))}
          </ul>
        </section>

        <hr className="border-zinc-300 -mt-5" />

        <section className="px-2 pb-4 flex flex-col gap-2">
          <ul className="px-2 flex flex-col gap-1.5 -mt-1">
            {navUsuarios.map((item) => (
              <Link key={item.key} to={item.key}>
                <li className="botao_menu">
                  <item.icon size={20} />
                  <label>{item.label}</label>
                </li>
              </Link>
            ))}
          </ul>
        </section>
      </SheetContent>
    </Sheet>
  );
}
