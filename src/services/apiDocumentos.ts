import { useEffect, useState } from 'react';
import { apiError } from './apiError';
import { getAlunoDocumentos } from './api';
import type { AlunoDocumentoInterface } from '@/utils/interfaces.interface';

export function alunoDocumentoData() {
  const [alunoDocumento, setAlunoDocumento] =
    useState<AlunoDocumentoInterface | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAlunoDocumento = async () => {
      try {
        const dadosAlunoDocumento = await getAlunoDocumentos();
        setAlunoDocumento(dadosAlunoDocumento);
      } catch (err: unknown) {
        console.error(err);
        apiError('Erro ao carregar dados de documentos do aluno');
      } finally {
        setLoading(false);
      }
    };

    fetchAlunoDocumento();
  }, []);

  return { alunoDocumento, loading };
}

export function alunoDocumentoStatus() {
  const [liberado, setLiberado] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const dados = await getAlunoDocumentos();
        setLiberado(dados?.liberado);
      } catch (err: unknown) {
        console.error(err);
        apiError('Erro ao carregar status do aluno');
      } finally {
        setLoading(false);
      }
    };

    fetchStatus();
  }, []);

  return { liberado, loading };
}
