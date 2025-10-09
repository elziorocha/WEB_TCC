import { useState, useEffect } from 'react';
import { getAlunoProcessos } from '@/services/api';
import type { AlunoProcessoInterface } from '@/utils/interfaces.interface';
import { apiError } from '../apiError';

export const useProcessos = () => {
  const [processos, setProcessos] = useState<AlunoProcessoInterface[]>([]);
  const [loading, setLoading] = useState(true);
  const [versao, setVersao] = useState(0);

  const carregarProcessos = async () => {
    try {
      setLoading(true);
      const data = await getAlunoProcessos();
      setProcessos(data);
      setVersao((prev) => prev + 1);
    } catch (error) {
      apiError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    carregarProcessos();
  }, []);

  const atualizarProcesso = (
    nomeCampo: string,
    novoStatus: boolean,
    novaUrl: string | null
  ) => {
    setProcessos((prev) =>
      prev.map((processo) => ({
        ...processo,
        [nomeCampo]: novoStatus,
        [`${nomeCampo}_url`]: novaUrl,
      }))
    );
    setVersao((prev) => prev + 1);
  };

  return {
    processos,
    loading,
    carregarProcessos,
    atualizarProcesso,
    versao,
  };
};
