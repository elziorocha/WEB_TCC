import { ArrowLeftIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PortalDoAlunoAlterarSenha } from '@/components/PortalDoAlunoComponents/PortalDoAlunoAlterarSenha';
import { PortalDoAlunoAlterarCartao } from '@/components/PortalDoAlunoComponents/PortalDoAlunoAlterarCartao';

export const PortalDoAlunoConfiguracoes = () => {
  return (
    <main className="flex flex-col gap-4 p-3">
      <Link
        to="/portal-do-aluno/dashboard"
        className="bg-primary text-blackText self-start rounded-lg px-3 py-1.5 text-sm shadow-md"
      >
        <div className="text-yellowText flex items-center gap-1 font-semibold">
          <ArrowLeftIcon className="size-5" />
          <span>Voltar</span>
        </div>
      </Link>

      <section className="mt-8 flex flex-col justify-center gap-10 sm:flex-row">
        <PortalDoAlunoAlterarSenha />

        <PortalDoAlunoAlterarCartao />
      </section>
    </main>
  );
};
