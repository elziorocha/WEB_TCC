import { Outlet } from 'react-router-dom';
import HomeFooter from '../components/HomeComponents/HomeFooter';
import HomeHeader from '../components/HomeComponents/HomeHeader';
import { TituloPaginas } from '@/utils/titulo-paginas';

export function HomeLayout() {
  return (
    <main className="flex min-h-screen flex-col">
      <TituloPaginas />
      <HomeHeader />
      <section className="flex-1">
        <Outlet />
      </section>
      <HomeFooter />
    </main>
  );
}
