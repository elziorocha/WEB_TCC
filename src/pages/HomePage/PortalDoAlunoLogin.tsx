import { Mail, Lock, User, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const PortalDoAlunoLogin = () => {
  return (
    <main className="flex items-center justify-center p-6 -mb-8">
      <div className="w-full max-w-md flex flex-col gap-3">
        <section className="flex flex-col items-center gap-2">
          <User className="text-whiteText size-14 p-2 bg-gradient-to-bl from-tertiary to-quarter rounded-2xl shadow-md" />
          <div className="text-center flex flex-col gap-0.5">
            <h2 className="text-3xl font-bold text-gray-800">
              Portal do Aluno
            </h2>
            <h3 className="text-gray-600">Acesse sua conta para continuar</h3>
          </div>
        </section>

        <form
          action="/"
          method="post"
          className="bg-white/80 shadow-xl rounded-3xl p-4 border border-zinc-300"
        >
          <h2 className="text-2xl font-bold text-tertiary text-center mb-2">
            Login
          </h2>

          <section className="flex flex-col gap-2">
            <div className="flex flex-col gap-3">
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
                <Lock className="size-5 text-gray-400" />
                <input
                  type="password"
                  placeholder="Sua Senha"
                  required
                  className="outline-none placeholder:text-gray-400 text-sm"
                />
              </div>
            </div>

            <span className="text-quarter hover:text-tertiary font-medium text-sm self-end mr-1 cursor-pointer">
              Esqueci minha senha
            </span>
          </section>

          <section className="flex flex-col gap-1 mt-6">
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
              to="/portal-do-aluno/registrar"
              className="bg-white border-2 border-blue-300 text-secondary hover:border-quarter transition-all duration-200
              shadow-xs font-semibold py-4 rounded-2xl hover:shadow-quarter text-center"
            >
              Ainda não sou cadastrado!
            </Link>
          </section>
        </form>
      </div>
    </main>
  );
};

export default PortalDoAlunoLogin;
