import toast from 'react-hot-toast';
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

  const registrarAluno = async (event?: React.FormEvent<HTMLFormElement>) => {
    if (event) event.preventDefault();
    setLoading(true);

    try {
      await register(formData);

      toast.success(
        'E-mail de verificação enviado! Verifique sua caixa de entrada.'
      );

      navigate('/portal-do-aluno/verificar-email', {
        state: { email: formData.email },
      });
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
