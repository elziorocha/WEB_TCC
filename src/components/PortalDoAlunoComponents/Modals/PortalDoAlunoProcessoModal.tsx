import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Eye, FolderSymlink, Plus, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { criarAlunoProcesso } from '@/services/ChamadasApi/apiProcessos';
import { Button } from '@/components/ui/button';

export const PortalDoAlunoProcessoModal = ({ item }: any) => {
  const [open, setOpen] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const { criarProcesso, loading } = criarAlunoProcesso();

  const navigate = useNavigate();

  const handleConfirmarNovoProcesso = async () => {
    const formData = new FormData();
    await criarProcesso(formData);
    setConfirmOpen(false);
    setOpen(false);
    navigate('/portal-do-aluno/consultar-processo');
  };

  return (
    <main>
      <Dialog open={open} onOpenChange={setOpen} key={item.key}>
        <DialogTrigger asChild>
          <section className="flex min-h-36 w-36 cursor-pointer flex-col gap-4 rounded-2xl bg-white px-2 py-4 shadow-md transition-all hover:scale-102 hover:bg-zinc-100">
            <div className="bg-secondary/10 flex items-center justify-center self-center rounded-full p-3 shadow-md">
              <item.icon className="text-secondary size-7" />
            </div>
            <h4 className="text-tertiary text-center text-base font-medium">
              {item.label}
            </h4>
          </section>
        </DialogTrigger>

        <DialogContent
          showCloseButton={false}
          className="w-[90vw] max-w-md overflow-hidden rounded-2xl border-none p-4 sm:p-6"
        >
          <div className="bg-primary absolute -top-8 -left-8 size-26 rounded-[0%_100%_76%_24%_/_50%_19%_81%_50%] p-12"></div>
          <DialogClose asChild>
            <button className="absolute top-4 right-4 flex cursor-pointer items-center justify-center rounded-full bg-gray-200 p-1 transition-all hover:bg-gray-300 focus:outline-none">
              <X className="size-5" />
            </button>
          </DialogClose>

          <DialogHeader className="space-y-2">
            <div className="from-quarter to-tertiary flex size-14 items-center justify-center self-center rounded-full bg-gradient-to-br shadow-lg sm:size-16">
              <FolderSymlink className="size-8 text-white sm:size-10" />
            </div>
            <DialogTitle className="from-fifth to-secondary bg-gradient-to-r bg-clip-text text-center text-2xl font-bold text-transparent sm:text-3xl">
              Processos Digitais
            </DialogTitle>
            <DialogDescription className="text-center text-sm text-gray-700 sm:text-base">
              Escolha uma das opções a seguir para gerenciar seus processos
              digitais
            </DialogDescription>
          </DialogHeader>

          <section className="mt-2 grid gap-3 sm:mt-4 sm:gap-4">
            <Link
              to="/portal-do-aluno/consultar-processo"
              className="from-fifth/15 to-fifth/25 hover:from-fifth/25 hover:to-fifth/35 border-quarter/30 relative overflow-hidden rounded-xl border bg-gradient-to-r p-4 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg sm:p-6"
            >
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500 shadow-md sm:h-12 sm:w-12">
                  <Eye className="h-5 w-5 text-white sm:h-6 sm:w-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-blue-900 sm:text-lg">
                    Ver Processos
                  </h3>
                  <p className="text-xs text-blue-700 sm:text-sm">
                    Consulte seus Processos
                  </p>
                </div>
              </div>
            </Link>

            <button
              onClick={() => {
                setOpen(false);
                setTimeout(() => setConfirmOpen(true), 150);
              }}
              className="from-primary/15 to-primary/25 hover:from-primary/25 hover:to-primary/35 border-primary/40 relative w-full cursor-pointer overflow-hidden rounded-xl border bg-gradient-to-r p-4 text-left transition-all duration-300 hover:scale-[1.02] hover:shadow-lg sm:p-6"
            >
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="bg-primary flex h-10 w-10 items-center justify-center rounded-lg shadow-md sm:h-12 sm:w-12">
                  <Plus className="size-5 text-white sm:h-6 sm:w-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-[#403503] sm:text-lg">
                    Novo Processo
                  </h3>
                  <p className="text-yellowText text-xs sm:text-sm">
                    Inicie um novo Processo Digital
                  </p>
                </div>
              </div>
            </button>
          </section>
        </DialogContent>
      </Dialog>

      <Dialog open={confirmOpen} onOpenChange={setConfirmOpen}>
        <DialogContent
          showCloseButton={false}
          className="w-[90vw] max-w-md rounded-2xl border-none"
        >
          <DialogClose asChild>
            <button className="absolute top-4 right-4 flex cursor-pointer items-center justify-center rounded-full bg-gray-200 p-1 transition-all hover:bg-gray-300 focus:outline-none">
              <X className="size-5" />
            </button>
          </DialogClose>
          <DialogHeader>
            <DialogTitle className="text-tertiary text-center text-lg font-bold sm:text-xl">
              Iniciar novo processo?
            </DialogTitle>
            <DialogDescription className="text-center text-zinc-700 sm:text-base">
              Você terá{' '}
              <span className="text-primary font-semibold underline">
                15 dias
              </span>{' '}
              para completar o envio dos documentos. Deseja continuar?
            </DialogDescription>
          </DialogHeader>

          <div className="mt-4 flex justify-center gap-3">
            <Button
              variant="outline"
              onClick={() => setConfirmOpen(false)}
              disabled={loading}
              className="text-whiteText hover:text-whiteText cursor-pointer rounded-lg border-none bg-red-600 hover:bg-red-500"
            >
              Cancelar
            </Button>
            <Button
              onClick={handleConfirmarNovoProcesso}
              disabled={loading}
              className="bg-secondary hover:bg-quarter text-whiteText cursor-pointer rounded-lg px-4"
            >
              {loading ? 'Criando...' : 'Confirmar'}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </main>
  );
};
