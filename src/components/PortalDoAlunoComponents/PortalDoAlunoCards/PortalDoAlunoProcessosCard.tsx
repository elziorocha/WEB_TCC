import type { AlunoProcessoInterface } from '@/utils/interfaces.interface';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import { getStatusProcessoBadge } from '@/utils/objetosExportaveis/objetosExportaveisDataTable';
import { PortalDoAlunoDocumentoProcesso } from '../Modals/PortalDoAlunoDocumentoProcessoModal';

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
        <div className="flex flex-col gap-3 text-xs">
          <PortalDoAlunoDocumentoProcesso
            label="Formulário Educard"
            status={alunoProcesso.formulario_educard}
            arquivoUrl={alunoProcesso.formulario_educard_url}
          />
          <PortalDoAlunoDocumentoProcesso
            label="Declaração de Matrícula"
            status={alunoProcesso.declaracao_matricula}
            arquivoUrl={alunoProcesso.declaracao_matricula_url}
          />
          <PortalDoAlunoDocumentoProcesso
            label="Comprovante de Pagamento"
            status={alunoProcesso.comprovante_pagamento}
            arquivoUrl={alunoProcesso.comprovante_pagamento_url}
          />
          <PortalDoAlunoDocumentoProcesso
            label="Comprovante de Residência"
            status={alunoProcesso.comprovante_residencia}
            arquivoUrl={alunoProcesso.comprovante_residencia_url}
          />
          <PortalDoAlunoDocumentoProcesso
            label="RG/CPF"
            status={alunoProcesso.rg_frente_ou_verso}
            arquivoUrl={alunoProcesso.rg_frente_ou_verso_url}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default PortalDoAlunoProcessosCard;
