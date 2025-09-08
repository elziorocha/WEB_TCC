import { LogOutIcon } from 'lucide-react';
import logo from '../../assets/logo1.png';
import { logout } from '@/services/AuthApi/auth';
import { useNavigate } from 'react-router-dom';

export const PortalDoAlunoHeader = () => {
  const navigate = useNavigate();

  const Logout = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      await logout();

      navigate('/portal-do-aluno/login');
    } catch (err: unknown) {
      console.error('Falha no Logout', err);
    }
  };

  return (
    <main className="bg-secondary text-whiteText flex items-center justify-between px-6 py-3">
      <img src={logo} alt="logo da pérola do oeste" />
      <button
        onClick={Logout}
        className="bg-tertiary flex items-center gap-1 rounded px-2 py-1 font-medium transition-all hover:bg-red-700"
      >
        <LogOutIcon />
        <span className="tracking-wide">Sair</span>
      </button>
    </main>
  );
};

export default PortalDoAlunoHeader;
