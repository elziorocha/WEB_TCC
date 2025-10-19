import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, CreditCard } from 'lucide-react';
import { useAlterarCartao } from '@/services/hooks/useAlterarCartao';
import { useState } from 'react';
import type { TipoCartao } from '@/utils/intarfaces-enum';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';

const tiposCartaoSistema: TipoCartao[] = ['EDUCARD', 'VEM'];

export const PortalDoAlunoAlterarCartao = () => {
  const { tipoCartao, handleChange, alterarTipoCartaoAluno, loading } =
    useAlterarCartao();

  const [confirmado, setConfirmado] = useState(false);

  return (
    <Card className="w-full max-w-4xl gap-0 overflow-hidden rounded-2xl border-none py-3 shadow-md">
      <CardHeader>
        <CardTitle className="text-tertiary flex items-center gap-2 text-lg font-bold">
          <CreditCard className="text-tertiary size-5" />
          Alterar Tipo de Cartão
        </CardTitle>
      </CardHeader>

      <hr className="mt-1 mb-2 border border-dashed border-zinc-400" />

      <CardContent className="mt-1 flex h-full flex-col justify-between">
        <p className="text-sm text-gray-700">
          Ao confirmar a troca, os documentos vinculados ao cartão atual serão
          expirados!
          <br />
          Devendo:
          <br />
          • Ser cadastrados novos documentos.
          <br />
          • Os mesmos devem ser solicitados novamente pela instituição de
          ensino.
          <br />• Fazer um agendamento para protocolar os mesmos à empresa e
          entregar o cartão antigo.
        </p>

        <form
          onSubmit={alterarTipoCartaoAluno}
          className="flex flex-col justify-between gap-1"
        >
          <section className="mb-2 flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex w-full items-center gap-2">
              <Checkbox
                checked={confirmado}
                onCheckedChange={(checked) => setConfirmado(!!checked)}
                className="size-5"
              />
              <span className="text-sm text-gray-700">
                Estou ciente de todo o processo e confirmo a troca!
              </span>
            </div>

            <div className="flex w-full flex-col">
              <label className="text-sm font-semibold text-gray-700">
                Tipo de Cartão
              </label>
              <Select
                value={tipoCartao || ''}
                onValueChange={(value) =>
                  handleChange({
                    target: { name: 'tipoCartao', value },
                  } as any)
                }
                required
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Selecione o tipo de cartão" />
                </SelectTrigger>
                <SelectContent className="border-none shadow-xl">
                  {tiposCartaoSistema.map((tipo) => (
                    <SelectItem key={tipo} value={tipo}>
                      {tipo}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </section>

          <button
            type="submit"
            disabled={loading || !confirmado}
            className="bg-secondary text-whiteText hover:bg-tertiary flex cursor-pointer items-center justify-center gap-2 rounded-lg py-2 font-semibold shadow-md transition-all disabled:opacity-60"
          >
            {loading ? (
              <>
                <Loader2 className="size-5 animate-spin" />
                Salvando...
              </>
            ) : (
              'Alterar Cartão'
            )}
          </button>
        </form>
      </CardContent>
    </Card>
  );
};
