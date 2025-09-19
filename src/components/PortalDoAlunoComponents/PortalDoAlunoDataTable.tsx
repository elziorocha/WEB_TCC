import * as React from 'react';
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import type { DataTableInterface } from '@/utils/interfaces.interface';

export function DataTable<TData, TValue>({
  columns,
  data,
  mensagemDadosVazios,
  renderizarMobile,
}: DataTableInterface<TData, TValue>) {
  const dataTable = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <main className="w-full space-y-4">
      <div className="hidden overflow-hidden rounded-2xl border-2 border-zinc-300 shadow-lg md:block">
        <Table className="bg-white">
          <TableHeader>
            {dataTable.getHeaderGroups().map((headerGroup) => (
              <TableRow
                key={headerGroup.id}
                className="h-12 border-b border-dashed border-zinc-400"
              >
                {headerGroup.headers.map((header) => (
                  <TableHead
                    key={header.id}
                    className="text-tertiary px-8 text-center font-semibold whitespace-nowrap"
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {dataTable.getRowModel().rows?.length ? (
              dataTable.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && 'selected'}
                  className="hover:from-primary/15 hover:to-primary/20 border-b border-zinc-400 transition-colors hover:bg-gradient-to-br"
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell
                      key={cell.id}
                      className="px-8 py-4 text-center whitespace-nowrap"
                    >
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
                  className="text-muted-foreground py-8 text-center text-lg font-semibold"
                >
                  {mensagemDadosVazios ?? 'Nenhum registro encontrado.'}
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <div className="md:hidden">
        {dataTable.getRowModel().rows?.length ? (
          dataTable
            .getRowModel()
            .rows.map((row) => (
              <React.Fragment key={row.id}>
                {renderizarMobile ? (
                  renderizarMobile(row.original)
                ) : (
                  <div className="rounded-lg border p-4 shadow-md">
                    {JSON.stringify(row.original)}
                  </div>
                )}
              </React.Fragment>
            ))
        ) : (
          <p className="text-muted-foreground py-8 text-center text-lg font-semibold">
            {mensagemDadosVazios ?? 'Nenhum registro encontrado.'}
          </p>
        )}
      </div>
    </main>
  );
}
