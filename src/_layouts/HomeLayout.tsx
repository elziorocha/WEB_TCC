import { Outlet } from "react-router-dom";
import HomeFooter from "../components/HomeComponents/HomeFooter";
import HomeHeader from "../components/HomeComponents/HomeHeader";

export function HomeLayout() {
  return (
    <main className="flex flex-col min-h-screen">
      <div className="p-2">
        <HomeHeader />
      </div>
      <section className="flex-1">
        <Outlet />
      </section>
      <HomeFooter />
    </main>
  );
}

export default HomeLayout;
