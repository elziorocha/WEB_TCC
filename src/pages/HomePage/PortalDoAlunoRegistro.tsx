import {
  ArrowRight,
  CalendarDaysIcon,
  CircleUserIcon,
  Mail,
  MailCheck,
  SmartphoneIcon,
} from "lucide-react";
import { Link } from "react-router-dom";

const PortalDoAlunoRegistro = () => {
  return (
    <main className="w-full min-h-screen p-6 -mb-8">
      <div className="w-full max-w-md flex flex-col gap-3">
        <section className="text-center flex flex-col gap-0.5">
          <h2 className="text-3xl font-bold text-gray-800">Portal do Aluno</h2>
          <h3 className="text-gray-600">Crie sua conta</h3>
        </section>

        <form
          action="/"
          method="post"
          className="bg-white/80 shadow-xl rounded-3xl p-4 border border-zinc-300 flex flex-col gap-5"
        >
          <h2 className="text-2xl font-bold text-tertiary text-center">
            Registro
          </h2>

          <section className="flex flex-col gap-2">
            <div className="flex items-center gap-2 px-4 py-2.5 bg-white border border-zinc-400 rounded-xl shadow-sm">
              <Mail className="size-5 text-gray-400" />
              <input
                type="email"
                placeholder="Seu e-mail"
                required
                className="outline-none placeholder:text-gray-400 text-sm"
              />
            </div>

            <div className="flex items-center gap-2 px-4 py-2.5 bg-white border border-zinc-400 rounded-xl shadow-sm">
              <MailCheck className="size-5 text-gray-400" />
              <input
                type="email"
                placeholder="Confirme seu e-mail"
                required
                className="outline-none placeholder:text-gray-400 text-sm"
              />
            </div>
          </section>

          <section className="flex flex-col gap-2">
            <div className="flex items-center gap-2 px-4 py-2.5 bg-white border border-zinc-400 rounded-xl shadow-sm">
              <CircleUserIcon className="size-5 text-gray-400" />
              <input
                type="text"
                placeholder="Seu nome completo"
                required
                className="outline-none placeholder:text-gray-400 text-sm"
              />
            </div>

            <div className="flex items-center gap-2 px-4 py-2.5 bg-white border border-zinc-400 rounded-xl shadow-sm">
              <CalendarDaysIcon className="size-5 text-gray-400" />
              <input
                type="date"
                placeholder="Sua data de nascimento"
                required
                className="outline-none placeholder:text-gray-400 text-sm"
              />
            </div>
          </section>

          <div className="flex items-center gap-2 px-4 py-2.5 bg-white border border-zinc-400 rounded-xl shadow-sm">
            <SmartphoneIcon className="size-5 text-gray-400" />
            <input
              type="text"
              placeholder="Seu número de telefone"
              required
              className="outline-none placeholder:text-gray-400 text-sm"
            />
          </div>

          <section className="flex flex-col gap-1">
            <button
              type="submit"
              className="bg-secondary hover:bg-tertiary transform hover:scale-[1.01] transition-all duration-300 shadow-lg
              flex items-center justify-center gap-1 text-whiteText font-semibold py-4 rounded-2xl"
            >
              Entrar
              <ArrowRight className="size-5" />
            </button>

            <div className="flex items-center gap-2">
              <hr className="w-full border-zinc-400" />
              <span className="font-semibold">ou</span>
              <hr className="w-full border-zinc-400" />
            </div>

            <Link
              to="/portal-do-aluno/login"
              className="bg-white border-2 border-blue-300 text-secondary hover:border-quarter transition-all duration-200
              shadow-xs font-semibold py-4 rounded-2xl hover:shadow-quarter text-center"
            >
              Já possuo uma conta!
            </Link>
          </section>
        </form>
      </div>
    </main>
  );
};

export default PortalDoAlunoRegistro;
