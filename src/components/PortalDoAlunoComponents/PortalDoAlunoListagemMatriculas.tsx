import * as React from 'react';
import {
  type ColumnDef,
  type ColumnFiltersState,
  type SortingState,
  type VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { ArrowUpDown, ChevronDown, MoreHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Card, CardContent } from '@/components/ui/card';
import type { AlunoMatriculaInterface } from '@/utils/interfaces.interface';
import { getAlunoMatriculas } from '@/services/api';
import { colunasMatricula } from '@/utils/objetosExportaveis';
import PortalDoAlunoMatriculasCard from './PortalDoAlunoMatriculasCard';
import {
  getStatusMatriculaBadge,
  getTurnoBadge,
} from '@/utils/objetosExportaveisReact';

export const columns: ColumnDef<AlunoMatriculaInterface>[] = [
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
    cell: ({ row }) => <div className="font-medium">{row.getValue('id')}</div>,
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
      <div className="max-w-[120px] truncate" title={row.getValue('convenio')}>
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

export function PortalDoAlunoListagemMatriculas() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({
      data_inicio: false,
      data_fim: false,
      ano_letivo: false,
    });
  const [rowSelection, setRowSelection] = React.useState({});

  const [alunoMatriculas, setAlunoMatriculas] = React.useState<
    AlunoMatriculaInterface[]
  >([]);
  const [error, setError] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchAlunoMatriculas = async () => {
      try {
        const dadosAlunoMatriculas = await getAlunoMatriculas();
        setAlunoMatriculas(dadosAlunoMatriculas);
      } catch (err: unknown) {
        console.error(err);
        setError('Erro ao carregar dados do aluno');
      } finally {
        setLoading(false);
      }
    };

    fetchAlunoMatriculas();
  }, []);

  const table = useReactTable({
    data: alunoMatriculas,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>Erro: {error}</div>;
  }

  return (
    <main>
      <div className="w-full space-y-4">
        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="ml-auto hidden bg-transparent md:flex"
              >
                Colunas <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {table
                .getAllColumns()
                .filter((column) => column.getCanHide())
                .map((column) => {
                  return (
                    <DropdownMenuCheckboxItem
                      key={column.id}
                      className="capitalize"
                      checked={column.getIsVisible()}
                      onCheckedChange={(value) =>
                        column.toggleVisibility(!!value)
                      }
                    >
                      {colunasMatricula[column.id] || column.id}
                    </DropdownMenuCheckboxItem>
                  );
                })}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Desktop View */}
        <div className="hidden overflow-x-auto rounded-md border md:block">
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableHead key={header.id} className="whitespace-nowrap">
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                      </TableHead>
                    );
                  })}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && 'selected'}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id} className="whitespace-nowrap">
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className="h-24 text-center"
                  >
                    Nenhum resultado encontrado.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>

        <div className="md:hidden">
          {table.getRowModel().rows?.length ? (
            table
              .getRowModel()
              .rows.map((row) => (
                <AlunoCard
                  key={row.id}
                  alunoMatricula={row.original}
                  isSelected={row.getIsSelected()}
                  onSelect={(value) => row.toggleSelected(value)}
                />
              ))
          ) : (
            <Card>
              <CardContent className="flex h-24 items-center justify-center">
                <p className="">Nenhum resultado encontrado.</p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </main>
  );
}

const AlunoCard = ({
  alunoMatricula,
}: {
  alunoMatricula: AlunoMatriculaInterface;
  isSelected: boolean;
  onSelect: (value: boolean) => void;
}) => {
  return <PortalDoAlunoMatriculasCard alunoMatricula={alunoMatricula} />;
};
