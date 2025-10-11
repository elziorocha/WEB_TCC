import { useEffect, useState } from 'react';
import { apiError } from '../apiError';
import type { AlunoInterface } from '@/utils/interfaces.interface';
import { getAluno } from '../api';

export function alunoData() {
  const [aluno, setAluno] = useState<AlunoInterface | null>(null);
  const [loading, setLoading] = useState(true);

  const carregarAluno = async () => {
    try {
      setLoading(true);
      const dadosAluno = await getAluno();
      setAluno(dadosAluno);
      return dadosAluno;
    } catch (err: unknown) {
      console.error(err);
      apiError('Erro ao carregar dados do aluno');
      return null;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    carregarAluno();
  }, []);

  const atualizarAluno = (alunoAtualizado: AlunoInterface) => {
    setAluno(alunoAtualizado);
  };

  return {
    aluno,
    loading,
    carregarAluno,
    atualizarAluno,
  };
}
