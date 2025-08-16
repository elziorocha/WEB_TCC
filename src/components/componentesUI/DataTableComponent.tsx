import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { mattosLeaoData } from "@/utils/objetosHorariosItinerarios/objetoMattosLeao";
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
            <section className="overflow-x-auto max-h-96">
              <Table className="table-fixed min-w-full">
                <TableHeader className="sticky-header bg-muted">
                  <TableRow className="text-xs">
                    <TableHead className="sticky left-0 top-0 z-10 bg-muted border-r w-[75px] whitespace-normal break-words text-center">
                      Saída Fonte
                    </TableHead>
                    <TableHead className="w-[75px] whitespace-normal break-words text-center">
                      PSF Morro Alto
                    </TableHead>
                    <TableHead className="w-[75px] whitespace-normal break-words text-center">
                      Chegada Fonte
                    </TableHead>
                    <TableHead className="w-[75px] whitespace-normal break-words text-center">
                      Chegada Fonte
                    </TableHead>
                    <TableHead className="w-[75px] whitespace-normal break-words text-center">
                      Chegada Fonte
                    </TableHead>
                    <TableHead className="w-[75px] whitespace-normal break-words text-center">
                      Chegada Fonte
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody className="font-mono">
                  {mattosLeaoData.map((row, index) => (
                    <TableRow key={index}>
                      <TableCell className="sticky left-0 z-10 bg-muted border-r font-medium text-center w-[75px] whitespace-nowrap">
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
