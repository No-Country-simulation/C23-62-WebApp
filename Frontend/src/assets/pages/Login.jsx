import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // 👈 Hook para redirigir

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await fetch('http://localhost:8080/api/v1/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ usuario: email, contrasena: password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Error en el inicio de sesión');
      }

      alert('Inicio de sesión exitoso');
      navigate('/home'); // 👈 Redirigir al home si el login es exitoso
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="grid grid-cols-3 place-content-center bg-white border border-red-500 h-screen">
      <Link
        className="absolute right-0 m-8 bg-[#7898fa56] px-4 py-2 border border-[#7898FA] rounded-full font-bold text-[#3E41F8]"
        to="/"
      >
        <div>X</div>
      </Link>

      <div></div>

      <form onSubmit={handleSubmit} className="grid place-content-center border border-gray-200 bg-white rounded-xl gap-6 p-4 shadow-xl m-0">
        <div className="grid gap-4">
          <h2 className="text-center font-bold text-2xl">Únete a nuestra comunidad</h2>
          <p className="text-center">Inicia sesión para comenzar a invertir en startups prometedoras.</p>
        </div>

        {error && <p className="text-red-500 text-center">{error}</p>}

        <input
          className="text-xl px-4 py-2 border border-gray-500 rounded-[20px] w-full"
          type="text"
          placeholder="Usuario"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="text-xl px-4 py-2 border border-gray-500 rounded-[20px] w-full"
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="flex items-center gap-2">
          <input className="w-4 border" type="checkbox" />
          <p>Recuérdame.</p>
        </div>

        <div className="border grid gap-2">
          <button type="submit" className="bg-[#00B4D8] font-bold w-full text-white px-6 py-2 rounded-[20px] hover:bg-blue-600">
            Iniciar Sesión
          </button>
          <p>
            ¿No tienes cuenta?{' '}
            <Link to="/register" className="text-blue-800 font-bold">
              Regístrate aquí
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};
