import { Mail, Lock, User, ArrowRight } from "lucide-react";

const PortalDoAlunoLogin = () => {
  return (
    <main className="bg-gradient-to-br from-tertiary/15 via-tertiary/20 to-tertiary/25 flex items-center justify-center p-4 -mb-8">
      <div className="w-full max-w-md flex flex-col gap-4">
        <section className="flex flex-col items-center gap-2">
          <User className="text-whiteText size-14 p-2 bg-secondary rounded-2xl shadow-md" />
          <div className="text-center flex flex-col gap-1">
            <h2 className="text-3xl font-bold text-gray-800">
              Portal do Aluno
            </h2>
            <h3 className="text-gray-600">Acesse sua conta para continuar</h3>
          </div>
        </section>

        <form
          action="/"
          method="post"
          className="bg-white/80 backdrop-blur-sm shadow-2xl rounded-3xl p-8 border border-white/20"
        >
          <h2 className="text-2xl font-bold text-tertiary text-center">
            Login
          </h2>

          <div className="space-y-6">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="email"
                placeholder="Seu e-mail"
                className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-700 placeholder-gray-400"
                required
              />
            </div>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="password"
                placeholder="Sua senha"
                className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-700 placeholder-gray-400"
                required
              />
            </div>

            <a
              href="#"
              className="text-blue-600 hover:text-blue-700 font-medium text-sm self-end"
            >
              Esqueci minha senha
            </a>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-4 rounded-2xl hover:from-blue-700 hover:to-indigo-700 transform hover:scale-[1.02] transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
            >
              Entrar
              <ArrowRight className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2">
              <hr className="w-full border-zinc-400" />
              <span className="font-semibold">ou</span>
              <hr className="w-full border-zinc-400" />
            </div>

            <button
              type="button"
              className="w-full bg-white border-2 border-blue-200 text-blue-600 font-semibold py-4 rounded-2xl hover:bg-blue-50 hover:border-blue-300 transition-all duration-200 shadow-sm hover:shadow-md"
            >
              Ainda não sou cadastrado!
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default PortalDoAlunoLogin;
