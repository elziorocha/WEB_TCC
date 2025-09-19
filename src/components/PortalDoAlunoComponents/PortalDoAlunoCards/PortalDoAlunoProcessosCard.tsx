import type { AlunoProcessoInterface } from '@/utils/interfaces.interface';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import { FileText } from 'lucide-react';
import { getStatusProcessoBadge } from '@/utils/objetosExportaveis/objetosExportaveisDataTable';

export const PortalDoAlunoProcessosCard = ({
  alunoProcesso,
}: {
  alunoProcesso: AlunoProcessoInterface;
}) => {
  return (
    <Card className="mb-6 gap-2 overflow-hidden rounded-2xl border-none pt-4 pb-0 shadow-md">
      <CardHeader className="px-4">
        <CardTitle className="flex items-center justify-between">
          <span className="text-lg font-semibold">Processo</span>
          {getStatusProcessoBadge(alunoProcesso.liberado)}
        </CardTitle>
      </CardHeader>

      <hr className="border-dashed border-zinc-300" />

      <CardContent className="px-4 pt-3 pb-5">
        <div className="flex flex-col gap-3 text-sm">
          <div className="flex items-center justify-between">
            <div className="text-muted-foreground flex items-center gap-2">
              <FileText className="size-4" />
              <span className="font-medium">Formulário Educard:</span>
            </div>
            {getStatusProcessoBadge(alunoProcesso.formulario_educard)}
          </div>

          <div className="flex items-center justify-between">
            <div className="text-muted-foreground flex items-center gap-2">
              <FileText className="size-4" />
              <span className="font-medium">Declaração de Matrícula:</span>
            </div>
            {getStatusProcessoBadge(alunoProcesso.declaracao_matricula)}
          </div>

          <div className="flex items-center justify-between">
            <div className="text-muted-foreground flex items-center gap-2">
              <FileText className="size-4" />
              <span className="font-medium">Comprovante de Pagamento:</span>
            </div>
            {getStatusProcessoBadge(alunoProcesso.comprovante_pagamento)}
          </div>

          <div className="flex items-center justify-between">
            <div className="text-muted-foreground flex items-center gap-2">
              <FileText className="size-4" />
              <span className="font-medium">Comprovante de Residência:</span>
            </div>
            {getStatusProcessoBadge(alunoProcesso.comprovante_residência)}
          </div>

          <div className="flex items-center justify-between">
            <div className="text-muted-foreground flex items-center gap-2">
              <FileText className="size-4" />
              <span className="font-medium">RG/CPF:</span>
            </div>
            {getStatusProcessoBadge(alunoProcesso.rf_frente_ou_verso)}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PortalDoAlunoProcessosCard;
