import { chamadaLogin } from '@/services/AuthApi/chamadaLogin';
import type { AlunoLoginInterface } from '@/utils/interfaces.interface';
import { Mail, Lock, User, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const PortalDoAlunoLogin = () => {
  const [formData, setFormData] = useState<AlunoLoginInterface>({
    email: '',
    senha: '',
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const Login = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      await chamadaLogin(formData, navigate);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="-mb-8 flex items-center justify-center p-6">
      <div className="flex w-full max-w-md flex-col gap-3">
        <section className="flex flex-col items-center gap-2">
          <User className="text-whiteText from-tertiary to-quarter size-14 rounded-2xl bg-gradient-to-bl p-2 shadow-md" />
          <div className="flex flex-col gap-0.5 text-center">
            <h2 className="text-3xl font-bold text-gray-800">
              Portal do Aluno
            </h2>
            <h3 className="text-gray-600">Acesse sua conta para continuar</h3>
          </div>
        </section>

        <form
          method="post"
          onSubmit={Login}
          className="rounded-3xl border border-zinc-300 bg-white/80 p-4 shadow-xl"
        >
          <h2 className="text-tertiary mb-2 text-center text-2xl font-bold">
            Login
          </h2>

          <section className="flex flex-col gap-2">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 rounded-xl border border-zinc-400 bg-white px-4 py-2.5 shadow-sm">
                <Mail className="size-5 text-gray-400" />
                <input
                  autoFocus
                  type="email"
                  autoComplete="email"
                  placeholder="Seu e-mail"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="text-sm outline-none placeholder:text-gray-400"
                />
              </div>

              <div className="flex items-center gap-2 rounded-xl border border-zinc-400 bg-white px-4 py-2.5 shadow-sm">
                <Lock className="size-5 text-gray-400" />
                <input
                  type="password"
                  autoComplete="current-password"
                  placeholder="Sua Senha"
                  required
                  value={formData.senha}
                  onChange={(e) =>
                    setFormData({ ...formData, senha: e.target.value })
                  }
                  className="text-sm outline-none placeholder:text-gray-400"
                />
              </div>
            </div>

            <span className="text-quarter hover:text-tertiary mr-1 cursor-pointer self-end text-sm font-medium">
              Esqueci minha senha
            </span>
          </section>

          <section className="mt-6 flex flex-col gap-1">
            <button
              type="submit"
              disabled={loading}
              className={`bg-secondary text-whiteText flex items-center justify-center gap-1 rounded-2xl py-4 font-semibold shadow-lg transition-all duration-300 ${
                loading
                  ? 'cursor-not-allowed opacity-80'
                  : 'hover:bg-tertiary hover:scale-[1.01]'
              }`}
            >
              {loading ? 'Entrando...' : 'Entrar'}
              {!loading && <ArrowRight className="size-5" />}
            </button>

            <div className="flex items-center gap-2">
              <hr className="w-full border-zinc-400" />
              <span className="font-semibold">ou</span>
              <hr className="w-full border-zinc-400" />
            </div>

            <Link
              to="/portal-do-aluno/registrar"
              className="text-secondary hover:border-quarter hover:shadow-quarter rounded-2xl border-2 border-blue-300 bg-white py-4 text-center font-semibold shadow-xs transition-all duration-200"
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
