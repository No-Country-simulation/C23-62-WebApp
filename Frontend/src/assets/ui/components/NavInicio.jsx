import { useNavigate, Link } from "react-router-dom";

export default function NavInicio() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/login");
  };

  return (
    <nav className="flex items-center justify-between px-20 py-4 bg-gray-100 border-b border-gray-300">
      {/* Logo */}
      <div className="text-2xl font-bold text-blue-800">
        <Link to="/home">
          <img
            src="public/Logo.png" // Reemplaza con la URL de tu avatar
            alt="Avatar"
            className="w-40 "
          />
        </Link>
      </div>

      {/* Botón e avatar */}
      <div className="flex items-center space-x-4">
        <img
          src="public/Generic avatar.png" // Reemplaza con la URL de tu avatar
          alt="Avatar"
          className="w-10 h-10 rounded-full"
        />
        <button
          onClick={handleNavigate}
          className="bg-[#00B4D8] text-white font-bold px-4 py-2 rounded-full hover:bg-blue-600 transition"
        >
          Inicia Sesión
        </button>
      </div>
    </nav>
  );
}
