import { chamadaRegistro } from '@/services/AuthApi/chamadaRegistro';
import {
  ArrowRight,
  CalendarDaysIcon,
  CircleUserIcon,
  Mail,
  SmartphoneIcon,
  UserRoundPlusIcon,
  Lock,
  Eye,
  EyeOff,
  GraduationCapIcon,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export const PortalDoAlunoRegistro = () => {
  const { formData, handleChange, loading, registrarAluno } = chamadaRegistro();
  const [exibirSenha, setExibirSenha] = useState(false);

  const alterarVisibilidadeSenha = () => {
    setExibirSenha(!exibirSenha);
  };

  return (
    <main className="-mb-8 flex items-center justify-center p-6">
      <div className="flex w-full max-w-2xl flex-col gap-3">
        <section className="flex flex-col items-center gap-2">
          <div className="flex flex-col gap-1 text-center">
            <div className="flex items-center gap-3">
              <h2 className="text-3xl font-bold text-gray-800">
                Portal do Aluno
              </h2>
              <GraduationCapIcon className="text-whiteText from-tertiary to-quarter size-12 rounded-2xl bg-gradient-to-bl p-2 shadow-md sm:size-14" />
            </div>
            <h3 className="text-gray-600">Crie sua conta gratuitamente</h3>
          </div>
        </section>

        <form
          onSubmit={registrarAluno}
          className="rounded-3xl border border-zinc-300 bg-white/80 p-4 shadow-xl"
        >
          <div className="text-tertiary mb-4 flex items-center justify-center gap-3">
            <h2 className="text-2xl font-bold">Registro</h2>
            <UserRoundPlusIcon strokeWidth={3} />
          </div>

          <section className="flex flex-col gap-3">
            <div className="flex items-center gap-2 rounded-xl border border-zinc-400 bg-white px-4 py-2.5 shadow-sm">
              <CircleUserIcon className="size-5 text-gray-400" />
              <input
                type="text"
                name="nome"
                placeholder="Seu nome completo"
                required
                value={formData.nome}
                onChange={handleChange}
                className="w-full text-sm outline-none placeholder:text-gray-400"
              />
            </div>

            <div className="flex items-center gap-2 rounded-xl border border-zinc-400 bg-white px-4 py-2.5 shadow-sm">
              <Mail className="size-5 text-gray-400" />
              <input
                type="email"
                name="email"
                autoComplete="email"
                placeholder="Seu e-mail"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full text-sm outline-none placeholder:text-gray-400"
              />
            </div>

            <div className="flex items-center gap-2 rounded-xl border border-zinc-400 bg-white py-2.5 pr-3 pl-4 shadow-sm">
              <Lock className="size-5 text-gray-400" />
              <input
                type={exibirSenha ? 'text' : 'password'}
                name="senha"
                autoComplete="new-password"
                placeholder="Crie uma senha"
                required
                value={formData.senha}
                onChange={handleChange}
                className="w-full text-sm outline-none placeholder:text-gray-400"
              />
              <span
                className="flex cursor-pointer items-center justify-around"
                onClick={alterarVisibilidadeSenha}
              >
                {exibirSenha ? (
                  <EyeOff className="size-5 text-gray-500" />
                ) : (
                  <Eye className="size-5 text-gray-500" />
                )}
              </span>
            </div>

            <hr className="my-3 w-10/12 self-center rounded border-2 border-zinc-300" />

            <div className="flex items-center gap-2 rounded-xl border border-zinc-400 bg-white px-4 py-2.5 shadow-sm">
              <CalendarDaysIcon className="size-5 text-gray-400" />
              <input
                type="date"
                name="data_nascimento"
                required
                min="1925-01-01"
                max="2020-12-31"
                value={formData.data_nascimento}
                onChange={handleChange}
                className="w-full text-sm outline-none placeholder:text-gray-400"
              />
            </div>

            <div className="flex items-center gap-2 rounded-xl border border-zinc-400 bg-white px-4 py-2.5 shadow-sm">
              <SmartphoneIcon className="size-5 text-gray-400" />
              <input
                type="number"
                name="telefone"
                placeholder="Seu número de telefone"
                required
                value={formData.telefone}
                onChange={handleChange}
                className="w-full text-sm outline-none placeholder:text-gray-400"
              />
            </div>
          </section>

          <section className="mt-6 flex flex-col gap-2">
            <button
              type="submit"
              disabled={loading}
              className={`bg-secondary text-whiteText flex cursor-pointer items-center justify-center gap-1 rounded-2xl py-4 font-semibold shadow-lg transition-all duration-300 ${
                loading
                  ? 'cursor-not-allowed opacity-80'
                  : 'hover:bg-tertiary hover:scale-[1.01]'
              }`}
            >
              {loading ? 'Criando conta...' : 'Registrar'}
              {!loading && <ArrowRight className="size-5" />}
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
