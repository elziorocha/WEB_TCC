import { useState } from 'react';
import {
  alunoPerfilCards,
  dispararToastAvisoPerfil,
} from '@/utils/objetosExportaveis/objetosExportaveisReact';
import { Card, CardContent } from '../ui/card';
import { AlertCircle, IdCard, Home, Users } from 'lucide-react';
import { DocumentoModal } from './Modals/PortalDoAlunoDocumentoAlunoModal';
import { EnderecoModal } from './Modals/PortalDoAlunoEnderecoAlunoModal';
import { ResponsavelModal } from './Modals/PortalDoAlunoResponsavelAlunoModal';
import { formatCpf, formatRg } from '@/utils/normalizacao';

export const PortalDoAlunoPerfilCards = ({ aluno }: any) => {
  const [alunoData, setAlunoData] = useState(aluno);
  const cards = alunoPerfilCards(alunoData);

  const [modalDocumentoAberto, setModalDocumentoAberto] = useState(false);
  const [modalEnderecoAberto, setModalEnderecoAberto] = useState(false);
  const [modalResponsavelAberto, setModalResponsavelAberto] = useState(false);

  dispararToastAvisoPerfil(alunoData);

  return (
    <main className="flex max-w-5xl flex-col gap-3 sm:w-14/12 sm:self-center">
      {alunoData?.aluno_documento && (
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
                  <div className="flex flex-col gap-1.5">
                    <p className="text-muted-foreground text-xs">
                      RG: {formatRg(alunoData.aluno_documento.rg)}
                    </p>
                    <p className="text-muted-foreground text-xs">
                      CPF: {formatCpf(alunoData.aluno_documento.cpf)}
                    </p>
                    <p className="text-muted-foreground text-xs">
                      Órgão emissor:{' '}
                      <span className="uppercase">
                        {alunoData.aluno_documento.orgao_emissor}
                      </span>
                    </p>
                  </div>
                </section>
              </section>
            </CardContent>
          </Card>
        </main>
      )}

      {alunoData?.aluno_endereco && (
        <main>
          <Card className="flex flex-col rounded-2xl border-none px-4 py-3 shadow-sm transition-all hover:bg-zinc-100">
            <CardContent className="flex items-center justify-between p-0">
              <section className="flex gap-2">
                <div className="flex size-12 items-center justify-center self-center rounded-full bg-green-100 shadow-sm">
                  <Home className="size-6 text-green-600" />
                </div>
                <section className="flex flex-col gap-0.5">
                  <h2 className="text-base font-semibold text-green-700">
                    Endereço
                  </h2>
                  <div className="flex flex-col gap-1.5">
                    <p className="text-muted-foreground text-xs">
                      {alunoData.aluno_endereco.rua}, nº{' '}
                      {alunoData.aluno_endereco.numero}
                    </p>
                    <p className="text-muted-foreground text-xs">
                      {alunoData.aluno_endereco.bairro} -{' '}
                      {alunoData.aluno_endereco.cidade}
                    </p>
                    <p className="text-muted-foreground text-xs">
                      CEP: {alunoData.aluno_endereco.cep}
                    </p>
                  </div>
                </section>
              </section>
            </CardContent>
          </Card>
        </main>
      )}

      {alunoData?.aluno_responsavel && (
        <main>
          <Card className="flex flex-col rounded-2xl border-none px-4 py-3 shadow-sm transition-all hover:bg-zinc-100">
            <CardContent className="flex items-center justify-between p-0">
              <section className="flex gap-2">
                <div className="flex size-12 items-center justify-center self-center rounded-full bg-green-100 shadow-sm">
                  <Users className="size-6 text-green-600" />
                </div>
                <section className="flex flex-col gap-0.5">
                  <h2 className="text-base font-semibold text-green-700">
                    Responsáveis
                  </h2>
                  <div className="flex flex-col gap-1.5">
                    <p className="text-muted-foreground text-xs">
                      CPF da Mãe:{' '}
                      {formatCpf(alunoData.aluno_responsavel.cpf_mae)}
                    </p>
                    <p className="text-muted-foreground text-xs">
                      Nome da Mãe: {alunoData.aluno_responsavel.nome_mae}
                    </p>
                    <p className="text-muted-foreground text-xs">
                      Nome do Pai: {alunoData.aluno_responsavel.nome_pai}
                    </p>
                    <p className="text-muted-foreground text-xs">
                      Responsável:{' '}
                      {alunoData.aluno_responsavel.nome_responsavel}
                    </p>
                  </div>
                </section>
              </section>
            </CardContent>
          </Card>
        </main>
      )}

      {cards
        .filter((card) => card.condicao)
        .map((card) => (
          <main key={card.titulo}>
            <Card
              className="flex cursor-pointer flex-col rounded-2xl border-none px-4 py-3 shadow-sm transition-all hover:bg-zinc-100"
              onClick={() => {
                if (card.titulo.includes('Documentos')) {
                  setModalDocumentoAberto(true);
                } else if (card.titulo.includes('Endereços')) {
                  setModalEnderecoAberto(true);
                } else if (card.titulo.includes('Responsáveis')) {
                  setModalResponsavelAberto(true);
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

      <DocumentoModal
        open={modalDocumentoAberto}
        onClose={() => setModalDocumentoAberto(false)}
        documentoAtual={alunoData?.aluno_documento}
        onSave={(novoDoc) =>
          setAlunoData((prev: any) => ({
            ...prev,
            aluno_documento: novoDoc,
          }))
        }
      />

      <EnderecoModal
        open={modalEnderecoAberto}
        onClose={() => setModalEnderecoAberto(false)}
        enderecoAtual={alunoData?.aluno_endereco}
        onSave={(novoEndereco) =>
          setAlunoData((prev: any) => ({
            ...prev,
            aluno_endereco: novoEndereco,
          }))
        }
      />

      <ResponsavelModal
        open={modalResponsavelAberto}
        onClose={() => setModalResponsavelAberto(false)}
        responsavelAtual={alunoData?.aluno_responsavel}
        onSave={(novoResp) =>
          setAlunoData((prev: any) => ({
            ...prev,
            aluno_responsavel: novoResp,
          }))
        }
      />
    </main>
  );
};
