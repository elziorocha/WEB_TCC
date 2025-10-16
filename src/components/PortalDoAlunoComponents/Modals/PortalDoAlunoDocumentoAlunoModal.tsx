import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import type { AlunoDocumentoInterface } from '@/utils/interfaces.interface';
import { criarAlunoDocumento } from '@/services/ChamadasApi/apiDocumentos';
import { DialogClose } from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
import { formatCpf, formatRg } from '@/utils/normalizacao';

interface DocumentoModalProps {
  open: boolean;
  onClose: () => void;
  documentoAtual?: AlunoDocumentoInterface | null;
  onSave: (dados: AlunoDocumentoInterface) => void;
}

export function DocumentoModal({
  open,
  onClose,
  documentoAtual,
  onSave,
}: DocumentoModalProps) {
  const [rg, setRg] = useState(documentoAtual?.rg ?? '');
  const [cpf, setCpf] = useState(documentoAtual?.cpf ?? '');
  const [orgaoEmissor, setOrgaoEmissor] = useState(
    documentoAtual?.orgao_emissor ?? ''
  );

  const [rgVisual, setRgVisual] = useState(formatRg(documentoAtual?.rg ?? ''));
  const [cpfVisual, setCpfVisual] = useState(
    formatCpf(documentoAtual?.cpf ?? '')
  );

  const [erros, setErros] = useState({
    rg: false,
    cpf: false,
    orgaoEmissor: false,
  });

  const { criarDocumento, loading } = criarAlunoDocumento();

  const handleRgChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '');
    setRg(value);
    setRgVisual(formatRg(value));
  };

  const handleCpfChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '');
    setCpf(value);
    setCpfVisual(formatCpf(value));
  };

  const handleSubmit = async () => {
    const novosErros = {
      rg: !rg.trim(),
      cpf: !cpf.trim(),
      orgaoEmissor: !orgaoEmissor.trim(),
    };

    setErros(novosErros);

    if (Object.values(novosErros).some(Boolean)) return;

    const novoDoc = await criarDocumento({
      rg: rg.trim(),
      cpf: cpf.trim(),
      orgao_emissor: orgaoEmissor.trim(),
    });

    onSave(novoDoc);
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent
        showCloseButton={false}
        className="border-none sm:max-w-md"
      >
        <DialogClose asChild>
          <button className="absolute top-4 right-4 flex cursor-pointer items-center justify-center rounded-full bg-gray-200 p-1 transition-all hover:bg-gray-300 focus:outline-none">
            <X className="size-5" />
          </button>
        </DialogClose>

        <DialogHeader>
          <DialogTitle>Adicionar Documentos</DialogTitle>
        </DialogHeader>

        <div className="flex flex-col gap-3">
          <div>
            <span className="ml-2 text-sm font-medium text-zinc-700">RG</span>
            <Input
              placeholder="Ex: 11.222.333-4"
              value={rgVisual}
              onChange={handleRgChange}
              className={erros.rg ? 'border-red-500' : ''}
            />
          </div>

          <div>
            <span className="ml-2 text-sm font-medium text-zinc-700">CPF</span>
            <Input
              placeholder="Ex: 111.222.333-44"
              value={cpfVisual}
              onChange={handleCpfChange}
              className={erros.cpf ? 'border-red-500' : ''}
            />
          </div>

          <div>
            <span className="ml-2 text-sm font-medium text-zinc-700">
              Órgão Emissor
            </span>
            <Input
              placeholder="Ex: SSP/PR"
              value={orgaoEmissor}
              onChange={(e) => setOrgaoEmissor(e.target.value)}
              className={erros.orgaoEmissor ? 'border-red-500' : ''}
            />
          </div>
        </div>

        {(erros.rg || erros.cpf || erros.orgaoEmissor) && (
          <p className="ml-2 text-sm text-red-500">Preencha todos os campos!</p>
        )}

        <DialogFooter className="mt-2 gap-4">
          <Button
            variant="outline"
            onClick={onClose}
            disabled={loading}
            className="text-whiteText hover:text-whiteText cursor-pointer border-none bg-red-600 shadow-sm hover:bg-red-500"
          >
            Cancelar
          </Button>
          <Button
            onClick={handleSubmit}
            disabled={loading}
            className="bg-tertiary hover:bg-secondary cursor-pointer transition-all"
          >
            {loading ? 'Salvando...' : 'Salvar'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
