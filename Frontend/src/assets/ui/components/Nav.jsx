import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  const handleNavigate = () => {
    navigate("/");
  };

  return (
    <nav className="flex items-center justify-between px-20 py-4 bg-gray-100 border-b border-gray-300">
      {/* Logo */}
      <div className="text-2xl font-bold text-blue-800">
      <img
          src="public/Logo.png" // Reemplaza con la URL de tu avatar
          alt="Avatar"
          className="w-40 "
        /></div>

      {/* Menú Hamburguesa */}
      <button
        className="md:hidden text-gray-700"
        onClick={toggleMenu}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Links de navegación */}
      <ul
        className={`flex space-x-10 md:flex md:space-x-10 ${
          isMenuOpen ? "flex-col space-y-4 absolute top-16 left-0 w-full bg-gray-100 px-4 py-4 md:static md:flex-row" : "hidden"
        }`}
      >
        <li>
          <Link
            to="/home"
            className="text-gray-700 hover:font-bold transition-colors"
          >
            Inicio
          </Link>
        </li>
        <li>
          <Link
            to="/project"
            className="text-gray-700 hover:font-bold transition-colors"
          >
            Explorar proyectos
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="text-gray-700 hover:font-bold transition-colors"
          >
            Sobre Nosotros
          </Link>
        </li>
      </ul>

      {/* Botón e avatar */}
      <div className="flex items-center space-x-4">
        <img
          src="public/perfil.jpg" // Reemplaza con la URL de tu avatar
          alt="Avatar"
          className="w-10 h-10 rounded-full"
        />
        <button onClick={handleNavigate} className="bg-[#00B4D8] text-white font-bold px-4 py-2 rounded-full hover:bg-blue-600 transition">
         Salir
        </button>
      </div>
    </nav>
  );
}

export default Nav;
