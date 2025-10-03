import { useEffect, useState } from 'react';
import { apiError } from '../apiError';
import { getAlunoEnderecos, postAlunoEnderecos } from '../api';
import type { AlunoEnderecoInterface } from '@/utils/interfaces.interface';
import toast from 'react-hot-toast';

export function alunoEnderecoData() {
  const [alunoEndereco, setAlunoEndereco] =
    useState<AlunoEnderecoInterface | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAlunoEndereco = async () => {
      try {
        const dadosAlunoEndereco = await getAlunoEnderecos();
        setAlunoEndereco(dadosAlunoEndereco);
      } catch (err: unknown) {
        console.error(err);
        apiError('Erro ao carregar dados de enderecos do aluno');
      } finally {
        setLoading(false);
      }
    };

    fetchAlunoEndereco();
  }, []);

  return { alunoEndereco, loading };
}

export function criarAlunoEndereco() {
  const [loading, setLoading] = useState(false);

  const criarEndereco: (
    dados: AlunoEnderecoInterface
  ) => Promise<AlunoEnderecoInterface> = async (enderecos) => {
    setLoading(true);
    try {
      const novoDoc = await postAlunoEnderecos(enderecos);
      toast.success('Endereco salvo com sucesso!');
      return novoDoc;
    } catch (err: any) {
      apiError(err, 'Erro ao salvar endereco.');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { criarEndereco, loading };
}
