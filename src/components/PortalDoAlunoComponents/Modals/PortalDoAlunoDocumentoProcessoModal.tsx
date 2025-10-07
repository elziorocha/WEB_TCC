import { FileText, Upload, X } from 'lucide-react';
import { getStatusProcessoBadge } from '@/utils/objetosExportaveis/objetosExportaveisDataTable';
import { useState } from 'react';
import toast from 'react-hot-toast';
import type { PortalDoAlunoDocumentoProcessoInterface } from '@/utils/interfaces.interface';

export const PortalDoAlunoDocumentoProcesso = ({
  label,
  status,
  arquivoUrl,
  name,
  onUpload,
}: PortalDoAlunoDocumentoProcessoInterface & {
  name: string;
  onUpload?: (name: string, file: File) => Promise<void> | void;
}) => {
  const [open, setOpen] = useState(false);
  const [arquivoSelecionado, setArquivoSelecionado] = useState<File | null>(
    null
  );
  const [loading, setLoading] = useState(false);

  const isImage = arquivoUrl?.match(/\.(jpg|jpeg|png)$/i);
  const isPdf = arquivoUrl?.match(/\.pdf$/i);

  const handleClick = () => setOpen(true);

  const handleArquivoSelecionado = (e: React.ChangeEvent<HTMLInputElement>) => {
    const arquivo = e.target.files?.[0];
    console.log('Arquivo selecionado:', arquivo);
    if (arquivo) setArquivoSelecionado(arquivo);
  };

  const handleUploadClick = async () => {
    console.log('Arquivo antes do upload:', arquivoSelecionado);
    console.log('Função onUpload:', onUpload);

    if (!arquivoSelecionado) {
      toast.error('Selecione um arquivo primeiro.');
      return;
    }

    if (!onUpload) {
      toast.error('Função de upload não configurada.');
      return;
    }

    setLoading(true);
    try {
      await onUpload(name, arquivoSelecionado);
      toast.success('Arquivo enviado com sucesso!');
      setArquivoSelecionado(null);
      setOpen(false);
    } catch (error) {
      console.error('Erro no upload:', error);
      toast.error('Erro ao enviar o arquivo.');
    } finally {
      setLoading(false);
    }
  };

  const removerArquivo = () => setArquivoSelecionado(null);

  return (
    <div className="flex flex-row items-center justify-between sm:flex-col sm:gap-1">
      <div className="text-muted-foreground flex items-center gap-2">
        <FileText
          className={`size-5 cursor-pointer ${status ? 'text-primary' : 'text-zinc-400'}`}
          onClick={handleClick}
        />
        <span className="font-medium">{label}</span>
      </div>
      {getStatusProcessoBadge(status)}

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="flex h-[90%] w-[90%] max-w-3xl flex-col rounded-xl bg-white p-4 shadow-lg">
            {/* CABEÇALHO */}
            <header className="flex items-center justify-between border-b pb-2">
              <h2 className="text-lg font-semibold text-gray-700">{label}</h2>
              <button
                onClick={() => setOpen(false)}
                className="rounded-full bg-red-500 p-1 text-white hover:bg-red-600"
              >
                <X className="size-4" />
              </button>
            </header>

            {/* CONTEÚDO */}
            <div className="flex-1 overflow-hidden py-4">
              {arquivoUrl ? (
                <>
                  {isPdf && (
                    <iframe
                      src={arquivoUrl}
                      className="h-full w-full rounded border"
                    />
                  )}
                  {isImage && (
                    <img
                      src={arquivoUrl}
                      alt={label}
                      className="h-full w-full rounded object-contain"
                    />
                  )}
                </>
              ) : (
                <div className="flex h-full flex-col items-center justify-center gap-4">
                  <label className="relative flex w-64 flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 p-6 text-center hover:bg-gray-50">
                    <Upload className="mb-2 size-6 text-gray-400" />
                    <span className="text-sm text-gray-600">
                      {arquivoSelecionado
                        ? arquivoSelecionado.name
                        : 'Clique para enviar arquivo'}
                    </span>
                    <input
                      type="file"
                      name={name}
                      accept=".pdf,.jpg,.jpeg,.png"
                      onChange={handleArquivoSelecionado}
                      className="absolute inset-0 cursor-pointer opacity-0"
                    />
                  </label>

                  {arquivoSelecionado && (
                    <div className="flex items-center gap-2">
                      <button
                        onClick={handleUploadClick}
                        disabled={loading}
                        className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 disabled:bg-blue-400"
                      >
                        {loading ? 'Enviando...' : 'Enviar'}
                      </button>
                      <button
                        onClick={removerArquivo}
                        className="rounded-lg bg-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-400"
                      >
                        Remover
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* BOTÃO FECHAR */}
            <footer className="mt-4 border-t pt-3">
              <button
                onClick={() => setOpen(false)}
                className="bg-primary mt-1 cursor-pointer self-center rounded px-5 py-2 text-base font-medium text-white"
              >
                Fechar
              </button>
            </footer>
          </div>
        </div>
      )}
    </div>
  );
};
