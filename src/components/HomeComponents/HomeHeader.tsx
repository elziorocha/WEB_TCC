import { Link } from 'react-router-dom';

import MenuComponent from '../componentesUI/MenuComponent';
import { BusIcon } from 'lucide-react';

export const HomeHeader = () => {
  return (
    <main className="bg-secondary text-whiteText sticky top-0 z-50 flex items-center justify-between py-4 pr-4 pl-1">
      <Link to="/" className="pl-4">
        <BusIcon className="size-10" />
      </Link>

      <MenuComponent />
    </main>
  );
};

export default HomeHeader;
