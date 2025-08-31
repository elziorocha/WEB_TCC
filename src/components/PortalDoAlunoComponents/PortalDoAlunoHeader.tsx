import { LogOutIcon } from "lucide-react";
import logo from "../../assets/logo1.png";
import { logout } from "@/services/auth";
import { useNavigate } from "react-router-dom";

export const PortalDoAlunoHeader = () => {
  const navigate = useNavigate();

  const Logout = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      await logout();
      console.log("Logout efetuado com sucesso");

      navigate("/portal-do-aluno/login");
    } catch (err: unknown) {
      console.error("Falha no Logout", err);
    }
  };

  return (
    <main className="flex justify-between items-center bg-secondary text-whiteText py-3 px-6">
      <img src={logo} alt="logo da pérola do oeste" />
      <button
        onClick={Logout}
        className="flex items-center gap-1 px-2 py-1 rounded font-medium bg-tertiary hover:bg-red-700 transition-all"
      >
        <LogOutIcon />
        <span className="tracking-wide">Sair</span>
      </button>
    </main>
  );
};

export default PortalDoAlunoHeader;
