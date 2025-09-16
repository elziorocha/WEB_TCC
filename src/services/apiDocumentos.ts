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
