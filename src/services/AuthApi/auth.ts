import type { AlunoLoginInterface } from '@/utils/interfaces.interface';
import instanciaAPI from '../instanciaApi';
import Cookies from 'js-cookie';

export const register = async (userData: any) => {
  const response = await instanciaAPI.post('aluno/registro', userData, {
    withCredentials: true,
  });

  Cookies.set('token', response.data.token, {
    expires: 0.25,
    secure: true,
    sameSite: 'Strict',
  });

  return response.data.aluno;
};

export const login = async (credentials: AlunoLoginInterface) => {
  const response = await instanciaAPI.post('aluno/login', credentials, {
    withCredentials: true,
  });

  Cookies.set('token', response.data.token, {
    expires: 0.25,
    secure: true,
    sameSite: 'Strict',
  });

  return response.data.alunoAuth;
};

export const alunoLogado = (): boolean => {
  const token = Cookies.get('token');
  return !!token;
};

export const logout = async () => {
  try {
    await instanciaAPI.post('aluno/logout');
  } catch (err) {
    console.error('Erro no logout', err);
  } finally {
    Cookies.remove('token');
  }
};
