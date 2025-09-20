import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const TitulosDasPaginas = {
  '/': 'Pérola do Oeste - Página Inicial',
  '/fale-conosco': 'Pérola do Oeste - Fale Conosco',
  '/tarifas': 'Pérola do Oeste - Tarifas',
  '/nossa-historia': 'Pérola do Oeste - Nossa História',
  '/horarios-itinerarios': 'Pérola do Oeste - Horários e Itinerários',
  '/horarios-itinerarios/mattos-leao': 'Pérola do Oeste - Mattos Leão',
  '/portal-do-aluno/login': 'Pérola do Oeste - Login do Aluno',
  '/portal-do-aluno/registrar': 'Pérola do Oeste - Registrar Aluno',
  '/portal-do-aluno/dashboard': 'Portal do Aluno - Dashboard',
  '/portal-do-aluno/aluno-perfil': 'Portal do Aluno - Perfil',
  '/portal-do-aluno/consultar-matricula':
    'Portal do Aluno - Consultar Matrículas',
  '/portal-do-aluno/nova-matricula': 'Portal do Aluno - Nova Matrícula',
  '/portal-do-aluno/consultar-processo':
    'Portal do Aluno - Consultar Processos',
  '/portal-do-aluno/novo-processo': 'Portal do Aluno - Novo Processo',
};

const getTituloPagina = (path: string): string => {
  return (
    TitulosDasPaginas[path as keyof typeof TitulosDasPaginas] ||
    'Pérola do Oeste'
  );
};

export const TituloPaginas = () => {
  const location = useLocation();

  useEffect(() => {
    const titulo = getTituloPagina(location.pathname);
    document.title = titulo;
  }, [location.pathname]);

  return null;
};
