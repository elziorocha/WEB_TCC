import { useEffect, useState } from 'react';
import { apiError } from '../apiError';
import { getAlunoDocumentos, postAlunoDocumentos } from '../api';
import type { AlunoDocumentoInterface } from '@/utils/interfaces.interface';
import toast from 'react-hot-toast';

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

export function criarAlunoDocumento() {
  const [loading, setLoading] = useState(false);

  const criarDocumento: (
    dados: AlunoDocumentoInterface
  ) => Promise<AlunoDocumentoInterface> = async (documentos) => {
    setLoading(true);
    try {
      const novoDocumento = await postAlunoDocumentos(documentos);
      toast.success('Documento salvo com sucesso!');
      return novoDocumento;
    } catch (err: any) {
      apiError(err, 'Erro ao salvar documento.');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { criarDocumento, loading };
}
