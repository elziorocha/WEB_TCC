import * as React from 'react';
import {
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
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
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
import { colunasAlunoMatriculaDataTable } from '@/utils/objetosExportaveisReact';

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
    columns: colunasAlunoMatriculaDataTable,
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
                    colSpan={colunasAlunoMatriculaDataTable.length}
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
