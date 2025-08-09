import logo from "../..//assets/logo1.png";
import MenuComponent from "../componentesUI/MenuComponent";

export const HomeHeader = () => {
  return (
    <main className="py-4 px-5 bg-secondary text-whiteText flex items-center justify-between">
      <img src={logo} alt="logo da pérola do oeste" className="" />

      <MenuComponent />
    </main>
  );
};

export default HomeHeader;
