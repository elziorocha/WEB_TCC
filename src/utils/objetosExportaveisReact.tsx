import { Badge } from '@/components/ui/badge';
import type { AlunoMatriculaInterface } from './interfaces.interface';
import type { ColumnDef } from '@tanstack/react-table';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { ArrowUpDown, MoreHorizontal } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

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
      <Badge variant="default" className="bg-green-600/70 px-3 py-1 shadow-sm">
        Ativo
      </Badge>
    );
  } else {
    return (
      <Badge className="bg-red-600/70 px-3 py-1 shadow-sm" variant="secondary">
        Inativo
      </Badge>
    );
  }
};

export const colunasAlunoMatriculaDataTable: ColumnDef<AlunoMatriculaInterface>[] =
  [
    {
      id: 'select',
      header: ({ table }) => (
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && 'indeterminate')
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Selecionar todos"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Selecionar linha"
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: 'status_matricula',
      header: 'Status',
      cell: ({ row }) =>
        getStatusMatriculaBadge(row.getValue('status_matricula')),
    },
    {
      accessorKey: 'id',
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          >
            Matrícula
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
      cell: ({ row }) => (
        <div className="font-medium">{row.getValue('id')}</div>
      ),
    },
    {
      accessorKey: 'instituicao',
      header: 'Instituição',
      cell: ({ row }) => (
        <div
          className="max-w-[200px] truncate"
          title={row.getValue('instituicao')}
        >
          {row.getValue('instituicao')}
        </div>
      ),
    },
    {
      accessorKey: 'ano_letivo',
      header: 'Ano Letivo',
      cell: ({ row }) => (
        <div className="text-center">{row.getValue('ano_letivo')}</div>
      ),
    },
    {
      accessorKey: 'data_inicio',
      header: 'Início',
      cell: ({ row }) => (
        <div className="text-sm">
          {new Date(row.getValue('data_inicio')).toLocaleDateString()}
        </div>
      ),
    },
    {
      accessorKey: 'data_fim',
      header: 'Fim',
      cell: ({ row }) => (
        <div className="text-sm">
          {new Date(row.getValue('data_fim')).toLocaleDateString()}
        </div>
      ),
    },
    {
      accessorKey: 'curso',
      header: 'Curso',
      cell: ({ row }) => (
        <div className="max-w-[150px] truncate" title={row.getValue('curso')}>
          {row.getValue('curso')}
        </div>
      ),
    },
    {
      accessorKey: 'serie_ou_periodo',
      header: 'Série',
      cell: ({ row }) => (
        <div className="text-center">{row.getValue('serie_ou_periodo')}</div>
      ),
    },
    {
      accessorKey: 'turno',
      header: 'Período',
      cell: ({ row }) => getTurnoBadge(row.getValue('turno')),
    },
    {
      accessorKey: 'convenio',
      header: 'Convênio',
      cell: ({ row }) => (
        <div
          className="max-w-[120px] truncate"
          title={row.getValue('convenio')}
        >
          {row.getValue('convenio')}
        </div>
      ),
    },
    {
      id: 'actions',
      enableHiding: false,
      cell: () => {
        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Abrir menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Ações</DropdownMenuLabel>
              <DropdownMenuItem>Copiar matrícula</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Ver detalhes</DropdownMenuItem>
              <DropdownMenuItem>Editar</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    },
  ];
