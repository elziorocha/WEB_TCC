import { useState } from 'react';
import { Link } from 'react-router-dom';
import { alunoData } from '@/services/ChamadasApi/apiAluno';
import { useAlunoTipoCartao } from '@/services/hooks/useTipoCartao';
import type { TipoCartao } from '@/utils/intarfaces-enum';
import TelaCarregando from '@/components/componentesUI/TelaCarregando';
import { PortalDoAlunoPerfilCards } from '@/components/PortalDoAlunoComponents/PortalDoAlunoPerfilCards';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BadgeCartao } from '@/utils/objetosExportaveis/objetosExportaveisDataTable';
import {
  User,
  Mail,
  Phone,
  Calendar,
  UserCircle,
  ArrowLeftIcon,
  CreditCardIcon,
  AlertTriangleIcon,
} from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

export function PortalDoAlunoPerfil() {
  const { aluno, loading: loadingAluno, atualizarAluno } = alunoData();
  const [openDialog, setOpenDialog] = useState(false);

  const { tipoCartao, setTipoCartao, salvarTipoCartao, loadingCartao } =
    useAlunoTipoCartao(aluno, atualizarAluno);

  if (loadingAluno) return <TelaCarregando />;

  const mostrarSelect = !aluno?.tipo_cartao;

  return (
    <main className="flex flex-col gap-4 p-3">
      <Link
        to="/portal-do-aluno/dashboard"
        className="bg-primary text-blackText self-start rounded-lg px-3 py-1.5 text-sm shadow-md"
      >
        <div className="text-yellowText flex items-center gap-1 font-semibold">
          <ArrowLeftIcon className="size-5" />
          <span>Voltar</span>
        </div>
      </Link>

      <Card className="relative max-w-5xl gap-2 overflow-hidden rounded-2xl border-none pt-4 pb-0 shadow-md sm:w-14/12 sm:self-center">
        <CardHeader className="px-4">
          <CardTitle className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <User className="text-secondary size-6" />
              <span className="flex flex-col text-lg font-semibold sm:flex-row sm:items-center sm:gap-1">
                <p className="text-zinc-800">Perfil do Aluno</p>
                <p className="text-tertiary capitalize sm:ml-1">
                  {aluno?.nome}
                </p>
              </span>
            </div>
            {aluno?.tipo_cartao ? (
              <BadgeCartao tipo={aluno.tipo_cartao} />
            ) : (
              <span className="rounded-full border border-gray-300 bg-gray-200 px-4 py-1 text-sm font-medium text-gray-800">
                Sem Cartão
              </span>
            )}
          </CardTitle>
        </CardHeader>

        <hr className="border-dashed border-zinc-300" />

        <CardContent className="px-4 pt-3 pb-5">
          <div className="flex flex-col gap-4 text-sm">
            <section className="from-secondary/10 to-secondary/25 border-secondary/35 rounded-xl border bg-gradient-to-br px-3 py-2 shadow-sm">
              <div className="text-secondary flex items-center gap-2 font-semibold">
                <UserCircle className="size-5" />
                <span className="uppercase">Nome Completo</span>
              </div>
              <p className="text-tertiary mt-2 ml-0.5 text-sm font-semibold capitalize">
                {aluno?.nome}
              </p>
            </section>

            <section className="text-tertiary grid grid-cols-1 gap-4 sm:grid-cols-2">
              <section className="space-y-1">
                <div className="flex items-center gap-2">
                  <Mail className="text-muted-foreground size-4" />
                  <span className="text-muted-foreground font-medium">
                    E-mail:
                  </span>
                </div>
                <p className="ml-0.5 font-semibold break-all">{aluno?.email}</p>
              </section>

              <section className="space-y-1">
                <div className="flex items-center gap-2">
                  <Phone className="text-muted-foreground size-4" />
                  <span className="text-muted-foreground font-medium">
                    Telefone:
                  </span>
                </div>
                <p className="ml-0.5 font-semibold">{aluno?.telefone}</p>
              </section>
            </section>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <section className="space-y-1">
                <div className="flex items-center gap-2">
                  <Calendar className="text-muted-foreground size-4" />
                  <span className="text-muted-foreground font-medium">
                    Data de Nascimento:
                  </span>
                </div>
                <p className="text-tertiary ml-1 font-semibold">
                  {new Date(aluno?.data_nascimento || '').toLocaleDateString(
                    'pt-BR'
                  )}
                </p>
              </section>

              {mostrarSelect && (
                <section className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CreditCardIcon className="text-muted-foreground size-4" />
                    <span className="text-muted-foreground font-medium">
                      Tipo do Cartão:
                    </span>
                  </div>

                  <section className="flex gap-2">
                    <Select
                      value={tipoCartao || ''}
                      onValueChange={(value) =>
                        setTipoCartao(value as TipoCartao | '')
                      }
                    >
                      <SelectTrigger className="min-w-30 font-medium">
                        <SelectValue placeholder="Selecione..." />
                      </SelectTrigger>
                      <SelectContent className="border-none font-medium">
                        <SelectItem value="EDUCARD">EDUCARD</SelectItem>
                        <SelectItem value="VEM">VEM</SelectItem>
                      </SelectContent>
                    </Select>

                    <Button
                      onClick={() => setOpenDialog(true)}
                      disabled={loadingCartao || !tipoCartao}
                      className="bg-secondary hover:bg-quarter cursor-pointer"
                    >
                      Salvar
                    </Button>
                  </section>

                  <Dialog open={openDialog} onOpenChange={setOpenDialog}>
                    <DialogContent className="border-none sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle className="flex items-center gap-2 text-xl">
                          <AlertTriangleIcon className="size-8 text-red-600" />
                          Aviso
                        </DialogTitle>
                        <DialogDescription className="mt-2 text-justify">
                          Deseja salvar o tipo de cartão selecionado? Apenas
                          será possível alterar quando sua matrícula vigente
                          expirar.
                        </DialogDescription>
                      </DialogHeader>
                      <DialogFooter className="flex justify-end gap-2">
                        <Button
                          variant="outline"
                          onClick={() => setOpenDialog(false)}
                          className="text-whiteText hover:text-whiteText cursor-pointer border-none bg-red-700 hover:bg-red-600"
                        >
                          Fechar
                        </Button>
                        <Button
                          onClick={async () => {
                            await salvarTipoCartao();
                            setOpenDialog(false);
                          }}
                          disabled={loadingCartao || !tipoCartao}
                          className="bg-secondary hover:bg-quarter cursor-pointer"
                        >
                          Salvar Cartão
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </section>
              )}
            </div>
          </div>
        </CardContent>

        <div className="bg-primary absolute -right-16 -bottom-12 size-36 rounded-[54%_46%_50%_50%_/_58%_100%_0%_42%]"></div>
      </Card>

      <hr className="via-primary my-2 h-1 w-8/12 self-center border-0 bg-gradient-to-r from-transparent to-transparent" />

      <PortalDoAlunoPerfilCards aluno={aluno} />
    </main>
  );
}
