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
import type { AlunoEnderecoInterface } from '@/utils/interfaces.interface';
import { X } from 'lucide-react';
import { DialogClose } from '@radix-ui/react-dialog';
import { criarAlunoEndereco } from '@/services/ChamadasApi/apiEndereco';
import { formatCep } from '@/utils/normalizacao';

interface EnderecoModalProps {
  open: boolean;
  onClose: () => void;
  enderecoAtual?: AlunoEnderecoInterface | null;
  onSave: (dados: AlunoEnderecoInterface) => void;
}

export function EnderecoModal({
  open,
  onClose,
  enderecoAtual,
  onSave,
}: EnderecoModalProps) {
  const [cep, setCep] = useState(enderecoAtual?.cep ?? '');
  const [cidade, setCidade] = useState(enderecoAtual?.cidade ?? '');
  const [bairro, setBairro] = useState(enderecoAtual?.bairro ?? '');
  const [rua, setRua] = useState(enderecoAtual?.rua ?? '');
  const [numero, setNumero] = useState(enderecoAtual?.numero?.toString() ?? '');

  const [erros, setErros] = useState({
    cep: false,
    cidade: false,
    bairro: false,
    rua: false,
    numero: false,
  });

  const { criarEndereco, loading } = criarAlunoEndereco();

  const handleSubmit = async () => {
    const cepLimpo = cep.replace(/\D/g, '');

    const novosErros = {
      cep: !cep.trim(),
      cidade: !cidade.trim(),
      bairro: !bairro.trim(),
      rua: !rua.trim(),
      numero: !numero.trim() || isNaN(Number(numero)),
    };

    setErros(novosErros);

    if (Object.values(novosErros).some(Boolean)) return;

    try {
      const novoEndereco = await criarEndereco({
        cep: cepLimpo,
        cidade: cidade.trim(),
        bairro: bairro.trim(),
        rua: rua.trim(),
        numero: Number(numero),
      });

      onSave(novoEndereco);
      onClose();
    } catch (error: any) {}
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
          <DialogTitle>Adicionar Endereço</DialogTitle>
        </DialogHeader>

        <div className="flex flex-col gap-3">
          <div>
            <span className="ml-2 text-sm font-medium text-zinc-700">CEP</span>
            <Input
              placeholder="Ex: 85070-000"
              value={formatCep(cep)}
              onChange={(e) => setCep(e.target.value)}
              className={erros.cep ? 'border-red-500' : ''}
            />
          </div>

          <div>
            <span className="ml-2 text-sm font-medium text-zinc-700">
              Cidade
            </span>
            <Input
              placeholder="Ex: Guarapuava"
              value={cidade}
              onChange={(e) => setCidade(e.target.value)}
              className={erros.cidade ? 'border-red-500' : ''}
            />
          </div>

          <div>
            <span className="ml-2 text-sm font-medium text-zinc-700">
              Bairro
            </span>
            <Input
              placeholder="Ex: Centro"
              value={bairro}
              onChange={(e) => setBairro(e.target.value)}
              className={erros.bairro ? 'border-red-500' : ''}
            />
          </div>

          <div>
            <span className="ml-2 text-sm font-medium text-zinc-700">Rua</span>
            <Input
              placeholder="Ex: Rua XV de Novembro"
              value={rua}
              onChange={(e) => setRua(e.target.value)}
              className={erros.rua ? 'border-red-500' : ''}
            />
          </div>

          <div>
            <span className="ml-2 text-sm font-medium text-zinc-700">
              Número
            </span>
            <Input
              placeholder="Ex: 123"
              value={numero}
              onChange={(e) => setNumero(e.target.value)}
              className={erros.numero ? 'border-red-500' : ''}
            />
          </div>
        </div>

        {Object.values(erros).some(Boolean) && (
          <p className="ml-2 text-sm text-red-500">
            Preencha todos os campos corretamente!
          </p>
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
