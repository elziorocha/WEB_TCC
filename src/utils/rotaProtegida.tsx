import { Navigate } from 'react-router-dom';
import { alunoLogado } from '@/services/AuthApi/auth';
import type { ReactElement } from 'react';

export function RotaProtegida({ children }: { children: ReactElement }) {
  if (!alunoLogado()) {
    return <Navigate to="/portal-do-aluno/login" replace />;
  }
  return children;
}
