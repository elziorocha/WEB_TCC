import { useEffect, useState } from 'react';
import { apiError } from '../apiError';
import { getAlunoProcessos } from '../api';

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
