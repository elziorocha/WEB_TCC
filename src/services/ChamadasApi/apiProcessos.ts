import { useState, useEffect } from 'react';
import { apiError } from '../apiError';
import {
  getAlunoProcessos,
  iniciarAlunoProcesso,
  postAlunoProcessos as postAlunoProcessosAPI,
} from '../api';
import toast from 'react-hot-toast';

export const chamadaAlunoProcessos = () => {
  const [alunoProcessos, setAlunoProcessos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAlunoProcessos = async () => {
      try {
        const dados = await getAlunoProcessos();
        setAlunoProcessos(dados);
      } catch (err) {
        console.error(err);
        apiError(err, 'Erro ao carregar processos do aluno');
      } finally {
        setLoading(false);
      }
    };

    fetchAlunoProcessos();
  }, []);

  return { alunoProcessos, loading };
};

export const chamadaCriarProcesso = () => {
  const [loading, setLoading] = useState(false);

  const criarProcesso = async (formData: FormData) => {
    setLoading(true);
    try {
      const processo = await iniciarAlunoProcesso();

      await postAlunoProcessosAPI(formData);

      if (!processo.existente) {
        toast.success('Processo iniciado e documentos enviados com sucesso!');
      } else {
        toast.success('Documentos atualizados no processo existente!');
      }

      return processo;
    } catch (err: any) {
      console.error(err);
      apiError(err, 'Erro ao criar processo.');
    } finally {
      setLoading(false);
    }
  };

  return { criarProcesso, loading };
};
