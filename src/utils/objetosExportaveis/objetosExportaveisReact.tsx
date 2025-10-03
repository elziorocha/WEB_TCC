import { Badge } from '@/components/ui/badge';
import type { AlunoMatriculaInterface } from '../interfaces.interface';
import { FileText, MapPin, Users, X } from 'lucide-react';
import toast from 'react-hot-toast';
import { useEffect, useRef } from 'react';

export const getTurnoBadge = (turno: AlunoMatriculaInterface['turno']) => {
  switch (turno.toLowerCase()) {
    case 'matutino':
      return <Badge className="bg-primary text-white">Matutino</Badge>;

    case 'vespertino':
      return <Badge className="bg-quarter text-white">Vespertino</Badge>;

    case 'noturno':
      return <Badge className="bg-tertiary text-white">Noturno</Badge>;

    case 'integral':
      return <Badge className="bg-orange-600 text-white">Integral</Badge>;
  }
};

export const getStatusMatriculaBadge = (
  status_matricula: AlunoMatriculaInterface['status_matricula']
) => {
  if (status_matricula) {
    return (
      <Badge
        variant="default"
        className="bg-green-600/70 px-3 py-1 font-semibold shadow-sm"
      >
        Ativo
      </Badge>
    );
  } else {
    return (
      <Badge
        className="bg-red-600/70 px-3 py-1 font-semibold shadow-sm"
        variant="secondary"
      >
        Inativo
      </Badge>
    );
  }
};

export const alunoPerfilCards = (aluno: any) => [
  {
    condicao: aluno?.aluno_documento === null,
    titulo: 'Documentos Pessoais',
    descricao: 'Cadastre seus documentos',
    icon: <FileText className="size-6 text-red-500" />,
  },
  {
    condicao: aluno?.aluno_responsavel === null,
    titulo: 'Responsáveis',
    descricao: 'Adicione seus responsáveis',
    icon: <Users className="size-6 text-red-500" />,
  },
  {
    condicao: aluno?.aluno_endereco === null,
    titulo: 'Endereço',
    descricao: 'Informe seu endereço',
    icon: <MapPin className="size-6 text-red-500" />,
  },
];

export const dispararToastAvisoPerfil = (aluno: any) => {
  const toastDisparado = useRef(false);

  useEffect(() => {
    if (!aluno || toastDisparado.current) return;

    const faltando: string[] = [];
    if (!aluno.aluno_documento) faltando.push('Documentos pessoais');
    if (!aluno.aluno_responsavel) faltando.push('Responsáveis');
    if (!aluno.aluno_endereco) faltando.push('Endereço');

    if (faltando.length > 0) {
      faltando.forEach((item) => {
        toast(
          (t) => (
            <div className="flex w-60 items-center justify-between gap-2">
              <span className="flex flex-col gap-0.5">
                <p className="font-semibold text-red-500">Falta dados de:</p>
                <p>{item}</p>
              </span>
              <button
                className="ml-2 cursor-pointer rounded px-2 py-0.5"
                onClick={() => toast.dismiss(t.id)}
              >
                <X className="size-5 text-red-500" />
              </button>
            </div>
          ),
          { duration: 3000 }
        );
      });
      toastDisparado.current = true;
    }
  }, [aluno]);
};
