import logo from '../..//assets/logo1.png'

export const HomeHeader = () => {
  return <main className="py-4 px-8 bg-primary">
    {/* meu deus não tem uma imagem que preste pra coloca */}
    <img src={logo} alt="logo da pérola do oeste" className=''/>
  </main>;
};

export default HomeHeader;
