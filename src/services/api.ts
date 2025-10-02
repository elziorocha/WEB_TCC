import type {
  AlunoDocumentoInterface,
  AlunoMatriculaInterface,
} from '@/utils/interfaces.interface';
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

export const postAlunoDocumentos = async (
  documentos: AlunoDocumentoInterface
) => {
  const token = Cookies.get('token');
  if (!token) throw new Error('Usuário não autenticado');

  const response = await instanciaAPI.post('/aluno/documento', documentos, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    withCredentials: true,
  });

  return response.data;
};

export const getAlunoMatriculas = async () => {
  const token = Cookies.get('token');
  if (!token) throw new Error('Usuário não autenticado');

  const response = await instanciaAPI.get('/aluno/matricula', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    withCredentials: true,
  });

  return response.data;
};

export const postAlunoMatriculas = async (
  matricula: AlunoMatriculaInterface
) => {
  const token = Cookies.get('token');
  if (!token) throw new Error('Usuário não autenticado');

  const response = await instanciaAPI.post('/aluno/matricula', matricula, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    withCredentials: true,
  });

  return response.data;
};

export const getAlunoProcessos = async () => {
  const token = Cookies.get('token');
  if (!token) throw new Error('Usuário não autenticado');

  const response = await instanciaAPI.get('/aluno/processo', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    withCredentials: true,
  });

  return response.data;
};

export const postAlunoProcessos = async (formData: FormData) => {
  const token = Cookies.get('token');
  if (!token) throw new Error('Usuário não autenticado');

  const response = await instanciaAPI.post('/aluno/processo', formData, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'multipart/form-data',
    },
    withCredentials: true,
  });

  return response.data;
};
