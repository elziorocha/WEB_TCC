import type { ColumnDef } from '@tanstack/react-table';
import type { TipoCartao } from '../intarfaces-enum';
import type {
  AlunoMatriculaInterface,
  AlunoProcessoInterface,
} from '../interfaces.interface';
import {
  getStatusMatriculaBadge,
  getTurnoBadge,
} from './objetosExportaveisReact';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Badge } from '@/components/ui/badge';

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

export function getStatusProcessoBadge(valor: string | boolean) {
  if (typeof valor === 'boolean') {
    return valor ? (
      <Badge className="bg-green-500/20 text-green-700">Liberado</Badge>
    ) : (
      <Badge className="bg-red-500/20 text-red-700">Pendente</Badge>
    );
  }

  return valor && valor.trim() !== '' ? (
    <Badge className="bg-green-500/20 text-green-700">Enviado</Badge>
  ) : (
    <Badge className="bg-red-500/20 text-red-700">Faltando</Badge>
  );
}

export const colunasAlunoProcessoDataTable: ColumnDef<AlunoProcessoInterface>[] =
  [
    {
      accessorKey: 'formulario_educard',
      header: 'Formulário Educard',
      cell: ({ row }) =>
        getStatusProcessoBadge(row.getValue('formulario_educard')),
    },
    {
      accessorKey: 'declaracao_matricula',
      header: 'Declaração de Matrícula',
      cell: ({ row }) =>
        getStatusProcessoBadge(row.getValue('declaracao_matricula')),
    },
    {
      accessorKey: 'comprovante_pagamento',
      header: 'Comprovante de Pagamento',
      cell: ({ row }) =>
        getStatusProcessoBadge(row.getValue('comprovante_pagamento')),
    },
    {
      accessorKey: 'comprovante_residência',
      header: 'Comprovante de Residência',
      cell: ({ row }) =>
        getStatusProcessoBadge(row.getValue('comprovante_residência')),
    },
    {
      accessorKey: 'rf_frente_ou_verso',
      header: 'RG/CPF',
      cell: ({ row }) =>
        getStatusProcessoBadge(row.getValue('rf_frente_ou_verso')),
    },
    {
      accessorKey: 'liberado',
      header: 'Situação Final',
      cell: ({ row }) => getStatusProcessoBadge(row.getValue('liberado')),
    },
  ];
