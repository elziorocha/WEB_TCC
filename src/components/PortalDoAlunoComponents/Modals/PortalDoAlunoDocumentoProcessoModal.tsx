import { FileText, Upload, X, Trash2 } from 'lucide-react';
import { getStatusDocumentoBadge } from '@/utils/objetosExportaveis/objetosExportaveisDataTable';
import { useState } from 'react';
import toast from 'react-hot-toast';
import type { PortalDoAlunoDocumentoProcessoInterface } from '@/utils/interfaces.interface';
import { deleteAlunoArquivoProcesso } from '@/services/api';
import { apiError } from '@/services/apiError';

export const PortalDoAlunoDocumentoProcesso = ({
  label,
  status,
  validado,
  arquivoUrl,
  name,
  onUpload,
  onUpdate,
}: PortalDoAlunoDocumentoProcessoInterface & {
  name: string;
  validado?: boolean | null;
  onUpload?: (name: string, file: File) => Promise<void> | void;
  onUpdate?: (name: string, arquivoUrl: string | null) => void;
}) => {
  const [open, setOpen] = useState(false);
  const [arquivoSelecionado, setArquivoSelecionado] = useState<File | null>(
    null
  );
  const [loading, setLoading] = useState(false);
  const [urlLocal, setUrlLocal] = useState<string | null>(arquivoUrl ?? null);

  const isImage = urlLocal?.match(/\.(jpg|jpeg|png)$/i);
  const isPdf = urlLocal?.match(/\.pdf$/i);

  const abrirModal = (e: React.MouseEvent) => {
    e.stopPropagation();
    setOpen(true);
  };

  const fecharModal = (e: React.MouseEvent) => {
    e.stopPropagation();
    setOpen(false);
  };

  const handleModalClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const handleArquivoSelecionado = (e: React.ChangeEvent<HTMLInputElement>) => {
    const arquivo = e.target.files?.[0];
    if (arquivo) setArquivoSelecionado(arquivo);
  };

  const handleUploadClick = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!arquivoSelecionado) return apiError('Selecione um arquivo primeiro.');
    if (!onUpload) return apiError('Função de upload não configurada.');

    setLoading(true);
    try {
      await onUpload(name, arquivoSelecionado);
      onUpdate?.(name, 'pending');

      setArquivoSelecionado(null);
      setOpen(false);
    } catch (error) {
      apiError(error, 'Erro ao enviar o arquivo.');
    } finally {
      setLoading(false);
    }
  };

  const handleRemoverArquivo = async (e: React.MouseEvent) => {
    e.stopPropagation();
    setLoading(true);
    try {
      await deleteAlunoArquivoProcesso(name);
      setUrlLocal(null);

      onUpdate?.(name, null);

      toast.success(`Arquivo de "${label}" removido com sucesso!`);
      setOpen(false);
    } catch (error) {
      apiError(error, 'Erro ao remover o arquivo.');
    } finally {
      setLoading(false);
    }
  };

  const handleCancelarSelecao = (e: React.MouseEvent) => {
    e.stopPropagation();
    setArquivoSelecionado(null);
  };

  return (
    <div
      onClick={abrirModal}
      className="flex cursor-pointer flex-row items-center justify-between rounded-xl border-2 border-transparent py-3 transition-all hover:border-dashed hover:border-zinc-400 sm:flex-col sm:gap-1"
    >
      <div className="text-muted-foreground flex cursor-pointer items-center gap-2">
        <FileText
          className={`size-5 ${status ? 'text-primary' : 'text-zinc-400'}`}
        />
        <span className="font-medium">{label}</span>
      </div>
      {getStatusDocumentoBadge(status, validado)}

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
          onClick={fecharModal}
        >
          <div
            className="flex h-[90%] w-[90%] max-w-3xl flex-col rounded-xl bg-white p-4 shadow-lg"
            onClick={handleModalClick}
          >
            <header className="flex items-center justify-between border-b pb-2">
              <h2 className="text-lg font-semibold text-gray-700">{label}</h2>
              <button
                onClick={fecharModal}
                className="rounded-full bg-red-500 p-1 text-white hover:bg-red-600"
              >
                <X className="size-4" />
              </button>
            </header>

            <div className="flex-1 overflow-hidden py-4">
              {urlLocal ? (
                <div className="relative flex h-full w-full items-center justify-center rounded-lg bg-gray-100">
                  {isPdf && (
                    <div className="relative flex h-full w-full items-center justify-center">
                      <iframe
                        src={`${urlLocal}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
                        className="h-full w-full rounded bg-gray-100 shadow-md"
                        style={{
                          border: 'none',
                          overflow: 'hidden',
                          scrollbarWidth: 'none',
                        }}
                      />
                      <div
                        className="absolute inset-0 flex cursor-pointer items-center justify-center rounded bg-black/40 opacity-0 transition-opacity hover:opacity-100"
                        onClick={handleRemoverArquivo}
                      >
                        <Trash2 className="size-8 text-white" />
                      </div>
                    </div>
                  )}

                  {isImage && (
                    <div className="relative flex h-full w-full items-center justify-center">
                      <img
                        src={urlLocal}
                        alt={label}
                        className="max-h-full max-w-full rounded object-contain shadow-md"
                      />
                      <div
                        className="absolute inset-0 flex cursor-pointer items-center justify-center rounded bg-black/40 opacity-0 transition-opacity hover:opacity-100"
                        onClick={handleRemoverArquivo}
                      >
                        <Trash2 className="size-8 text-white" />
                      </div>
                    </div>
                  )}

                  {!isPdf && !isImage && (
                    <div className="relative flex h-full w-full items-center justify-center">
                      <div className="flex flex-col items-center justify-center gap-4">
                        <FileText className="size-16 text-gray-400" />
                        <p className="text-gray-600">
                          Arquivo não visualizável
                        </p>
                        <button
                          onClick={handleRemoverArquivo}
                          disabled={loading}
                          className="flex items-center gap-2 rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700 disabled:bg-red-400"
                        >
                          <Trash2 className="size-4" />
                          {loading ? 'Removendo...' : 'Remover Arquivo'}
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="flex h-full flex-col items-center justify-center gap-4">
                  <label className="relative flex size-64 flex-col items-center justify-center rounded-xl border-2 border-dashed border-gray-300 p-6 text-center hover:bg-gray-50 sm:size-96">
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
                        onClick={handleCancelarSelecao}
                        disabled={loading}
                        className="rounded-lg bg-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-400"
                      >
                        Cancelar
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>

            <footer className="mt-4 flex justify-center border-t pt-3">
              <button
                onClick={fecharModal}
                className="bg-primary mt-1 cursor-pointer rounded px-5 py-2 text-base font-medium text-white"
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
