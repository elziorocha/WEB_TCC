import {
  ArrowRight,
  CalendarDaysIcon,
  CircleUserIcon,
  Mail,
  MailCheck,
  SmartphoneIcon,
  UserRoundPlusIcon,
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const PortalDoAlunoRegistro = () => {
  return (
    <main className="-mb-8 flex items-center justify-center p-6">
      <div className="flex w-full max-w-md flex-col gap-3">
        <section className="flex flex-col items-center gap-2">
          <h2 className="text-3xl font-bold text-gray-800">Portal do Aluno</h2>
          <h3 className="text-gray-600">Crie sua conta</h3>
        </section>

        <form
          action="/"
          method="post"
          className="flex flex-col gap-5 rounded-3xl border border-zinc-300 bg-white/80 p-4 shadow-xl"
        >
          <div className="text-tertiary flex items-center justify-center gap-3">
            <h2 className="text-2xl font-bold">Registro</h2>
            <UserRoundPlusIcon strokeWidth={3} />
          </div>

          <section className="flex flex-col gap-2">
            <div className="flex items-center gap-2 rounded-xl border border-zinc-400 bg-white px-4 py-2.5 shadow-sm">
              <Mail className="size-5 text-gray-400" />
              <input
                type="email"
                placeholder="Seu e-mail"
                required
                className="text-sm outline-none placeholder:text-gray-400"
              />
            </div>

            <div className="flex items-center gap-2 rounded-xl border border-zinc-400 bg-white px-4 py-2.5 shadow-sm">
              <MailCheck className="size-5 text-gray-400" />
              <input
                type="email"
                placeholder="Confirme seu e-mail"
                required
                className="text-sm outline-none placeholder:text-gray-400"
              />
            </div>
          </section>

          <section className="flex flex-col gap-2">
            <div className="flex items-center gap-2 rounded-xl border border-zinc-400 bg-white px-4 py-2.5 shadow-sm">
              <CircleUserIcon className="size-5 text-gray-400" />
              <input
                type="text"
                placeholder="Seu nome completo"
                required
                className="text-sm outline-none placeholder:text-gray-400"
              />
            </div>

            <div className="flex items-center gap-2 rounded-xl border border-zinc-400 bg-white px-4 py-2.5 shadow-sm">
              <CalendarDaysIcon className="size-5 text-gray-400" />
              <input
                type="date"
                placeholder="Sua data de nascimento"
                required
                className="text-sm outline-none placeholder:text-gray-400"
              />
            </div>
          </section>

          <div className="flex items-center gap-2 rounded-xl border border-zinc-400 bg-white px-4 py-2.5 shadow-sm">
            <SmartphoneIcon className="size-5 text-gray-400" />
            <input
              type="text"
              placeholder="Seu número de telefone"
              required
              className="text-sm outline-none placeholder:text-gray-400"
            />
          </div>

          <section className="flex flex-col gap-2">
            <button
              type="submit"
              className="bg-secondary hover:bg-tertiary text-whiteText flex transform cursor-pointer items-center justify-center gap-1 rounded-2xl py-4 font-semibold shadow-lg transition-all duration-300 hover:scale-[1.01]"
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
              className="text-secondary hover:border-quarter hover:shadow-quarter rounded-2xl border-2 border-blue-300 bg-white py-4 text-center font-semibold shadow-xs transition-all duration-200"
            >
              Já possuo uma conta!
            </Link>
          </section>
        </form>
      </div>
    </main>
  );
};
