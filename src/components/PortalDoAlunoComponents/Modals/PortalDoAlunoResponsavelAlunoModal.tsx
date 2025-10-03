import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import type { AlunoResponsavelInterface } from '@/utils/interfaces.interface';
import { criarAlunoResponsavel } from '@/services/ChamadasApi/apiResponsaveis';
import { DialogClose } from '@radix-ui/react-dialog';
import { X } from 'lucide-react';

interface ResponsavelModalProps {
  open: boolean;
  onClose: () => void;
  responsavelAtual?: AlunoResponsavelInterface | null;
  onSave: (novoResponsavel: AlunoResponsavelInterface) => void;
}

export function ResponsavelModal({
  open,
  onClose,
  responsavelAtual,
  onSave,
}: ResponsavelModalProps) {
  // Hook deve ser chamado incondicionalmente no topo
  const { criarResponsavel, loading } = criarAlunoResponsavel();

  const [form, setForm] = useState<AlunoResponsavelInterface>(
    responsavelAtual || {
      cpf_mae: '',
      nome_mae: '',
      nome_pai: '',
      nome_responsavel: '',
    }
  );

  const [erros, setErros] = useState({
    cpf_mae: false,
    nome_mae: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Limpa erro do campo quando usuário começa a digitar
    if (erros[name as keyof typeof erros]) {
      setErros((prev) => ({ ...prev, [name]: false }));
    }
  };

  const handleSubmit = async () => {
    // Validação básica
    const novosErros = {
      cpf_mae: !form.cpf_mae.trim(),
      nome_mae: !form.nome_mae.trim(),
    };

    setErros(novosErros);

    if (Object.values(novosErros).some(Boolean)) {
      return;
    }

    try {
      const novo = await criarResponsavel(form);
      onSave(novo);
      onClose();
    } catch (err) {
      console.error('Erro ao salvar responsável:', err);
    }
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
          <DialogTitle>Responsáveis</DialogTitle>
        </DialogHeader>

        <div className="flex flex-col gap-3">
          <div>
            <span className="ml-2 text-sm font-medium text-zinc-700">
              CPF da Mãe *
            </span>
            <Input
              name="cpf_mae"
              placeholder="Ex: 111.222.333-44"
              value={form.cpf_mae}
              onChange={handleChange}
              className={erros.cpf_mae ? 'border-red-500' : ''}
            />
          </div>

          <div>
            <span className="ml-2 text-sm font-medium text-zinc-700">
              Nome da Mãe *
            </span>
            <Input
              name="nome_mae"
              placeholder="Ex: Léa Rocha"
              value={form.nome_mae}
              onChange={handleChange}
              className={erros.nome_mae ? 'border-red-500' : ''}
            />
          </div>

          <div>
            <span className="ml-2 text-sm font-medium text-zinc-700">
              Nome do Pai
            </span>
            <Input
              name="nome_pai"
              placeholder="Ex: Antônio Pereira"
              value={form.nome_pai}
              onChange={handleChange}
            />
          </div>

          <div>
            <span className="ml-2 text-sm font-medium text-zinc-700">
              Nome do Responsável Legal
            </span>
            <Input
              name="nome_responsavel"
              placeholder="Ex: João da Silva"
              value={form.nome_responsavel}
              onChange={handleChange}
            />
          </div>
        </div>

        {Object.values(erros).some(Boolean) && (
          <p className="ml-2 text-sm text-red-500">
            Preencha os campos obrigatórios! (marcados com *)
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
