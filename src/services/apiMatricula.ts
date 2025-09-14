import { useEffect, useState } from 'react';
import { getAlunoMatriculas, postAlunoMatriculas } from './api';
import type { AlunoMatriculaInterface } from '@/utils/interfaces.interface';
import toast from 'react-hot-toast';
import { apiError } from './apiError';

export function alunoMatriculasData() {
  const [alunoMatriculas, setAlunoMatriculas] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAlunoMatriculas = async () => {
      try {
        const dadosAlunoMatriculas = await getAlunoMatriculas();
        setAlunoMatriculas(dadosAlunoMatriculas);
      } catch (err: unknown) {
        console.error(err);
        apiError('Erro ao carregar dados de matrícula do aluno');
      } finally {
        setLoading(false);
      }
    };

    fetchAlunoMatriculas();
  }, []);

  return { alunoMatriculas, loading };
}

export function criarAlunoMatricula() {
  const [loading, setLoading] = useState(false);

  const criarMatricula = async (formData: Partial<AlunoMatriculaInterface>) => {
    setLoading(true);

    try {
      const dataToSend: AlunoMatriculaInterface = {
        ...formData,
        ano_letivo: Number(formData.ano_letivo),
        serie_ou_periodo: Number(formData.serie_ou_periodo),
        distancia_instituicao: Number(formData.distancia_instituicao),
        data_inicio: new Date(formData.data_inicio!)
          .toISOString()
          .split('T')[0],
        data_fim: new Date(formData.data_fim!).toISOString().split('T')[0],
        turno: formData.turno!,
        grau_scolaridade: formData.grau_scolaridade!,
        convenio: formData.convenio!,
        cgm: formData.cgm!,
        curso: formData.curso!,
        instituicao: formData.instituicao!,
        status_matricula: formData.status_matricula ?? true,
        id: formData.id ?? 0,
      };

      await postAlunoMatriculas(dataToSend);
      toast.success('Matrícula criada com sucesso!');
    } catch (err: any) {
      apiError(err, 'Erro ao criar matrícula.');
    } finally {
      setLoading(false);
    }
  };

  return { criarMatricula, loading };
}
