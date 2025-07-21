import { Outlet } from "react-router-dom";
import PortalDoAlunoHeader from "../components/PortalDoAlunoComponents/PortalDoAlunoHeader";

export function PortalDoAlunoLayout() {
  return (
    <main className="flex flex-col">
      <PortalDoAlunoHeader />
      <Outlet />
    </main>
  );
}

export default PortalDoAlunoLayout;
