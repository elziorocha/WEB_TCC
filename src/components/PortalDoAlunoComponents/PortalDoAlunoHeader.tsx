import { User, LogOut } from "lucide-react";
import logo from '../../assets/logo1.png';

export const PortalDoAlunoHeader = () => {
  return (
    <main className="flex justify-between bg-secondary text-whiteText py-3 px-6">
      <img src={logo} alt="logo da pérola do oeste"/>

      <section className="flex gap-16 items-center">
        <div className="flex items-center gap-0.5">
          <User className="size-8 p-1"/>
          <p className="font-semibold">Enzo Silva</p>
        </div>

        <LogOut className="cursor-pointer hover:bg-blue-600 p-1 size-8 rounded-md transition-colors"/>
      </section>
    </main>
  )
};

export default PortalDoAlunoHeader;
