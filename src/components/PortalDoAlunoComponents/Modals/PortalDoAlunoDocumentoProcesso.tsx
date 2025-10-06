import { useState } from 'react';
import { FileText, Upload, Check, X, Loader2 } from 'lucide-react';
import { getStatusProcessoBadge } from '@/utils/objetosExportaveis/objetosExportaveisDataTable';
import toast from 'react-hot-toast';
import type { PortalDoAlunoDocumentoProcessoInterface } from '@/utils/interfaces.interface';
import { chamadaCriarProcesso } from '@/services/ChamadasApi/apiProcessos';

export const PortalDoAlunoDocumentoProcesso = ({
  label,
  status,
  arquivoUrl,
  name = '',
}: PortalDoAlunoDocumentoProcessoInterface & {
  name: string;
  processoId: number;
}) => {
  const [open, setOpen] = useState(false);
  const [arquivoSelecionado, setArquivoSelecionado] = useState<File | null>(
    null
  );
  const [loadingLocal, setLoadingLocal] = useState(false);

  const { criarProcesso } = chamadaCriarProcesso();

  const isPdf = arquivoUrl?.match(/\.pdf$/i);
  const isImage = arquivoUrl?.match(/\.(jpg|jpeg|png)$/i);

  const tipoAceito = name.includes('pdf') ? '.pdf' : '.jpg,.jpeg,.png';
  const tipoArquivo = tipoAceito.includes('pdf') ? 'PDF' : 'PNG/JPG';

  const handleArquivoChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setArquivoSelecionado(e.target.files?.[0] || null);

  const removerArquivo = () => setArquivoSelecionado(null);

  const handleEnviarArquivo = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!arquivoSelecionado)
      return toast.error('Selecione um arquivo primeiro.');

    const formData = new FormData();
    formData.append(name, arquivoSelecionado);

    try {
      setLoadingLocal(true);
      await criarProcesso(formData);
      toast.success('Arquivo enviado com sucesso!');
      setArquivoSelecionado(null);
    } catch {
      toast.error('Erro ao enviar o arquivo.');
    } finally {
      setLoadingLocal(false);
    }
  };

  return (
    <div className="flex flex-col gap-2 rounded-lg border border-zinc-200 p-3 shadow-sm sm:p-4">
      {/* Cabeçalho */}
      <div className="text-muted-foreground flex items-center justify-between">
        <div className="flex items-center gap-2">
          <FileText
            className={`size-5 cursor-pointer ${status ? 'text-primary' : 'text-zinc-400'}`}
            onClick={() => setOpen(true)}
          />
          <span className="font-medium">{label}</span>
        </div>
        {getStatusProcessoBadge(status)}
      </div>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="flex h-[90%] w-[90%] flex-col rounded-xl bg-white p-4 shadow-lg">
            <div className="flex-1 overflow-auto">
              {arquivoUrl ? (
                isPdf ? (
                  <iframe src={arquivoUrl} className="h-full w-full rounded" />
                ) : isImage ? (
                  <img
                    src={arquivoUrl}
                    alt={label}
                    className="h-full w-full rounded object-contain"
                  />
                ) : null
              ) : (
                <form onSubmit={handleEnviarArquivo} className="mt-2">
                  <div className="relative">
                    <input
                      type="file"
                      accept={tipoAceito}
                      name={name}
                      onChange={handleArquivoChange}
                      className="absolute inset-0 z-10 h-full w-full cursor-pointer opacity-0"
                    />
                    <div
                      className={`relative flex min-h-24 w-full flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed transition-all duration-200 ${
                        arquivoSelecionado
                          ? 'border-green-500 bg-green-50 text-green-700'
                          : 'border-gray-300 bg-gray-50 hover:border-gray-400 hover:bg-gray-100'
                      }`}
                    >
                      {arquivoSelecionado ? (
                        <div className="flex flex-col items-center justify-center gap-2">
                          <Check className="h-6 w-6 text-green-600" />
                          <span className="text-xs font-medium">
                            Arquivo pronto para envio
                          </span>
                          <span className="text-[10px] text-gray-600">
                            {arquivoSelecionado.name}
                          </span>
                        </div>
                      ) : (
                        <div className="flex flex-col items-center justify-center gap-1">
                          <Upload className="h-6 w-6 text-gray-400" />
                          <span className="text-xs text-gray-500">
                            Clique ou arraste para enviar
                          </span>
                          <span className="rounded-md bg-gray-200 px-2 py-0.5 text-[10px] font-bold text-gray-600">
                            {tipoArquivo}
                          </span>
                        </div>
                      )}

                      {arquivoSelecionado && (
                        <button
                          type="button"
                          onClick={removerArquivo}
                          className="absolute top-1 right-1 z-50 cursor-pointer rounded-full bg-red-500 p-0.5 text-white transition-all hover:bg-red-600"
                        >
                          <X className="size-4 sm:size-5" />
                        </button>
                      )}
                    </div>
                  </div>

                  {arquivoSelecionado && (
                    <button
                      type="submit"
                      disabled={loadingLocal}
                      className="mt-3 flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-blue-400"
                    >
                      {loadingLocal ? (
                        <Loader2 className="size-4 animate-spin" />
                      ) : (
                        <Upload className="size-4" />
                      )}
                      {loadingLocal ? 'Enviando...' : 'Enviar Documento'}
                    </button>
                  )}
                </form>
              )}
            </div>

            <button
              onClick={() => setOpen(false)}
              className="bg-primary mt-4 self-center rounded px-5 py-3 text-base font-medium text-white"
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
