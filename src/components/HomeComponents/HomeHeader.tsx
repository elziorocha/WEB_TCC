import { Link } from 'react-router-dom';
import logo from '/assets/logo1.png';
import MenuComponent from '../componentesUI/MenuComponent';

export const HomeHeader = () => {
  return (
    <main className="bg-secondary text-whiteText sticky top-0 z-50 flex items-center justify-between py-4 pr-4 pl-1">
      <Link to="/">
        <img src={logo} alt="logo da pérola do oeste" />
      </Link>

      <MenuComponent />
    </main>
  );
};

export default HomeHeader;
