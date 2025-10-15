import { useState } from 'react';
import { ArrowLeftIcon, Lock, Loader2, Eye, EyeOff } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useAlterarSenha } from '@/services/hooks/useAlterarSenha';

export const PortalDoAlunoConfiguracoes = () => {
  const { formData, handleChange, alterarSenhaAluno, loading } =
    useAlterarSenha();

  const [exibirSenhas, setExibirSenhas] = useState({
    senhaAntiga: false,
    novaSenha: false,
    confirmarSenha: false,
  });

  const alternarVisibilidade = (campo: keyof typeof exibirSenhas) => {
    setExibirSenhas((prev) => ({ ...prev, [campo]: !prev[campo] }));
  };

  return (
    <main className="flex flex-col gap-4 p-3">
      <Link
        to="/portal-do-aluno/dashboard"
        className="bg-primary text-blackText self-start rounded-lg px-3 py-1.5 text-sm shadow-md"
      >
        <div className="text-yellowText flex items-center gap-1 font-semibold">
          <ArrowLeftIcon className="size-5" />
          <span>Voltar</span>
        </div>
      </Link>

      <Card className="shadow-md">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg font-semibold">
            <Lock className="text-primary size-5" />
            Trocar Senha
          </CardTitle>
        </CardHeader>

        <CardContent>
          <form onSubmit={alterarSenhaAluno} className="flex flex-col gap-3">
            <div className="flex flex-col">
              <label className="text-sm font-semibold text-gray-700">
                Senha atual
              </label>
              <div className="focus-within:border-primary flex items-center rounded-lg border border-gray-300 px-3 py-2">
                <input
                  type={exibirSenhas.senhaAntiga ? 'text' : 'password'}
                  name="senhaAntiga"
                  value={formData.senhaAntiga}
                  onChange={handleChange}
                  required
                  className="w-full focus:outline-none"
                />
                <span
                  className="ml-2 cursor-pointer text-gray-500 hover:text-gray-700"
                  onClick={() => alternarVisibilidade('senhaAntiga')}
                >
                  {exibirSenhas.senhaAntiga ? (
                    <EyeOff className="size-5" />
                  ) : (
                    <Eye className="size-5" />
                  )}
                </span>
              </div>
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-semibold text-gray-700">
                Nova senha
              </label>
              <div className="focus-within:border-primary flex items-center rounded-lg border border-gray-300 px-3 py-2">
                <input
                  type={exibirSenhas.novaSenha ? 'text' : 'password'}
                  name="novaSenha"
                  value={formData.novaSenha}
                  onChange={handleChange}
                  required
                  minLength={6}
                  className="w-full focus:outline-none"
                />
                <span
                  className="ml-2 cursor-pointer text-gray-500 hover:text-gray-700"
                  onClick={() => alternarVisibilidade('novaSenha')}
                >
                  {exibirSenhas.novaSenha ? (
                    <EyeOff className="size-5" />
                  ) : (
                    <Eye className="size-5" />
                  )}
                </span>
              </div>
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-semibold text-gray-700">
                Confirmar nova senha
              </label>
              <div className="focus-within:border-primary flex items-center rounded-lg border border-gray-300 px-3 py-2">
                <input
                  type={exibirSenhas.confirmarSenha ? 'text' : 'password'}
                  name="confirmarSenha"
                  value={formData.confirmarSenha}
                  onChange={handleChange}
                  required
                  minLength={6}
                  className="w-full focus:outline-none"
                />
                <span
                  className="ml-2 cursor-pointer text-gray-500 hover:text-gray-700"
                  onClick={() => alternarVisibilidade('confirmarSenha')}
                >
                  {exibirSenhas.confirmarSenha ? (
                    <EyeOff className="size-5" />
                  ) : (
                    <Eye className="size-5" />
                  )}
                </span>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="bg-primary text-blackText flex items-center justify-center gap-2 rounded-lg py-2 font-semibold shadow-md transition-all hover:brightness-95 disabled:opacity-60"
            >
              {loading ? (
                <>
                  <Loader2 className="size-5 animate-spin" />
                  Salvando...
                </>
              ) : (
                'Alterar Senha'
              )}
            </button>
          </form>
        </CardContent>
      </Card>
    </main>
  );
};
