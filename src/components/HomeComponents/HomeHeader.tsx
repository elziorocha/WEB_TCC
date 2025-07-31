import { Menu } from "lucide-react";
import logo from "../..//assets/logo1.png";
import { useState } from "react";

export const HomeHeader = () => {
  const [menuAtivo, setMenuAtivo] = useState(false);

  return (
    <main className="py-4 px-5 bg-secondary text-whiteText flex items-center justify-between">
      <img src={logo} alt="logo da pérola do oeste" className="" />

      <Menu
        onClick={() => setMenuAtivo(!menuAtivo)}
        className={`size-10 p-1 rounded-lg block sm:block md:hidden z-50
          ${menuAtivo ? "bg-tertiary" : "bg-secondary"}`}
      />

      <section
        className={`absolute top-0 left-0 w-full h-full bg-secondary
          ${menuAtivo ? "opacity-100" : "opacity-0"}`}
        style={{ transition: "transform 0.3s ease, opacity 0.3s ease" }}
      >
        <ul className="flex flex-col sm:flex-col md:flex-row">
          <li>rota 1</li>
          <li>rota 2</li>
          <li>rota 3</li>
          <li>rota 4</li>
          <li>rota 5</li>
        </ul>
      </section>
    </main>
  );
};

export default HomeHeader;
