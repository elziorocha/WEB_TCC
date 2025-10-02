import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from './auth';
import { apiError } from '../apiError';
import type { AlunoRegistroInterface } from '@/utils/interfaces.interface';

const formDataRegistro: AlunoRegistroInterface = {
  email: '',
  senha: '',
  nome: '',
  data_nascimento: '',
  telefone: '',
};

export const chamadaRegistro = () => {
  const [formData, setFormData] =
    useState<AlunoRegistroInterface>(formDataRegistro);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const registrarAluno = async (e?: React.FormEvent<HTMLFormElement>) => {
    if (e) e.preventDefault();

    setLoading(true);
    try {
      await register(formData);
      navigate('/portal-do-aluno/dashboard');
    } catch (err) {
      apiError(err, 'Falha ao registrar conta');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return {
    formData,
    setFormData,
    loading,
    registrarAluno,
    handleChange,
  };
};
