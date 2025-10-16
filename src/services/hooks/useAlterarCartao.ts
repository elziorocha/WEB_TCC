import { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { alterarCartao } from '../api';
import { apiError } from '../apiError';

export const useAlterarCartao = () => {
  const [tipoCartao, setTipoCartao] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setTipoCartao(e.target.value);
  };

  const alterarTipoCartaoAluno = async (
    e?: React.FormEvent<HTMLFormElement>
  ) => {
    if (e) e.preventDefault();
    if (!tipoCartao) {
      toast.error('Informe o tipo de cartão.');
      return;
    }

    setLoading(true);
    try {
      const response = await alterarCartao(tipoCartao);
      toast.success(
        response?.message || 'Tipo de cartão atualizado com sucesso!'
      );

      navigate('/portal-do-aluno/dashboard');
    } catch (err) {
      apiError(err, 'Falha ao alterar tipo de cartão.');
    } finally {
      setLoading(false);
    }
  };

  return {
    tipoCartao,
    handleChange,
    alterarTipoCartaoAluno,
    loading,
  };
};
