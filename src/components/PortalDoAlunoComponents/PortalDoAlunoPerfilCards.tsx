import { useState } from 'react';
import {
  alunoPerfilCards,
  dispararToastAvisoPerfil,
} from '@/utils/objetosExportaveis/objetosExportaveisReact';
import { Card, CardContent } from '../ui/card';
import { AlertCircle, IdCard } from 'lucide-react';
import type { AlunoDocumentoInterface } from '@/utils/interfaces.interface';
import { DocumentoModal } from './Modals/PortalDoAlunoDocumentoAlunoModal';

export const PortalDoAlunoPerfilCards = ({ aluno }: any) => {
  const cards = alunoPerfilCards(aluno);

  const [modalDocumentoAberto, setModalDocumentoAberto] = useState(false);

  dispararToastAvisoPerfil(aluno);

  const handleSaveDocumento = (doc: AlunoDocumentoInterface) => {
    console.log('Novo documento salvo:', doc);
  };

  return (
    <main className="flex max-w-5xl flex-col gap-3 sm:w-14/12 sm:self-center">
      {aluno?.aluno_documento && (
        <main>
          <Card className="flex flex-col rounded-2xl border-none px-4 py-3 shadow-sm transition-all hover:bg-zinc-100">
            <CardContent className="flex items-center justify-between p-0">
              <section className="flex gap-2">
                <div className="flex size-12 items-center justify-center self-center rounded-full bg-green-100 shadow-sm">
                  <IdCard className="size-6 text-green-600" />
                </div>
                <section className="flex flex-col gap-0.5">
                  <h2 className="text-base font-semibold text-green-700">
                    Documentos Pessoais
                  </h2>
                  <p className="text-muted-foreground text-xs">
                    RG: {aluno.aluno_documento.rg}
                  </p>
                  <p className="text-muted-foreground text-xs">
                    CPF: {aluno.aluno_documento.cpf}
                  </p>
                  <p className="text-muted-foreground text-xs">
                    Órgão emissor: {aluno.aluno_documento.orgao_emissor}
                  </p>
                </section>
              </section>
            </CardContent>
          </Card>
        </main>
      )}

      {/* Quando está pendente (vem dos cards dinâmicos) */}
      {cards
        .filter((card) => card.condicao)
        .map((card) => (
          <main key={card.titulo}>
            <Card
              className="flex cursor-pointer flex-col rounded-2xl border-none px-4 py-3 shadow-sm transition-all hover:bg-zinc-100"
              onClick={() => {
                if (card.titulo.includes('Documentos')) {
                  setModalDocumentoAberto(true);
                }
              }}
            >
              <CardContent className="flex items-center justify-between p-0">
                <section className="flex gap-2">
                  <div className="flex size-12 items-center justify-center rounded-full bg-red-500/15 shadow-sm">
                    {card.icon}
                  </div>
                  <div className="flex flex-col items-start">
                    <h2 className="text-base font-semibold text-red-500">
                      {card.titulo}
                    </h2>
                    <p className="text-muted-foreground text-xs">
                      {card.descricao}
                    </p>
                  </div>
                </section>
                <AlertCircle className="text-red-500" />
              </CardContent>
            </Card>
          </main>
        ))}

      {/* Modal de documentos */}
      <DocumentoModal
        open={modalDocumentoAberto}
        onClose={() => setModalDocumentoAberto(false)}
        documentoAtual={aluno?.aluno_documento}
        onSave={handleSaveDocumento}
      />
    </main>
  );
};
