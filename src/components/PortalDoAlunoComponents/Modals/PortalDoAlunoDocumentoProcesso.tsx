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
        <div className="fixed inset-0 flex items-center justify-center bg-black/50">
          <div className="h-[90%] w-[90%] rounded-xl bg-white p-4 shadow-lg">
            <iframe src={arquivoUrl} className="h-full w-full rounded" />
            <button
              onClick={() => setOpen(false)}
              className="bg-primary mt-2 rounded px-4 py-2 text-white"
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
