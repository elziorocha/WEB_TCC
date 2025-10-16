import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useAlterarSenha } from '@/services/hooks/useAlterarSenha';
import { Eye, EyeOff, Loader2, Lock } from 'lucide-react';
import { useState } from 'react';

export const PortalDoAlunoAlterarSenha = () => {
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
    <Card className="w-full max-w-4xl gap-0 overflow-hidden rounded-2xl border-none py-3 shadow-md">
      <CardHeader>
        <CardTitle className="text-tertiary flex items-center gap-2 text-lg font-bold">
          <Lock className="text-tertiary size-5" />
          Trocar Senha
        </CardTitle>
      </CardHeader>

      <hr className="mt-1 mb-2 border border-dashed border-zinc-400" />

      <CardContent className="mt-1">
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
            className="bg-secondary text-whiteText hover:bg-tertiary flex cursor-pointer items-center justify-center gap-2 rounded-lg py-2 font-semibold shadow-md transition-all disabled:opacity-60"
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
  );
};
