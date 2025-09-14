import { useEffect, useState } from 'react';
import { apiError } from './apiError';
import { getAluno } from './api';
import type { AlunoInterface } from '@/utils/interfaces.interface';

export function alunoData() {
  const [aluno, setAluno] = useState<AlunoInterface | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAluno = async () => {
      try {
        const dadosAluno = await getAluno();
        setAluno(dadosAluno);
      } catch (err: unknown) {
        console.error(err);
        apiError('Erro ao carregar dados do aluno');
      } finally {
        setLoading(false);
      }
    };

    fetchAluno();
  }, []);

  return { aluno, loading };
}
