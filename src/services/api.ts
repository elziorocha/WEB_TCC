import instanciaAPI from './instanciaApi';
import Cookies from 'js-cookie';

export const getAluno = async () => {
  const token = Cookies.get('token');
  if (!token) throw new Error('Usuário não autenticado');

  const response = await instanciaAPI.get('/aluno', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    withCredentials: true,
  });

  return response.data;
};

export const getAlunoDocumentos = async () => {
  const token = Cookies.get('token');
  if (!token) throw new Error('Usuário não autenticado');

  const response = await instanciaAPI.get('/aluno/documento', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    withCredentials: true,
  });

  return response.data;
};
