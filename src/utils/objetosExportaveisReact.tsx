import { Badge } from '@/components/ui/badge';
import type { AlunoMatriculaInterface } from './interfaces.interface';
import type { ColumnDef } from '@tanstack/react-table';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import type { TipoCartao } from './intarfaces-enum';
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

export const colunasAlunoMatriculaDataTable: ColumnDef<AlunoMatriculaInterface>[] =
  [
    {
      accessorKey: 'status_matricula',
      header: 'Status',
      cell: ({ row }) =>
        getStatusMatriculaBadge(row.getValue('status_matricula')),
    },
    {
      accessorKey: 'id',
      header: 'Matrícula',
      cell: ({ row }) => (
        <div className="font-medium">
          {String(row.getValue('ano_letivo')) + String(row.getValue('id'))}
        </div>
      ),
    },
    {
      accessorKey: 'ano_letivo',
      header: 'Ano Letivo',
      cell: ({ row }) => (
        <div className="text-center font-medium">
          {row.getValue('ano_letivo')}
        </div>
      ),
    },
    {
      accessorKey: 'instituicao',
      header: 'Instituição',
      cell: ({ row }) => {
        const instituicao = row.getValue<string>('instituicao') || '';
        const textoFormatadoNaColuna =
          instituicao.length > 30
            ? `${instituicao.slice(0, 25)}...`
            : instituicao;

        return (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="cursor-help font-medium capitalize">
                  {textoFormatadoNaColuna}
                </div>
              </TooltipTrigger>
              {instituicao.length > 25 && (
                <TooltipContent className="shadow-md">
                  <p className="text-yellowText text-base font-medium capitalize">
                    {instituicao}
                  </p>
                </TooltipContent>
              )}
            </Tooltip>
          </TooltipProvider>
        );
      },
    },
    {
      accessorKey: 'curso',
      header: 'Curso',
      cell: ({ row }) => (
        <div className="font-medium" title={row.getValue('curso')}>
          {row.getValue('curso') ?? '-'}
        </div>
      ),
    },
    {
      accessorKey: 'serie_ou_periodo',
      header: 'Série/Período',
      cell: ({ row }) => (
        <div className="text-center font-medium">
          {row.getValue('serie_ou_periodo')}º
        </div>
      ),
    },
    {
      accessorKey: 'data_inicio',
      header: 'Início',
      cell: ({ row }) => (
        <div className="text-sm font-medium">
          {new Date(row.getValue('data_inicio')).toLocaleDateString()}
        </div>
      ),
    },
    {
      accessorKey: 'data_fim',
      header: 'Fim',
      cell: ({ row }) => (
        <div className="text-sm font-medium">
          {new Date(row.getValue('data_fim')).toLocaleDateString()}
        </div>
      ),
    },
    {
      accessorKey: 'turno',
      header: 'Turno',
      cell: ({ row }) => getTurnoBadge(row.getValue('turno')),
    },
    {
      accessorKey: 'convenio',
      header: 'Convênio',
      cell: ({ row }) => (
        <div
          className="max-w-[120px] truncate font-medium"
          title={row.getValue('convenio')}
        >
          {row.getValue('convenio')}
        </div>
      ),
    },
  ];

export function BadgeCartao({ tipo }: { tipo: TipoCartao }) {
  const badgeStyle: Record<TipoCartao, string> = {
    EDUCARD: 'bg-quarter text-white border-quarter',
    VEM: 'bg-orange-600 text-white border-orange-600',
  };

  const style = badgeStyle[tipo] ?? 'bg-gray-100 text-gray-800 border-gray-200';

  return (
    <span
      className={`inline-flex items-center rounded-full border px-4 py-1 text-sm font-medium ${style}`}
    >
      {tipo}
    </span>
  );
}

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
                className="ml-2 rounded px-2 py-0.5"
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
