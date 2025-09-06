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
import {
  ArrowUpDown,
  Building2Icon,
  ChevronDown,
  MoreHorizontal,
} from 'lucide-react';

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
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { AlunoMatriculaInterface } from '@/utils/interfaces.interface';
import { getAlunoMatriculas } from '@/services/api';

export type Aluno = {
  id: string;
  status: 'ativo' | 'inativo' | 'trancado' | 'formado';
  matricula: string;
  instituicao: string;
  anoLetivo: string;
  inicio: string;
  fim: string;
  curso: string;
  serie: string;
  periodo: 'matutino' | 'vespertino' | 'noturno' | 'integral';
  convenio: string;
};

const data: Aluno[] = [
  {
    id: '1',
    status: 'ativo',
    matricula: '2024001',
    instituicao: 'Universidade Federal do Rio de Janeiro',
    anoLetivo: '2024',
    inicio: '01/03/2024',
    fim: '30/11/2024',
    curso: 'Engenharia de Software',
    serie: '3º Ano',
    periodo: 'matutino',
    convenio: 'PROUNI',
  },
  {
    id: '2',
    status: 'ativo',
    matricula: '2024002',
    instituicao: 'Pontifícia Universidade Católica',
    anoLetivo: '2024',
    inicio: '15/02/2024',
    fim: '15/12/2024',
    curso: 'Medicina',
    serie: '2º Ano',
    periodo: 'integral',
    convenio: 'FIES',
  },
  {
    id: '3',
    status: 'trancado',
    matricula: '2023015',
    instituicao: 'Universidade de São Paulo',
    anoLetivo: '2023',
    inicio: '01/03/2023',
    fim: '30/11/2023',
    curso: 'Direito',
    serie: '4º Ano',
    periodo: 'noturno',
    convenio: 'Bolsa Integral',
  },
  {
    id: '4',
    status: 'formado',
    matricula: '2020045',
    instituicao: 'Instituto Tecnológico de Aeronáutica',
    anoLetivo: '2023',
    inicio: '01/03/2020',
    fim: '30/11/2023',
    curso: 'Engenharia Aeronáutica',
    serie: 'Formado',
    periodo: 'integral',
    convenio: 'Bolsa Parcial',
  },
  {
    id: '5',
    status: 'ativo',
    matricula: '2024010',
    instituicao: 'Universidade Estadual de Campinas',
    anoLetivo: '2024',
    inicio: '10/02/2024',
    fim: '20/12/2024',
    curso: 'Ciência da Computação',
    serie: '1º Ano',
    periodo: 'vespertino',
    convenio: 'PROUNI',
  },
];

const getStatusBadge = (status: Aluno['status']) => {
  const variants = {
    ativo: 'default',
    inativo: 'secondary',
    trancado: 'destructive',
    formado: 'outline',
  } as const;

  const labels = {
    ativo: 'Ativo',
    inativo: 'Inativo',
    trancado: 'Trancado',
    formado: 'Formado',
  };

  return <Badge variant={variants[status]}>{labels[status]}</Badge>;
};

const getPeriodoBadge = (periodo: Aluno['periodo']) => {
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

  return <Badge variant={variants[periodo]}>{labels[periodo]}</Badge>;
};

export const columns: ColumnDef<Aluno>[] = [
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
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => getStatusBadge(row.getValue('status')),
  },
  {
    accessorKey: 'matricula',
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
      <div className="font-medium">{row.getValue('matricula')}</div>
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
    accessorKey: 'anoLetivo',
    header: 'Ano Letivo',
    cell: ({ row }) => (
      <div className="text-center">{row.getValue('anoLetivo')}</div>
    ),
  },
  {
    accessorKey: 'inicio',
    header: 'Início',
    cell: ({ row }) => <div className="text-sm">{row.getValue('inicio')}</div>,
  },
  {
    accessorKey: 'fim',
    header: 'Fim',
    cell: ({ row }) => <div className="text-sm">{row.getValue('fim')}</div>,
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
    accessorKey: 'serie',
    header: 'Série',
    cell: ({ row }) => (
      <div className="text-center">{row.getValue('serie')}</div>
    ),
  },
  {
    accessorKey: 'periodo',
    header: 'Período',
    cell: ({ row }) => getPeriodoBadge(row.getValue('periodo')),
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
    cell: ({ row }) => {
      const aluno = row.original;

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
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(aluno.matricula)}
            >
              Copiar matrícula
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Ver detalhes</DropdownMenuItem>
            <DropdownMenuItem>Editar</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

const AlunoCard = ({
  aluno,
}: {
  aluno: Aluno;
  isSelected: boolean;
  onSelect: (value: boolean) => void;
}) => {
  return (
    <Card className="mb-4 gap-2 border-none py-4 shadow-md">
      <CardHeader className="px-4">
        <CardTitle className="flex items-center justify-between">
          <section className="text-lg font-medium">
            Matrícula: {aluno.matricula}
          </section>

          {getStatusBadge(aluno.status)}
        </CardTitle>
      </CardHeader>

      <CardContent className="px-4">
        <div className="flex flex-col gap-1 text-sm">
          <div className="ml-2 flex items-center gap-2">
            <span className="font-medium">Ano Letivo:</span>
            <p className="text-tertiary font-semibold">{aluno.anoLetivo}</p>
          </div>

          <section className="from-primary/15 to-primary/45 border-primary/40 mt-1 rounded-xl border bg-gradient-to-br px-3 py-2 shadow-md">
            <div className="text-yellowText flex items-center gap-2">
              <Building2Icon className="bg-primary/70 size-6 rounded-md p-1" />
              <span className="font-semibold uppercase">Instituição:</span>
            </div>

            <p className="mt-2">{aluno.instituicao}</p>
          </section>

          <section className="mt-2 flex items-center gap-2">
            <span className="font-medium">Série:</span>
            <p className="text-tertiary font-semibold">{aluno.serie}</p>
          </section>

          <section className="flex items-center gap-1">
            <span className="font-medium">Curso:</span>
            <p>{aluno.curso}</p>
          </section>

          <section className="mt-2 flex justify-between">
            <section className="flex flex-col gap-2">
              <div className="flex items-center gap-1">
                <span className="font-medium">Início:</span>
                <p>{aluno.inicio}</p>
              </div>
              <div className="flex items-center gap-1">
                <span className="font-medium">Fim:</span>
                <p>{aluno.fim}</p>
              </div>
            </section>

            <section className="flex flex-col gap-2">
              <div className="flex items-center gap-1">
                <span className="font-medium">Período:</span>
                <div>{getPeriodoBadge(aluno.periodo)}</div>
              </div>
              <div className="flex items-center gap-1">
                <span className="font-medium">Convênio:</span>
                <p>{aluno.convenio}</p>
              </div>
            </section>
          </section>
        </div>
      </CardContent>
    </Card>
  );
};

export function PortalDoAlunoListagemMatriculas() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({
      inicio: false,
      fim: false,
      anoLetivo: false,
    });
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
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

  const [alunoMatricula, setAlunoMatricula] =
    React.useState<AlunoMatriculaInterface | null>(null);
  const [error, setError] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchAlunoMatricula = async () => {
      try {
        const dadosAlunoMatricula = await getAlunoMatriculas();
        setAlunoMatricula(dadosAlunoMatricula);
      } catch (err: unknown) {
        console.error(err);
        setError('Erro ao carregar dados do aluno');
      } finally {
        setLoading(false);
      }
    };

    fetchAlunoMatricula();
  }, []);

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
                  const columnNames: Record<string, string> = {
                    status: 'Status',
                    matricula: 'Matrícula',
                    instituicao: 'Instituição',
                    anoLetivo: 'Ano Letivo',
                    inicio: 'Início',
                    fim: 'Fim',
                    curso: 'Curso',
                    serie: 'Série',
                    periodo: 'Período',
                    convenio: 'Convênio',
                  };

                  return (
                    <DropdownMenuCheckboxItem
                      key={column.id}
                      className="capitalize"
                      checked={column.getIsVisible()}
                      onCheckedChange={(value) =>
                        column.toggleVisibility(!!value)
                      }
                    >
                      {columnNames[column.id] || column.id}
                    </DropdownMenuCheckboxItem>
                  );
                })}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Desktop Table View */}
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
                  aluno={row.original}
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
