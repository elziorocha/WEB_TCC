import { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { logout } from '../AuthApi/auth';
import type {
  AlterarSenhaBody,
  AlterarSenhaForm,
} from '@/utils/interfaces.interface';
import { alterarSenha } from '../api';
import { apiError } from '../apiError';

const formDataInicial: AlterarSenhaForm = {
  senhaAntiga: '',
  novaSenha: '',
  confirmarSenha: '',
};

export const useAlterarSenha = () => {
  const [formData, setFormData] = useState<AlterarSenhaForm>(formDataInicial);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const alterarSenhaAluno = async (e?: React.FormEvent<HTMLFormElement>) => {
    if (e) e.preventDefault();

    if (formData.novaSenha !== formData.confirmarSenha) {
      toast.error('As senhas não coincidem.');
      return;
    }

    setLoading(true);
    try {
      const body: AlterarSenhaBody = {
        senhaAntiga: formData.senhaAntiga,
        novaSenha: formData.novaSenha,
      };

      const response = await alterarSenha(body);
      toast.success(response?.message || 'Senha alterada com sucesso!');

      await logout();
      toast('Faça login novamente com sua nova senha.', { icon: '🔁' });
      navigate('/portal-do-aluno/login');

      setFormData(formDataInicial);
    } catch (err) {
      apiError(err, 'Falha ao alterar senha.');
    } finally {
      setLoading(false);
    }
  };

  return {
    formData,
    setFormData,
    handleChange,
    alterarSenhaAluno,
    loading,
  };
};
