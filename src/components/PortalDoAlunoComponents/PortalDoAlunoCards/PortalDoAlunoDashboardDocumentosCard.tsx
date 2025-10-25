import { useProcessos } from '@/services/hooks/useProcessos';
import type { alunoProps } from '@/utils/interfaces.interface';
import { getStatusDocumentoBadge } from '@/utils/objetosExportaveis/objetosExportaveisDataTable';
import { IdCardIcon } from 'lucide-react';
import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card';
import TelaCarregando from '@/components/componentesUI/TelaCarregando';

export const PortalDoAlunoDashboardDocumentosCard = ({ aluno }: alunoProps) => {
  const { processos, loading } = useProcessos();

  if (loading) {
    return <TelaCarregando />;
  }

  const alunoProcesso = processos?.find(
    (processo) => processo.aluno_id === aluno?.id
  );

  if (!alunoProcesso) {
    return (
      <Card className="rounded-2xl border-none md:min-w-2xl xl:min-w-0 2xl:min-w-lg">
        <CardContent className="flex items-center gap-3 py-6">
          <IdCardIcon className="size-8 text-amber-500" />
          <p className="text-muted-foreground text-base font-medium">
            Nenhum processo encontrado!
          </p>
        </CardContent>
      </Card>
    );
  }

  const documentos = [
    {
      nome: 'Formulário Educard',
      enviado: alunoProcesso.formulario_educard_url,
      validado: alunoProcesso.formulario_educard_validado,
    },
    {
      nome: 'Declaração de Matrícula',
      enviado: alunoProcesso.declaracao_matricula_url,
      validado: alunoProcesso.declaracao_matricula_validado,
    },
    {
      nome: 'Comprovante de Pagamento',
      enviado: alunoProcesso.comprovante_pagamento_url,
      validado: alunoProcesso.comprovante_pagamento_validado,
    },
    {
      nome: 'Comprovante de Residência',
      enviado: alunoProcesso.comprovante_residencia_url,
      validado: alunoProcesso.comprovante_residencia_validado,
    },
    {
      nome: 'RG Frente/Verso',
      enviado: alunoProcesso.rg_frente_ou_verso_url,
      validado: alunoProcesso.rg_frente_ou_verso_validado,
    },
  ];

  const documentosPendentesOuAnalise = documentos.filter(
    (doc) => !doc.enviado || !doc.validado
  );

  return (
    <Card className="w-full max-w-3xl gap-0 overflow-hidden rounded-2xl border-none py-3 shadow-md">
      <CardHeader className="px-4">
        <CardTitle className="flex items-center gap-2">
          <IdCardIcon className="text-secondary size-6" />
          <span className="text-tertiary text-lg font-semibold">
            Documentos Pendentes / Em Análise
          </span>
        </CardTitle>
      </CardHeader>

      <hr className="border-dashed border-zinc-300" />

      <CardContent className="min-h-42 px-4 pt-4 pb-5">
        {documentosPendentesOuAnalise.length === 0 ? (
          <p className="text-tertiary font-semibold">
            Todos os documentos foram aprovados
          </p>
        ) : (
          <div className="flex flex-wrap gap-3">
            {documentosPendentesOuAnalise.map((doc, index) => (
              <div
                key={index}
                className="border-secondary/30 bg-secondary/5 flex items-center justify-between rounded-xl border px-3 py-2 shadow-sm"
              >
                <span className="text-tertiary font-medium">{doc.nome}</span>
                <span className="ml-2">
                  {getStatusDocumentoBadge(!!doc.enviado, doc.validado)}
                </span>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};
