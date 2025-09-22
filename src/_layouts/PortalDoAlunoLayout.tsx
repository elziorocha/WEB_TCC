import { Outlet } from 'react-router-dom';
import PortalDoAlunoHeader from '../components/PortalDoAlunoComponents/PortalDoAlunoHeader';
import { TituloPaginas } from '@/utils/titulo-paginas';

export function PortalDoAlunoLayout() {
  return (
    <main className="flex flex-col">
      <TituloPaginas />
      <PortalDoAlunoHeader />
      <Outlet />
    </main>
  );
}
