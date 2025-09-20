import { useEffect, useState } from 'react';
import { apiError } from '../apiError';
import { getAlunoProcessos, postAlunoProcessos } from '../api';
import toast from 'react-hot-toast';

export function alunoProcessosData() {
  const [alunoProcessos, setAlunoProcessos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAlunoProcessos = async () => {
      try {
        const dadosAlunoProcessos = await getAlunoProcessos();
        setAlunoProcessos(dadosAlunoProcessos);
      } catch (err: unknown) {
        console.error(err);
        apiError('Erro ao carregar dados de processos do aluno');
      } finally {
        setLoading(false);
      }
    };

    fetchAlunoProcessos();
  }, []);

  return { alunoProcessos, loading };
}

export function criarAlunoProcesso() {
  const [loading, setLoading] = useState(false);

  const criarProcesso = async (formData: FormData) => {
    setLoading(true);

    try {
      await postAlunoProcessos(formData);

      toast.success('Processo criado com sucesso!');
    } catch (err: any) {
      apiError(err, 'Erro ao criar processo.');
    } finally {
      setLoading(false);
    }
  };

  return { criarProcesso, loading };
}
