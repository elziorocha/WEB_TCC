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
import { PortalDoAlunoDocumentoProcesso } from '@/components/PortalDoAlunoComponents/Modals/PortalDoAlunoDocumentoProcessoModal';
import { CheckIcon, HourglassIcon, TriangleAlertIcon } from 'lucide-react';

export function BadgeCartao({ tipo }: { tipo: TipoCartao | null | undefined }) {
  if (!tipo) {
    return (
      <span className="text-whiteText inline-flex items-center rounded-full border border-red-700 bg-red-500 px-4 py-1 text-sm font-medium">
        Sem Cartão Definido
      </span>
    );
  }

  const badgeStyle: Record<TipoCartao, string> = {
    EDUCARD: 'bg-quarter text-white border-secondary',
    VEM: 'bg-orange-600 text-white border-orange-700',
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

export function getStatusProcessoBadge(alunoProcesso: AlunoProcessoInterface) {
  const documentos = [
    alunoProcesso.formulario_educard,
    alunoProcesso.declaracao_matricula,
    alunoProcesso.comprovante_pagamento,
    alunoProcesso.comprovante_residencia,
    alunoProcesso.rg_frente_ou_verso,
  ];

  const validados = [
    alunoProcesso.formulario_educard_validado,
    alunoProcesso.declaracao_matricula_validado,
    alunoProcesso.comprovante_pagamento_validado,
    alunoProcesso.comprovante_residencia_validado,
    alunoProcesso.rg_frente_ou_verso_validado,
  ];

  const algumEnviado = documentos.some((doc) => doc);
  const todosValidados = validados.every((v) => v);

  if (alunoProcesso.liberado && todosValidados) {
    return (
      <Badge className="bg-green-500/20 px-2 py-1 font-semibold text-green-700">
        Aprovado
      </Badge>
    );
  }

  if (!alunoProcesso.liberado && algumEnviado) {
    return (
      <Badge className="bg-yellow-500/20 px-2 py-1 font-semibold text-yellow-700">
        Em Análise
      </Badge>
    );
  }

  return (
    <Badge className="bg-red-500/20 px-2 py-1 font-semibold text-red-700">
      Pendente
    </Badge>
  );
}

export function getStatusDocumentoBadge(
  enviado?: boolean | null,
  validado?: boolean | null
) {
  if (!enviado) {
    return (
      <Badge className="bg-red-500/20 px-2 py-1 font-semibold text-red-700">
        Pendente
      </Badge>
    );
  }

  if (enviado && !validado) {
    return (
      <Badge className="bg-yellow-500/20 px-2 py-1 font-semibold text-yellow-700">
        Em Análise
      </Badge>
    );
  }

  if (validado) {
    return (
      <Badge className="bg-green-500/20 px-2 py-1 font-semibold text-green-700">
        Aprovado
      </Badge>
    );
  }

  return (
    <Badge className="bg-gray-300/50 px-2 py-1 font-semibold text-gray-700">
      Indefinido
    </Badge>
  );
}

export function getStatusProcessoBadgeDashboard(
  alunoProcesso: AlunoProcessoInterface
) {
  const documentos = [
    alunoProcesso.formulario_educard,
    alunoProcesso.declaracao_matricula,
    alunoProcesso.comprovante_pagamento,
    alunoProcesso.comprovante_residencia,
    alunoProcesso.rg_frente_ou_verso,
  ];

  const validados = [
    alunoProcesso.formulario_educard_validado,
    alunoProcesso.declaracao_matricula_validado,
    alunoProcesso.comprovante_pagamento_validado,
    alunoProcesso.comprovante_residencia_validado,
    alunoProcesso.rg_frente_ou_verso_validado,
  ];

  const algumEnviado = documentos.some((doc) => doc);
  const todosValidados = validados.every((v) => v);

  if (alunoProcesso.liberado && todosValidados) {
    return (
      <Badge className="text-whiteText rounded-lg bg-gradient-to-r from-emerald-400 to-green-600 px-4 py-2 font-semibold shadow-md">
        <CheckIcon className="size-12" /> Aprovado
      </Badge>
    );
  }

  if (!alunoProcesso.liberado && algumEnviado) {
    return (
      <Badge className="text-blackText rounded-lg bg-gradient-to-r from-yellow-400 to-amber-500 px-4 py-2 font-semibold shadow-md">
        <HourglassIcon className="size-12" /> Em Análise
      </Badge>
    );
  }

  return (
    <Badge className="text-whiteText rounded-lg bg-gradient-to-r from-rose-400 to-red-600 px-4 py-2 font-semibold shadow-md">
      <TriangleAlertIcon className="size-12" /> Pendente
    </Badge>
  );
}

export const colunasAlunoProcessoDataTable = (
  onUpload: (campo: string, arquivo: File) => Promise<void>,
  onUpdate?: (campo: string, arquivoUrl: string | null) => void
): ColumnDef<AlunoProcessoInterface>[] => [
  {
    accessorKey: 'formulario_educard',
    header: 'Formulário Educard',
    cell: ({ row }) => (
      <PortalDoAlunoDocumentoProcesso
        name="formulario_educard"
        label="Formulário Educard"
        status={row.getValue<boolean>('formulario_educard')}
        validado={row.original.formulario_educard_validado}
        arquivoUrl={row.original.formulario_educard_url}
        onUpload={onUpload}
        onUpdate={onUpdate}
      />
    ),
  },
  {
    accessorKey: 'declaracao_matricula',
    header: 'Declaração de Matrícula',
    cell: ({ row }) => (
      <PortalDoAlunoDocumentoProcesso
        name="declaracao_matricula"
        label="Declaração de Matrícula"
        status={row.getValue<boolean>('declaracao_matricula')}
        validado={row.original.declaracao_matricula_validado}
        arquivoUrl={row.original.declaracao_matricula_url}
        onUpload={onUpload}
        onUpdate={onUpdate}
      />
    ),
  },
  {
    accessorKey: 'comprovante_pagamento',
    header: 'Comprovante de Pagamento',
    cell: ({ row }) => (
      <PortalDoAlunoDocumentoProcesso
        name="comprovante_pagamento"
        label="Comprovante de Pagamento"
        status={row.getValue<boolean>('comprovante_pagamento')}
        validado={row.original.comprovante_pagamento_validado}
        arquivoUrl={row.original.comprovante_pagamento_url}
        onUpload={onUpload}
        onUpdate={onUpdate}
      />
    ),
  },
  {
    accessorKey: 'comprovante_residencia',
    header: 'Comprovante de Residência',
    cell: ({ row }) => (
      <PortalDoAlunoDocumentoProcesso
        name="comprovante_residencia"
        label="Comprovante de Residência"
        status={row.getValue<boolean>('comprovante_residencia')}
        validado={row.original.comprovante_residencia_validado}
        arquivoUrl={row.original.comprovante_residencia_url}
        onUpload={onUpload}
        onUpdate={onUpdate}
      />
    ),
  },
  {
    accessorKey: 'rg_frente_ou_verso',
    header: 'RG/CPF',
    cell: ({ row }) => (
      <PortalDoAlunoDocumentoProcesso
        name="rg_frente_ou_verso"
        label="RG/CPF"
        status={row.getValue<boolean>('rg_frente_ou_verso')}
        validado={row.original.rg_frente_ou_verso_validado}
        arquivoUrl={row.original.rg_frente_ou_verso_url}
        onUpload={onUpload}
        onUpdate={onUpdate}
      />
    ),
  },
  {
    accessorKey: 'liberado',
    header: 'Situação Final',
    cell: ({ row }) => getStatusProcessoBadge(row.original),
  },
];
