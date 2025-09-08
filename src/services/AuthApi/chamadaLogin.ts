import { login } from '@/services/AuthApi/auth';
import type { NavigateFunction } from 'react-router-dom';
import { apiError } from '../apiError';
import type { AlunoLoginInterface } from '@/utils/interfaces.interface';

export async function chamadaLogin(
  formData: AlunoLoginInterface,
  navigate: NavigateFunction
) {
  try {
    await login(formData);

    navigate('/portal-do-aluno/dashboard');
  } catch (err) {
    console.error('Falha no Login', err);

    apiError(err, 'Falha ao fazer login');
    throw err;
  }
}
