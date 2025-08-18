import { createBrowserRouter } from "react-router-dom";
import Inicio from "./pages/HomePage/Inicio";
import Error from "./pages/Error";
import HomeLayout from "./_layouts/HomeLayout";
import FaleConosco from "./pages/HomePage/FaleConosco";
import PortalDoAlunoLayout from "./_layouts/PortalDoAlunoLayout";
import PortalDoAlunoDashboard from "./pages/PortalDoAluno/PortalDoAlunoDashboard";
import PortalDoAlunoRegistro from "./pages/HomePage/PortalDoAlunoRegistro";
import MattosLeao from "./pages/HomePage/HorariosItinerarios/MattosLeao";
import HorariosItinerarios from "./pages/HomePage/HorariosItinerarios";
import { Tarifas } from "./pages/HomePage/Tarifas";
import NossaHistoria from "./pages/HomePage/NossaHistoria";
import PortalDoAlunoLogin from "./pages/HomePage/PortalDoAlunoLogin";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Inicio /> },
      { path: "/fale-conosco", element: <FaleConosco /> },
      { path: "/tarifas", element: <Tarifas /> },
      { path: "/nossa-historia", element: <NossaHistoria /> },
      { path: "/horarios-itinerarios", element: <HorariosItinerarios /> },
      { path: "/horarios-itinerarios/mattos-leao", element: <MattosLeao /> },
      { path: "/portal-do-aluno/login", element: <PortalDoAlunoLogin /> },
      {
        path: "/portal-do-aluno/registrar",
        element: <PortalDoAlunoRegistro />,
      },
    ],
  },
  {
    path: "/portal-do-aluno/:id",
    element: <PortalDoAlunoLayout />,
    errorElement: <Error />,
    children: [
      { path: "/portal-do-aluno/:id", element: <PortalDoAlunoDashboard /> },
    ],
  },
]);
