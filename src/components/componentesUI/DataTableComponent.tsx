import { useParams } from 'react-router-dom';
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
import { linhasOnibusData } from '@/utils/objetosHorariosItinerarios/objetosHorariosItinerarios';

function formatColName(key: string) {
  // Converte psfMorroAlto → PSF Morro Alto
  return key
    .replace(/([A-Z])/g, ' $1')
    .replace(/Fonte/gi, 'Fonte')
    .replace(/^./, (str) => str.toUpperCase());
}

export default function HorariosDataTable() {
  const { linha } = useParams<{ linha: string }>();
  const data = linha ? linhasOnibusData[linha] : [];

  if (!data || data.length === 0) {
    return (
      <main className="container mx-auto px-4 py-10">
        <p>Não há dados disponíveis para esta linha.</p>
      </main>
    );
  }

  // Pega todas as chaves da primeira viagem
  const colunas = Object.keys(data[0]);

  return (
    <main className="container mx-auto px-4 py-10">
      <Card>
        <CardHeader>
          <CardTitle>Horários da linha {linha?.replace('-', ' ')}</CardTitle>
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
                    {colunas.map((col, index) => (
                      <TableHead
                        key={index}
                        className={`${
                          index === 0
                            ? 'bg-muted sticky left-0 z-10 border-r'
                            : ''
                        } w-[90px] text-center break-words whitespace-normal`}
                      >
                        {formatColName(col)}
                      </TableHead>
                    ))}
                  </TableRow>
                </TableHeader>
                <TableBody className="font-mono">
                  {data.map((row, rowIndex) => (
                    <TableRow key={rowIndex}>
                      {colunas.map((col, colIndex) => (
                        <TableCell
                          key={colIndex}
                          className={`${
                            colIndex === 0
                              ? 'bg-muted sticky left-0 z-10 border-r font-medium'
                              : ''
                          } w-[90px] text-center whitespace-nowrap`}
                        >
                          {row[col] || '-'}
                        </TableCell>
                      ))}
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
