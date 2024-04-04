import React, { useState } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

import logo from "../../images/TEC1.png";

const FAQContent = ({ onClose }) => (
  <div className="bg-white p-4 rounded-md shadow-md">
    <div className="text-lg font-bold mb-2">¿Qué es Metamask y por qué necesito usarlo para realizar transacciones en la Testnet Sepolia?</div>
    <div className="mb-4">
      <p><strong>Respuesta:</strong> Metamask es una billetera de criptomonedas que funciona como una extensión de navegador y permite a los usuarios interactuar con aplicaciones descentralizadas (dApps) en la blockchain de Ethereum. En nuestro caso, para realizar transacciones en la Testnet Sepolia, Metamask es necesario para autenticar las transacciones y garantizar la seguridad de las operaciones en la red de prueba.</p>
    </div>
    <div className="text-lg font-bold mb-2">¿Cómo puedo instalar Metamask y configurarlo para la Testnet Sepolia?</div>
    <div className="mb-4">
      <p><strong>Respuesta:</strong> Puede instalar Metamask desde la tienda de extensiones de su navegador (Chrome, Firefox, Brave, etc.) y luego configurarlo para conectarse a la Testnet Sepolia. Una vez configurado correctamente, podrá utilizar Metamask para realizar transacciones en la Testnet sin problemas.</p>
    </div>
    <div className="text-lg font-bold mb-2">¿Qué precauciones de seguridad debo tomar al utilizar Metamask y realizar transacciones en la Testnet Sepolia?</div>
    <div>
      <p><strong>Respuesta:</strong> Es importante mantener su billetera Metamask segura y protegida. Asegúrese de utilizar contraseñas seguras y nunca comparta su frase de recuperación con nadie. Además, siempre verifique las direcciones de destino antes de confirmar una transacción.</p>
    </div>
    <div className="text-right mt-4">
      <button className="text-blue-500" onClick={onClose}>Cerrar</button>
    </div>
  </div>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [showFAQ, setShowFAQ] = useState(false);

  const handleInstallMetamask = () => {
    window.open("https://metamask.io/download/", "_blank");
  };

  const handleOpenEtherscan = () => {
    window.open("https://sepolia.etherscan.io/", "_blank");
  };

  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4 relative z-50">
      <div className="md:flex-[0.3] flex-initial justify-center items-center">
        <img src={logo} alt="logo" className="w-20 cursor-pointer" />
      </div>
      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
        {["Instalar Metamask", "Etherscan", "FAQ"].map((item, index) => (
          <li key={item + index} className="mx-4 cursor-pointer text-lg" onClick={() => {
            if (item === "Instalar Metamask") handleInstallMetamask();
            else if (item === "Etherscan") handleOpenEtherscan();
            else if (item === "FAQ") setShowFAQ(true);
          }}>{item}</li>
        ))}
      </ul>
      <div className="flex relative">
        {!toggleMenu && (
          <HiMenuAlt4 fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <AiOutlineClose fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(false)} />
        )}
        {toggleMenu && (
          <ul
            className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
          >
            <li className="text-xl w-full my-2"><AiOutlineClose onClick={() => setToggleMenu(false)} /></li>
            {["Instalar Metamask", "Etherscan", "FAQ"].map(
              (item, index) => (
                <li key={item + index} className="my-2 text-lg cursor-pointer" onClick={() => {
                  if (item === "Instalar Metamask") handleInstallMetamask();
                  else if (item === "Etherscan") handleOpenEtherscan();
                  else if (item === "FAQ") setShowFAQ(true);
                }}>{item}</li>
              )
            )}
          </ul>
        )}
      </div>
      {showFAQ && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-md shadow-lg">
            <FAQContent onClose={() => setShowFAQ(false)} />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;