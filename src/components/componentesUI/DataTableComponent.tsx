import { Link, useParams } from 'react-router-dom';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  linhasOnibusData,
  linhasOnibusPDF,
} from '@/utils/objetosHorariosItinerarios/objetosHorariosItinerarios';
import { DownloadIcon } from 'lucide-react';

function formatColName(key: string) {
  return key
    .replace(/([A-Z])/g, ' $1')
    .replace(/Fonte/gi, 'Fonte')
    .replace(/^./, (str) => str.toUpperCase())
    .trim()
    .split(' ')
    .join('\n');
}

export default function HorariosDataTable() {
  const { linha } = useParams<{ linha: string }>();
  const data = linha ? linhasOnibusData[linha] : [];

  if (!data || data.length === 0) {
    return (
      <main className="container mx-auto flex min-h-screen flex-col gap-6 px-4 py-16">
        <section className="flex flex-col gap-4 text-center">
          <h1 className="from-tertiary to-quarter bg-gradient-to-r bg-clip-text py-2 text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl">
            Horários de Ônibus
          </h1>
          <p className="text-base text-zinc-600 sm:text-lg">
            Não há dados disponíveis para esta linha.
          </p>
          <Link
            to="/horarios-itinerarios"
            className="bg-tertiary text-whiteText hover:bg-secondary mt-6 cursor-pointer self-center rounded-lg px-8 py-1.5 text-lg font-medium transition-colors"
          >
            Voltar
          </Link>
        </section>
      </main>
    );
  }

  const colunas = Object.keys(data[0]);

  return (
    <main className="container mx-auto flex min-h-screen flex-col gap-8 px-4 py-12">
      <section className="flex flex-col gap-3 text-center">
        <h1 className="from-tertiary to-quarter bg-gradient-to-r bg-clip-text text-4xl font-extrabold tracking-tight text-transparent capitalize sm:text-5xl">
          Linha {linha?.replace('-', ' ')}
        </h1>
        <p className="text-base font-medium text-gray-600 sm:text-lg">
          Confira os horários de partida e chegada atualizados
        </p>
      </section>

      <Card className="gap-0 rounded-3xl border-none bg-white p-0 shadow-xl">
        <CardHeader className="gap-0 pb-0">
          <CardTitle className="text-center text-xl font-bold text-gray-800 sm:text-2xl"></CardTitle>
        </CardHeader>

        <CardContent className="p-0">
          <div className="relative rounded-xl">
            <section className="max-h-[32rem] overflow-x-auto overflow-y-auto rounded-xl border border-zinc-200">
              <Table className="min-w-full border-collapse">
                <TableHeader className="sticky top-0 z-20 bg-gradient-to-r from-zinc-50 to-zinc-100 shadow-md">
                  <TableRow>
                    {colunas.map((col, index) => (
                      <TableHead
                        key={index}
                        className={`${
                          index === 0
                            ? 'sticky left-0 z-30 border-r bg-gradient-to-r from-zinc-50 to-zinc-100 shadow-md'
                            : ''
                        } w-[90px] text-center font-semibold tracking-wide text-gray-700 uppercase`}
                      >
                        <div className="p-1 text-xs whitespace-pre-line">
                          {formatColName(col)}
                        </div>
                      </TableHead>
                    ))}
                  </TableRow>
                </TableHeader>

                <TableBody className="font-mono text-sm">
                  {data.map((row, rowIndex) => (
                    <TableRow
                      key={rowIndex}
                      className="transition-colors odd:bg-white even:bg-zinc-50 hover:bg-blue-50"
                    >
                      {colunas.map((col, colIndex) => (
                        <TableCell
                          key={colIndex}
                          className={`${
                            colIndex === 0
                              ? 'sticky left-0 z-10 border-r bg-gradient-to-r from-zinc-50 to-zinc-100 font-semibold shadow-md'
                              : ''
                          } w-[90px] text-center`}
                        >
                          <span className="text-xs whitespace-nowrap">
                            {row[col] || '-'}
                          </span>
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

      {linha && linhasOnibusPDF[linha] && (
        <section className="flex justify-center">
          <a
            href={linhasOnibusPDF[linha]}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-quarter text-whiteText hover:bg-tertiary inline-flex items-center gap-2 rounded-xl px-5 py-3 font-semibold shadow-lg transition"
          >
            <DownloadIcon />
            <span>Baixar horário em PDF</span>
          </a>
        </section>
      )}

      <section className="flex flex-col gap-4 rounded-2xl border border-zinc-200 bg-gradient-to-br from-white to-zinc-50 p-6 shadow-lg">
        <h3 className="text-center text-lg font-bold text-gray-800 sm:text-xl">
          Informações Importantes
        </h3>
        <div className="space-y-3 text-center text-sm text-gray-600 sm:text-base">
          <p>📍 Os horários podem variar devido às condições de trânsito</p>
          <p>🕐 Chegue ao ponto com pelo menos 5 minutos de antecedência</p>
          <p>
            ☎️ Para mais informações, entre em contato com nossa central de
            atendimento - (42) 3035-3388
          </p>
        </div>
      </section>
    </main>
  );
}
