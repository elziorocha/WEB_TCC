import { useEffect, useState } from 'react';
import { apiError } from '../apiError';
import type { AlunoInterface } from '@/utils/interfaces.interface';
import { definirAlunoTipoCartao } from '../api';
import toast from 'react-hot-toast';
import type { TipoCartao } from '@/utils/intarfaces-enum';

export function useAlunoTipoCartao(
  aluno: AlunoInterface | null,
  onAlunoUpdate?: (alunoAtualizado: AlunoInterface) => void
) {
  const [tipoCartao, setTipoCartao] = useState<TipoCartao | ''>(
    aluno?.tipo_cartao ?? ''
  );
  const [loadingCartao, setLoadingCartao] = useState(false);

  useEffect(() => {
    if (aluno?.tipo_cartao) {
      setTipoCartao(aluno.tipo_cartao);
    }
  }, [aluno]);

  const salvarTipoCartao = async () => {
    if (tipoCartao !== 'EDUCARD' && tipoCartao !== 'VEM') {
      toast.error('Selecione um tipo de cartão válido.');
      return;
    }

    try {
      setLoadingCartao(true);
      await definirAlunoTipoCartao(tipoCartao);

      if (aluno && onAlunoUpdate) {
        const alunoAtualizado: AlunoInterface = {
          ...aluno,
          tipo_cartao: tipoCartao,
        };
        onAlunoUpdate(alunoAtualizado);
      }

      toast.success('Tipo de cartão atualizado com sucesso!');
    } catch (err) {
      apiError(err, 'Erro ao atualizar tipo do cartão.');
    } finally {
      setLoadingCartao(false);
    }
  };

  return {
    tipoCartao,
    setTipoCartao,
    salvarTipoCartao,
    loadingCartao,
  };
}
