import type { AlunoProcessoInterface } from '@/utils/interfaces.interface';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import { getStatusProcessoBadge } from '@/utils/objetosExportaveis/objetosExportaveisDataTable';
import { PortalDoAlunoDocumentoProcesso } from '../Modals/PortalDoAlunoDocumentoProcessoModal';
import toast from 'react-hot-toast';
import { uploadAlunoProcessos } from '@/services/api';
import { apiError } from '@/services/apiError';

export const PortalDoAlunoProcessosCard = ({
  alunoProcesso,
  onUpdate,
}: {
  alunoProcesso: AlunoProcessoInterface;
  onUpdate?: (name: string, arquivoUrl: string | null) => void;
}) => {
  const handleUpload = async (campo: string, arquivo: File) => {
    try {
      const formData = new FormData();
      formData.append(campo, arquivo);
      await uploadAlunoProcessos(formData);

      const novoUrl = URL.createObjectURL(arquivo);
      onUpdate?.(campo, novoUrl);

      toast.success(`${campo.replaceAll('_', ' ')} enviado com sucesso!`);
    } catch (error) {
      apiError(error, 'Erro ao enviar o arquivo.');
    }
  };

  return (
    <Card className="mb-6 gap-2 overflow-hidden rounded-2xl border-none pt-4 pb-0 shadow-md">
      <CardHeader className="px-4">
        <CardTitle className="flex items-center justify-between">
          <span className="text-lg font-semibold">Processo Digital</span>
          {getStatusProcessoBadge(alunoProcesso)}
        </CardTitle>
      </CardHeader>

      <hr className="border-dashed border-zinc-300" />

      <CardContent className="px-4 pt-3 pb-5">
        <div className="flex flex-col gap-3 text-xs">
          {[
            {
              name: 'formulario_educard',
              label: 'Formulário Educard',
              status: alunoProcesso.formulario_educard,
              validado: alunoProcesso.formulario_educard_validado,
              url: alunoProcesso.formulario_educard_url,
            },
            {
              name: 'declaracao_matricula',
              label: 'Declaração de Matrícula',
              status: alunoProcesso.declaracao_matricula,
              validado: alunoProcesso.declaracao_matricula_validado,
              url: alunoProcesso.declaracao_matricula_url,
            },
            {
              name: 'comprovante_pagamento',
              label: 'Comprovante de Pagamento',
              status: alunoProcesso.comprovante_pagamento,
              validado: alunoProcesso.comprovante_pagamento_validado,
              url: alunoProcesso.comprovante_pagamento_url,
            },
            {
              name: 'comprovante_residencia',
              label: 'Comprovante de Residência',
              status: alunoProcesso.comprovante_residencia,
              validado: alunoProcesso.comprovante_residencia_validado,
              url: alunoProcesso.comprovante_residencia_url,
            },
            {
              name: 'rg_frente_ou_verso',
              label: 'RG Frente e Verso',
              status: alunoProcesso.rg_frente_ou_verso,
              validado: alunoProcesso.rg_frente_ou_verso_validado,
              url: alunoProcesso.rg_frente_ou_verso_url,
            },
          ].map((doc) => (
            <PortalDoAlunoDocumentoProcesso
              key={doc.name}
              name={doc.name}
              label={doc.label}
              status={doc.status}
              validado={doc.validado}
              arquivoUrl={doc.url}
              onUpload={(name, file) => handleUpload(name, file)}
              onUpdate={onUpdate}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
