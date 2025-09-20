import { FileText } from 'lucide-react';
import { getStatusProcessoBadge } from '@/utils/objetosExportaveis/objetosExportaveisDataTable';
import { useState } from 'react';
import type { PortalDoAlunoDocumentoProcessoInterface } from '@/utils/interfaces.interface';

export const PortalDoAlunoDocumentoProcesso = ({
  label,
  status,
  arquivoUrl,
}: PortalDoAlunoDocumentoProcessoInterface) => {
  const [open, setOpen] = useState(false);

  const isImage = arquivoUrl?.match(/\.(jpg|jpeg|png)$/i);
  const isPdf = arquivoUrl?.match(/\.pdf$/i);

  const handleClick = () => {
    if (!status || !arquivoUrl) return;
    setOpen(true);
  };

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
          <div className="flex h-[90%] w-[90%] flex-col rounded-xl bg-white p-4 shadow-lg">
            <div className="flex-1 overflow-hidden">
              {isPdf && (
                <iframe src={arquivoUrl} className="h-full w-full rounded" />
              )}
              {isImage && (
                <img
                  src={arquivoUrl}
                  alt={label}
                  className="h-full w-full rounded object-contain"
                />
              )}
            </div>
            <button
              onClick={() => setOpen(false)}
              className="bg-primary mt-4 self-center rounded px-4 py-2 text-white"
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
