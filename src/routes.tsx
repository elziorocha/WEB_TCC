import { createBrowserRouter } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Error from "./pages/Error";
import HomeLayout from "./_layouts/HomeLayout";
import FaleConosco from "./pages/FaleConosco";
import PortalDoAlunoLayout from "./_layouts/PortalDoAlunoLayout";
import PortalDoAlunoDashboard from "./pages/PortalDoAlunoDashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Inicio /> },
      { path: "/fale-conosco", element: <FaleConosco /> },
    ],
  },
  {
    path: "/portal-do-aluno/:id",
    element: <PortalDoAlunoLayout />,
    errorElement: <Error />,
    children: [
      { path: "/portal-do-aluno/:id", element: <PortalDoAlunoDashboard />},
    ],
  }
]);
