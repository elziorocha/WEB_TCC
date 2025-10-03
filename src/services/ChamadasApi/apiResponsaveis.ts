import { useEffect, useState } from 'react';
import { apiError } from '../apiError';
import type { AlunoResponsavelInterface } from '@/utils/interfaces.interface';
import toast from 'react-hot-toast';
import { getAlunoResponsaveis, postAlunoResponsaveis } from '../api';

export function alunoResponsavelData() {
  const [alunoResponsavel, setAlunoResponsavel] =
    useState<AlunoResponsavelInterface | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAlunoResponsavel = async () => {
      try {
        const dadosAlunoResponsavel = await getAlunoResponsaveis();
        setAlunoResponsavel(dadosAlunoResponsavel);
      } catch (err: unknown) {
        console.error(err);
        apiError('Erro ao carregar dados de responsavel do aluno');
      } finally {
        setLoading(false);
      }
    };

    fetchAlunoResponsavel();
  }, []);

  return { alunoResponsavel, loading };
}

export function criarAlunoResponsavel() {
  const [loading, setLoading] = useState(false);

  const criarResponsavel: (
    dados: AlunoResponsavelInterface
  ) => Promise<AlunoResponsavelInterface> = async (responsaveis) => {
    setLoading(true);
    try {
      const novoResponsavel = await postAlunoResponsaveis(responsaveis);
      toast.success('Responsavel salvo com sucesso!');
      return novoResponsavel;
    } catch (err: any) {
      apiError(err, 'Erro ao salvar Responsavel.');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { criarResponsavel, loading };
}
