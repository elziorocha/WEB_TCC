import type { AlunoProcessoInterface } from '@/utils/interfaces.interface';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import { getStatusProcessoBadge } from '@/utils/objetosExportaveis/objetosExportaveisDataTable';
import { PortalDoAlunoDocumentoProcesso } from '../Modals/PortalDoAlunoDocumentoProcessoModal';
import toast from 'react-hot-toast';
import { uploadAlunoProcessos } from '@/services/api';

export const PortalDoAlunoProcessosCard = ({
  alunoProcesso,
}: {
  alunoProcesso: AlunoProcessoInterface;
}) => {
  const handleUpload = async (campo: string, arquivo: File) => {
    try {
      const formData = new FormData();
      formData.append(campo, arquivo);

      console.log('📤 FormData enviado:', campo, arquivo);
      await uploadAlunoProcessos(formData);

      toast.success(`${campo.replaceAll('_', ' ')} enviado com sucesso!`);
    } catch (error) {
      console.error('❌ Erro ao enviar arquivo:', error);
      toast.error('Erro ao enviar o arquivo.');
    }
  };

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
          {[
            {
              name: 'formulario_educard',
              label: 'Formulário Educard',
              status: alunoProcesso.formulario_educard,
              url: alunoProcesso.formulario_educard_url,
            },
            {
              name: 'declaracao_matricula',
              label: 'Declaração de Matrícula',
              status: alunoProcesso.declaracao_matricula,
              url: alunoProcesso.declaracao_matricula_url,
            },
            {
              name: 'comprovante_pagamento',
              label: 'Comprovante de Pagamento',
              status: alunoProcesso.comprovante_pagamento,
              url: alunoProcesso.comprovante_pagamento_url,
            },
            {
              name: 'comprovante_residencia',
              label: 'Comprovante de Residência',
              status: alunoProcesso.comprovante_residencia,
              url: alunoProcesso.comprovante_residencia_url,
            },
            {
              name: 'rg_frente_ou_verso',
              label: 'RG/CPF',
              status: alunoProcesso.rg_frente_ou_verso,
              url: alunoProcesso.rg_frente_ou_verso_url,
            },
          ].map((doc) => (
            <PortalDoAlunoDocumentoProcesso
              key={doc.name}
              name={doc.name}
              label={doc.label}
              status={doc.status}
              arquivoUrl={doc.url}
              onUpload={(name, file) => {
                console.log('onUpload chamado:', name, file);
                return handleUpload(name, file);
              }}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
