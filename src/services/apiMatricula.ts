import { useEffect, useState } from 'react';
import { getAlunoMatriculas, postAlunoMatriculas } from './api';

export function alunoMatriculasData() {
  const [alunoMatriculas, setAlunoMatriculas] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAlunoMatriculas = async () => {
      try {
        const dadosAlunoMatriculas = await getAlunoMatriculas();
        setAlunoMatriculas(dadosAlunoMatriculas);
      } catch (err: unknown) {
        console.error(err);
        setError('Erro ao carregar dados de matrícula do aluno');
      } finally {
        setLoading(false);
      }
    };

    fetchAlunoMatriculas();
  }, []);

  return { alunoMatriculas, loading, error };
}

export function criarAlunoMatricula() {
  const [alunoNovaMatricula, setAlunoNovaMatricula] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAlunoMatriculas = async () => {
      try {
        const dadosAlunoNovaMatriculas = await postAlunoMatriculas();
        setAlunoNovaMatricula(dadosAlunoNovaMatriculas);
      } catch (err: unknown) {
        console.error(err);
        setError('Erro ao criar dados de matrícula do aluno');
      } finally {
        setLoading(false);
      }
    };

    fetchAlunoMatriculas();
  }, []);

  return { alunoNovaMatricula, loading, error };
}
