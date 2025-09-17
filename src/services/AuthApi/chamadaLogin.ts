import type { AlunoLoginInterface } from '@/utils/interfaces.interface';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from './auth';
import { apiError } from '../apiError';

const formDataLogin: AlunoLoginInterface = { email: '', senha: '' };

export const chamadaLogin = () => {
  const [formData, setFormData] = useState<AlunoLoginInterface>(formDataLogin);

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const loginAluno = async (e?: React.FormEvent<HTMLFormElement>) => {
    if (e) e.preventDefault();
    setLoading(true);

    try {
      await login(formData);
      navigate('/portal-do-aluno/dashboard');
    } catch (err) {
      console.error('Falha no Login', err);
      apiError(err, 'Falha ao fazer login');
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
    loginAluno,
    handleChange,
  };
};
