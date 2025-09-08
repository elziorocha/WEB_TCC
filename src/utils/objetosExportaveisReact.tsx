import { Badge } from '@/components/ui/badge';
import type { AlunoMatriculaInterface } from './interfaces.interface';

export const getTurnoBadge = (turno: AlunoMatriculaInterface['turno']) => {
  const variants = {
    matutino: 'default',
    vespertino: 'secondary',
    noturno: 'outline',
    integral: 'destructive',
  } as const;

  const labels = {
    matutino: 'Matutino',
    vespertino: 'Vespertino',
    noturno: 'Noturno',
    integral: 'Integral',
  };

  return <Badge variant={variants[turno]}>{labels[turno]}</Badge>;
};

export const getStatusMatriculaBadge = (
  status_matricula: AlunoMatriculaInterface['status_matricula']
) => {
  if (status_matricula) {
    return <Badge variant="default">Ativo</Badge>;
  } else {
    return <Badge variant="secondary">Inativo</Badge>;
  }
};
