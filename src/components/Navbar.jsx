import React from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

import logo from "../../images/TEC1.png";

const NavBarItem = ({ title, classprops, handleClick }) => (
  <li className={`mx-4 cursor-pointer ${classprops}`} onClick={handleClick}>{title}</li>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  // Función para redirigir al usuario a la página de instalación de Metamask
  const handleInstallMetamask = () => {
    window.location.href = "https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=es&pli=1";
  };

  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4 relative">
      <div className="md:flex-[0.1] flex-initial justify-center items-center">
        <img src={logo} alt="logo" className="w-32 cursor-pointer" />
      </div>
      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
        {[].map((item, index) => (
          <NavBarItem key={item + index} title={item} />
        ))}
      </ul>
      <div className="absolute top-0 right-0 mr-10">
        {!toggleMenu && (
          <HiMenuAlt4 fontSize={100} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <AiOutlineClose fontSize={100} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(false)} />
        )}
      </div>
      {toggleMenu && (
        <ul
          className="z-10 fixed top-0 right-0 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
          flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
        >
          <li className="text-xl w-full my-2"><AiOutlineClose onClick={() => setToggleMenu(false)} /></li>
          <NavBarItem title="Instalar Metamask" classprops="my-2 text-lg" handleClick={handleInstallMetamask} />
        </ul>
      )}
    </nav>
  );
};

export default Navbar;