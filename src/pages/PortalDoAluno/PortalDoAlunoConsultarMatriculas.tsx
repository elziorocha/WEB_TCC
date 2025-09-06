import { StudentsDataTable } from '@/components/PortalDoAlunoComponents/PortalDoAlunoDataTable';
import { ArrowLeftIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

export function PortalDoAlunoConsultarMatriculas() {
  return (
    <main className="flex flex-col gap-4 p-4">
      <Link
        to="/portal-do-aluno/dashboard"
        className="bg-primary text-blackText self-start rounded-lg px-3 py-1.5 text-sm shadow-sm"
      >
        <div className="flex items-center gap-1">
          <ArrowLeftIcon className="size-5" /> <span>Voltar</span>
        </div>
      </Link>

      <StudentsDataTable />
    </main>
  );
}
