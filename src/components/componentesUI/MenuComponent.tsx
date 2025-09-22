import { useState } from 'react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  navHome,
  navUsuarios,
} from '@/utils/objetosExportaveis/objetosExportaveis';

export default function MenuComponent() {
  const [menuAtivo, setMenuAtivo] = useState(false);
  const fecharMenu = () => setMenuAtivo(false);

  const MenuDesktop = () => (
    <main className="hidden items-center gap-6 md:flex">
      <section className="flex items-center gap-4">
        {navHome.map((item) => (
          <Link
            key={item.key}
            to={item.key}
            className="hover:bg-quarter flex items-center gap-2 rounded-lg px-3 py-2 transition-colors"
          >
            <item.icon size={20} />
            <span className="text-white">{item.label}</span>
          </Link>
        ))}
      </section>

      <hr className="h-10 border border-zinc-300" />

      <section className="flex items-center gap-4">
        {navUsuarios.map((item) => (
          <Link
            key={item.key}
            to={item.key}
            className="hover:bg-quarter flex items-center gap-2 rounded-lg px-3 py-2 transition-colors"
          >
            <item.icon size={20} />
            <span className="text-white">{item.label}</span>
          </Link>
        ))}
      </section>
    </main>
  );

  const MenuMobile = () => (
    <Sheet open={menuAtivo} onOpenChange={setMenuAtivo}>
      <SheetTrigger>
        <Menu
          onClick={() => setMenuAtivo(!menuAtivo)}
          className="bg-tertiary z-50 block size-10 rounded-lg p-1 md:hidden"
        />
      </SheetTrigger>
      <SheetContent
        side="top"
        className="bg-tertiary data-[state=open]:slide-in-from-top-4 data-[state=closed]:slide-out-to-top-4 data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0 data-[state=open]:zoom-in-95 data-[state=closed]:zoom-out-95 inset-x-4 top-20 bottom-auto mx-auto h-auto max-w-md rounded-2xl border-none text-white shadow-2xl"
      >
        <SheetTitle className="border-b border-zinc-200 py-4 pl-6 text-lg text-white">
          Menu de navegação
        </SheetTitle>
        <SheetDescription hidden>menu de navegação do website</SheetDescription>

        <section className="flex flex-col gap-2 px-2 pb-4">
          <ul className="-mt-1 flex flex-col gap-1.5 px-2">
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

        <hr className="-mt-5 border-zinc-300" />

        <section className="flex flex-col gap-2 px-2 pb-4">
          <ul className="-mt-1 flex flex-col gap-1.5 px-2">
            {navUsuarios.map((item) => (
              <Link key={item.key} to={item.key} onClick={fecharMenu}>
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

  return (
    <main className="flex w-full items-center justify-center">
      <MenuDesktop />
      <MenuMobile />
    </main>
  );
}
