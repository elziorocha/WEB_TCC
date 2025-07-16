import { Outlet } from "react-router-dom";
import HomeFooter from "../components/HomeComponents/HomeFooter";
import HomeHeader from "../components/HomeComponents/HomeHeader";

export function HomeLayout() {
  return (
    <main className="flex flex-col">
      <HomeHeader />
      <Outlet />
      <HomeFooter />
    </main>
  );
}

export default HomeLayout;
