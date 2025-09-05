import { Outlet } from 'react-router-dom';
import HomeFooter from '../components/HomeComponents/HomeFooter';
import HomeHeader from '../components/HomeComponents/HomeHeader';

export function HomeLayout() {
  return (
    <main className="flex min-h-screen flex-col">
      <HomeHeader />
      <section className="flex-1">
        <Outlet />
      </section>
      <HomeFooter />
    </main>
  );
}

export default HomeLayout;
