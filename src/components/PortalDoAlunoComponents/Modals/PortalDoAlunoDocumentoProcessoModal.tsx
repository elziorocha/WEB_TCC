import {
  FileText,
  Upload,
  X,
  Trash2,
  ExternalLink,
  AlertTriangle,
} from 'lucide-react';
import { getStatusDocumentoBadge } from '@/utils/objetosExportaveis/objetosExportaveisDataTable';
import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import type { PortalDoAlunoDocumentoProcessoInterface } from '@/utils/interfaces.interface';
import { deleteAlunoArquivoProcesso } from '@/services/api';
import { apiError } from '@/services/apiError';
import { instrucoesUpload } from '@/utils/objetosExportaveis/objetosExportaveis';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

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
  const [openDialogDelete, setOpenDialogDelete] = useState(false);
  const [arquivoSelecionado, setArquivoSelecionado] = useState<File | null>(
    null
  );
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [urlLocal, setUrlLocal] = useState<string | null>(arquivoUrl ?? null);
  const [_isMobile, setIsMobile] = useState(false);

  const isImage = (urlLocal ?? previewUrl)?.match(/\.(jpg|jpeg|png)$/i);
  const isPdf = (urlLocal ?? previewUrl)?.match(/\.pdf$/i);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!arquivoSelecionado) {
      setPreviewUrl(null);
      return;
    }
    const url = URL.createObjectURL(arquivoSelecionado);
    setPreviewUrl(url);
    return () => URL.revokeObjectURL(url);
  }, [arquivoSelecionado]);

  const abrirModal = (e: React.MouseEvent) => {
    e.stopPropagation();
    setOpen(true);
  };

  const fecharModal = (e: React.MouseEvent) => {
    e.stopPropagation();
    setOpen(false);
    setPreviewUrl(null);
    setArquivoSelecionado(null);
  };

  const handleModalClick = (e: React.MouseEvent) => e.stopPropagation();

  const handleArquivoSelecionado = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];

    if (file) {
      setArquivoSelecionado(file);

      if (file.type.startsWith('image/')) {
        setPreviewUrl(URL.createObjectURL(file));
      } else if (file.type === 'application/pdf') {
        setPreviewUrl('pdf');
      } else {
        setPreviewUrl(null);
      }
    }
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
      setPreviewUrl(null);
      setOpen(false);
    } catch (error) {
      apiError(error, 'Erro ao enviar o arquivo.');
    } finally {
      setLoading(false);
    }
  };

  const confirmarRemocaoArquivo = async () => {
    setLoading(true);
    try {
      await deleteAlunoArquivoProcesso(name);
      setUrlLocal(null);
      onUpdate?.(name, null);
      toast.success(`Arquivo de "${label}" removido com sucesso!`);
      setOpenDialogDelete(false);
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
    setPreviewUrl(null);
  };

  const handleAbrirNovaGuia = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (urlLocal) window.open(urlLocal, '_blank');
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

      <span className="mt-2">{getStatusDocumentoBadge(status, validado)}</span>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
          onClick={fecharModal}
        >
          <div
            className="flex max-h-[95vh] w-[95vw] max-w-3xl flex-col overflow-hidden rounded-xl bg-white shadow-lg sm:w-[90vw]"
            onClick={handleModalClick}
          >
            <header className="from-primary/20 to-secondary/20 flex items-center justify-between rounded-t-xl border-b-2 border-dashed border-zinc-400 bg-gradient-to-b p-3">
              <h2 className="p-1 text-lg font-semibold text-zinc-800 sm:text-xl">
                {label}
              </h2>
              <button
                onClick={fecharModal}
                className="cursor-pointer rounded-full bg-red-500 p-1 text-white hover:bg-red-600"
              >
                <X className="size-4" />
              </button>
            </header>

            <div className="flex-1 overflow-y-auto p-3 sm:p-4">
              {urlLocal && !previewUrl ? (
                <div className="relative flex h-[70vh] w-full flex-col items-center justify-center rounded-lg bg-gray-200">
                  {isPdf && (
                    <div className="absolute top-3 right-3 z-10">
                      <button
                        onClick={handleAbrirNovaGuia}
                        className="flex items-center gap-2 rounded-lg bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:bg-blue-700"
                      >
                        <ExternalLink className="size-4" />
                        Abrir em nova guia
                      </button>
                    </div>
                  )}

                  {isPdf && (
                    <iframe
                      src={`${urlLocal}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
                      className="h-full w-full rounded bg-gray-100 shadow-md"
                      style={{ border: 'none', overflow: 'hidden' }}
                    />
                  )}

                  {isImage && (
                    <img
                      src={urlLocal}
                      alt={label}
                      className="h-full w-full rounded object-contain shadow-md"
                    />
                  )}

                  <div
                    className="absolute inset-0 flex cursor-pointer items-center justify-center rounded bg-black/40 opacity-0 transition-opacity hover:opacity-100"
                    onClick={(e) => {
                      e.stopPropagation();
                      setOpenDialogDelete(true);
                    }}
                  >
                    <Trash2 className="size-8 text-white" />
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center gap-4 p-8 sm:p-20">
                  {!previewUrl ? (
                    <label className="relative flex size-48 w-full flex-col items-center justify-center rounded-xl border-2 border-dashed border-gray-300 p-6 text-center transition-colors hover:bg-gray-100 sm:size-80 sm:max-w-[24rem]">
                      <Upload className="mb-2 size-6 text-zinc-400" />
                      <span className="text-sm text-zinc-600">
                        Clique para enviar arquivo
                      </span>
                      <input
                        type="file"
                        name={name}
                        accept=".pdf,.jpg,.jpeg,.png"
                        onChange={handleArquivoSelecionado}
                        className="absolute inset-0 cursor-pointer opacity-0"
                      />
                    </label>
                  ) : (
                    <div className="relative flex aspect-video w-full max-w-[24rem] items-center justify-center rounded-xl border border-dashed border-zinc-300 bg-gray-50">
                      {arquivoSelecionado?.type === 'application/pdf' ? (
                        <div className="flex h-full w-full flex-col items-center justify-center p-4">
                          <FileText className="mb-2 size-12 text-red-500" />
                          <span className="text-base font-medium text-zinc-700">
                            {arquivoSelecionado?.name}
                          </span>
                          <span className="mt-0.5 text-xs text-zinc-500">
                            PDF -{' '}
                            {(arquivoSelecionado?.size / (1024 * 1024)).toFixed(
                              2
                            )}{' '}
                            MB
                          </span>
                          <a
                            href={previewUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:bg-quarter hover:text-whiteText mt-2 rounded-md px-3 py-1.5 text-sm font-medium text-blue-600 transition-colors"
                          >
                            Visualizar PDF
                          </a>
                        </div>
                      ) : (
                        <img
                          src={previewUrl}
                          alt="Pré-visualização"
                          className="h-full w-full rounded object-contain"
                        />
                      )}
                      <button
                        onClick={handleCancelarSelecao}
                        className="absolute top-2 right-2 rounded-full bg-red-500 p-1 text-white hover:bg-red-600"
                      >
                        <X className="size-4" />
                      </button>
                    </div>
                  )}

                  <p className="mt-2 px-3 text-center text-sm font-medium text-zinc-600 sm:text-base">
                    {instrucoesUpload[name] ??
                      'Envie um arquivo conforme as instruções da secretaria.'}
                  </p>

                  {arquivoSelecionado && (
                    <div className="flex flex-wrap items-center justify-center gap-2">
                      <button
                        onClick={handleUploadClick}
                        disabled={loading}
                        className="bg-quarter hover:bg-secondary cursor-pointer rounded-lg px-4 py-2 text-sm font-medium text-white transition-colors disabled:bg-blue-400"
                      >
                        {loading ? 'Enviando...' : 'Enviar'}
                      </button>
                      <button
                        onClick={handleCancelarSelecao}
                        disabled={loading}
                        className="text-whiteText cursor-pointer rounded-lg bg-red-600 px-4 py-2 text-sm font-medium transition-colors hover:bg-red-700"
                      >
                        Cancelar
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>

            <footer className="mt-4 flex items-center justify-center gap-4 border-t-2 border-dashed border-zinc-400 px-3 py-5">
              <Button
                onClick={fecharModal}
                disabled={loading}
                className="bg-secondary hover:bg-tertiary text-whiteText cursor-pointer rounded px-5 py-2 text-base font-medium transition-colors"
              >
                Fechar
              </Button>
              <Button
                onClick={() => setOpenDialogDelete(true)}
                disabled={loading}
                className="cursor-pointer rounded bg-red-600 text-base text-white hover:bg-red-700"
              >
                Remover
              </Button>
            </footer>
          </div>
        </div>
      )}

      <Dialog open={openDialogDelete} onOpenChange={setOpenDialogDelete}>
        <DialogContent className="border-none sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-xl text-red-600">
              <AlertTriangle className="size-6" />
              Confirmar Exclusão?
            </DialogTitle>
            <DialogDescription className="mt-2 text-justify text-zinc-700">
              Deseja realmente excluir o arquivo <strong>{label}</strong>? Essa
              ação não pode ser desfeita.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="mt-2 flex justify-end gap-2">
            <Button
              variant="outline"
              onClick={() => setOpenDialogDelete(false)}
              className="text-whiteText hover:text-whiteText cursor-pointer border-none bg-zinc-500 hover:bg-zinc-600"
            >
              Cancelar
            </Button>
            <Button
              onClick={confirmarRemocaoArquivo}
              disabled={loading}
              className="cursor-pointer bg-red-600 text-white hover:bg-red-700"
            >
              {loading ? 'Removendo...' : 'Remover'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};
