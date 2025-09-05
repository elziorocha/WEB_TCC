import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { mattosLeaoData } from '@/utils/objetosHorariosItinerarios/objetoMattosLeao';
// import { Badge } from "@/components/ui/badge";

export default function DataTable() {
  return (
    <main className="container mx-auto px-4 py-10">
      <Card>
        <CardHeader>
          <CardTitle>Horário (onibus.onibusnome)</CardTitle>
          <CardDescription>
            💡 Deslize horizontalmente para ver mais colunas
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="relative">
            <section className="max-h-96 overflow-x-auto">
              <Table className="min-w-full table-fixed">
                <TableHeader className="sticky-header bg-muted">
                  <TableRow className="text-xs">
                    <TableHead className="bg-muted sticky top-0 left-0 z-10 w-[75px] border-r text-center break-words whitespace-normal">
                      Saída Fonte
                    </TableHead>
                    <TableHead className="w-[75px] text-center break-words whitespace-normal">
                      PSF Morro Alto
                    </TableHead>
                    <TableHead className="w-[75px] text-center break-words whitespace-normal">
                      Chegada Fonte
                    </TableHead>
                    <TableHead className="w-[75px] text-center break-words whitespace-normal">
                      Chegada Fonte
                    </TableHead>
                    <TableHead className="w-[75px] text-center break-words whitespace-normal">
                      Chegada Fonte
                    </TableHead>
                    <TableHead className="w-[75px] text-center break-words whitespace-normal">
                      Chegada Fonte
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody className="font-mono">
                  {mattosLeaoData.map((row, index) => (
                    <TableRow key={index}>
                      <TableCell className="bg-muted sticky left-0 z-10 w-[75px] border-r text-center font-medium whitespace-nowrap">
                        {row.saidaFonte}
                      </TableCell>
                      <TableCell className="w-[75px] text-center whitespace-nowrap">
                        {row.psfMorroAlto}
                      </TableCell>
                      <TableCell className="w-[75px] text-center whitespace-nowrap">
                        {row.chegadaFonte}
                      </TableCell>
                      <TableCell className="w-[75px] text-center whitespace-nowrap">
                        {row.chegadaFonte}
                      </TableCell>
                      <TableCell className="w-[75px] text-center whitespace-nowrap">
                        {row.chegadaFonte}
                      </TableCell>
                      <TableCell className="w-[75px] text-center whitespace-nowrap">
                        {row.chegadaFonte}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </section>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
