import { createBrowserRouter } from 'react-router-dom';
import { Error } from './pages/Error';
import { HomeLayout } from './_layouts/HomeLayout';
import { Inicio } from './pages/HomePage/Inicio';
import { FaleConosco } from './pages/HomePage/FaleConosco';
import { Tarifas } from './pages/HomePage/Tarifas';
import { HorariosItinerarios } from './pages/HomePage/HorariosItinerarios';
import { PortalDoAlunoRegistro } from './pages/HomePage/PortalDoAlunoRegistro';
import { PortalDoAlunoLogin } from './pages/HomePage/PortalDoAlunoLogin';
import { RotaProtegida } from './utils/rotaProtegida';
import { PortalDoAlunoDashboard } from './pages/PortalDoAluno/PortalDoAlunoDashboard';
import { PortalDoAlunoPerfil } from './pages/PortalDoAluno/PortalDoAlunoPerfil';
import { PortalDoAlunoLayout } from './_layouts/PortalDoAlunoLayout';
import { PortalDoAlunoNovaMatricula } from './pages/PortalDoAluno/PortalDoAlunoNovaMatricula';
import { PortalDoAlunoConsultarMatriculas } from './pages/PortalDoAluno/PortalDoAlunoConsultarMatriculas';
import { PortalDoAlunoConsultarProcessos } from './pages/PortalDoAluno/PortalDoAlunoConsultarProcessos';
import { SobreNos } from './pages/HomePage/SobreNos';
import { PortalDoAlunoConfiguracoes } from './pages/PortalDoAluno/PortalDoAlunoConfiguracoes';
import HorariosDataTable from './components/componentesUI/DataTableComponent';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      { path: '', element: <Inicio /> },
      { path: 'fale-conosco', element: <FaleConosco /> },
      { path: 'tarifas', element: <Tarifas /> },
      { path: 'sobre-nos', element: <SobreNos /> },
      { path: 'horarios-itinerarios', element: <HorariosItinerarios /> },
      { path: 'horarios-itinerarios/:linha', element: <HorariosDataTable /> },
      { path: 'portal-do-aluno/login', element: <PortalDoAlunoLogin /> },
      {
        path: 'portal-do-aluno/registrar',
        element: <PortalDoAlunoRegistro />,
      },
    ],
  },
  {
    path: 'portal-do-aluno/',
    element: (
      <RotaProtegida>
        <PortalDoAlunoLayout />
      </RotaProtegida>
    ),
    errorElement: <Error />,
    children: [
      {
        path: 'dashboard',
        element: <PortalDoAlunoDashboard />,
      },
      {
        path: 'aluno-perfil',
        element: <PortalDoAlunoPerfil />,
      },
      {
        path: 'consultar-matricula',
        element: <PortalDoAlunoConsultarMatriculas />,
      },
      {
        path: 'nova-matricula',
        element: <PortalDoAlunoNovaMatricula />,
      },
      {
        path: 'consultar-processo',
        element: <PortalDoAlunoConsultarProcessos />,
      },
      {
        path: 'configuracoes',
        element: <PortalDoAlunoConfiguracoes />,
      },
    ],
  },
]);
