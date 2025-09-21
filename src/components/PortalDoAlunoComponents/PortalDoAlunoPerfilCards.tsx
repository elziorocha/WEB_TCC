import {
  alunoPerfilCards,
  dispararToastAvisoPerfil,
} from '@/utils/objetosExportaveis/objetosExportaveisReact';
import { Card, CardContent } from '../ui/card';
import { AlertCircle, IdCard, Users, MapPin } from 'lucide-react';

export const PortalDoAlunoPerfilCards = ({ aluno }: any) => {
  const cards = alunoPerfilCards(aluno);

  dispararToastAvisoPerfil(aluno);

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

      {aluno?.aluno_responsavel && (
        <main>
          <Card className="flex flex-col rounded-2xl border-none px-4 py-3 shadow-sm transition-all hover:bg-zinc-100">
            <CardContent className="flex items-center justify-between p-0">
              <section className="flex gap-2">
                <div className="flex size-12 items-center justify-center self-center rounded-full bg-green-100 shadow-sm">
                  <Users className="size-6 text-green-600" />
                </div>
                <div className="flex flex-col items-start">
                  <h2 className="text-base font-semibold text-green-700">
                    Responsáveis
                  </h2>
                  <p className="text-muted-foreground text-xs">
                    CPF da mãe: {aluno.aluno_responsavel.cpf_mae}
                  </p>
                  <p className="text-muted-foreground text-xs">
                    Mãe: {aluno.aluno_responsavel.nome_mae}
                  </p>
                  <p className="text-muted-foreground text-xs">
                    Pai: {aluno.aluno_responsavel.nome_pai}
                  </p>
                  <p className="text-muted-foreground text-xs">
                    Responsável: {aluno.aluno_responsavel.nome_responsavel}
                  </p>
                </div>
              </section>
            </CardContent>
          </Card>
        </main>
      )}

      {aluno?.aluno_endereco && (
        <main>
          <Card className="flex flex-col rounded-2xl border-none px-4 py-3 shadow-sm transition-all hover:bg-zinc-100">
            <CardContent className="flex items-center justify-between p-0">
              <section className="flex gap-2">
                <div className="flex size-12 items-center justify-center self-center rounded-full bg-green-100 shadow-sm">
                  <MapPin className="size-6 text-green-600" />
                </div>
                <div className="flex flex-col items-start">
                  <h2 className="text-base font-semibold text-green-700">
                    Endereço
                  </h2>
                  <section className="flex flex-col gap-0.5">
                    <p className="text-muted-foreground text-xs">
                      {aluno.aluno_endereco.cep} -{' '}
                      <span className="capitalize">
                        {aluno.aluno_endereco.cidade}
                      </span>
                    </p>
                    <p className="text-muted-foreground text-xs">
                      <span className="capitalize">
                        {aluno.aluno_endereco.rua},{' '}
                        {aluno.aluno_endereco.bairro}
                      </span>
                    </p>
                  </section>
                </div>
              </section>
            </CardContent>
          </Card>
        </main>
      )}

      {cards
        .filter((card) => card.condicao)
        .map((card) => (
          <main key={card.titulo}>
            <Card className="flex cursor-pointer flex-col rounded-2xl border-none px-4 py-3 shadow-sm transition-all hover:bg-zinc-100">
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
    </main>
  );
};
