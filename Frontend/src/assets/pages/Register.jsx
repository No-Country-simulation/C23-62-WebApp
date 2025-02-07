import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';



export const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    usuario: '',
    contrasena: '',
    email: '',
    telefono: '',
    fechaNacimiento: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      const response = await fetch('http://localhost:8080/api/v1/startups/inversionistas/crear', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Error al registrar el inversionista');
      }

      setSuccess('Registro exitoso. ¡Bienvenido!');
      setFormData({
        nombre: '',
        apellido: '',
        usuario: '',
        contrasena: '',
        email: '',
        telefono: '',
        fechaNacimiento: '',
      });
      setInterval(()=>{ 
        
        navigate("/home")
      },1000)
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="grid place-content-center border border-red-500 h-screen">
      <Link className="absolute right-0 m-8 bg-[#7898fa56] px-4 py-2 border border-[#7898FA] rounded-full font-bold text-[#3E41F8]" to="/">
        <div>X</div>
      </Link>

      <form onSubmit={handleSubmit} className="grid place-content-center border border-gray-200 shadow-xl bg-white rounded-xl gap-4 p-4">
        <div className="grid gap-4">
          <h2 className="text-center font-bold text-2xl">Únete a nuestra comunidad</h2>
          <p className="text-center">Regístrate para comenzar a invertir en startups prometedoras.</p>
        </div>

        <input className="text-xl px-4 py-2 border border-gray-500 rounded-[20px] w-full" type="text" name="nombre" placeholder="Nombre" required value={formData.nombre} onChange={handleChange} />
        <input className="text-xl px-4 py-2 border border-gray-500 rounded-[20px] w-full" type="text" name="apellido" placeholder="Apellido" required value={formData.apellido} onChange={handleChange} />
        <input className="text-xl px-4 py-2 border border-gray-500 rounded-[20px] w-full" type="text" name="usuario" placeholder="Usuario" required value={formData.usuario} onChange={handleChange} />
        <input className="text-xl px-4 py-2 border border-gray-500 rounded-[20px] w-full" type="email" name="email" placeholder="Correo electrónico" required value={formData.email} onChange={handleChange} />
        <input className="text-xl px-4 py-2 border border-gray-500 rounded-[20px] w-full" type="password" name="contrasena" placeholder="Contraseña" required value={formData.contrasena} onChange={handleChange} />
        <input className="text-xl px-4 py-2 border border-gray-500 rounded-[20px] w-full" type="tel" name="telefono" placeholder="Teléfono" required value={formData.telefono} onChange={handleChange} />
        <input className="text-xl px-4 py-2 border border-gray-500 rounded-[20px] w-full" type="date" name="fechaNacimiento" required value={formData.fechaNacimiento} onChange={handleChange} />

        <div className="flex items-center gap-2">
          <input className="w-4 border mx-2" type="checkbox" required />
          <p>Acepto la <span className="text-blue-800 font-bold">Póliza de Protección de Datos y los Términos de Uso del Sitio.</span></p>
        </div>

        <div className="grid gap-2">
          <button type="submit" className="bg-[#00B4D8] font-bold w-full text-white px-6 py-2 rounded-[20px] hover:bg-blue-600">Registrarse</button>
          <p>¿Ya tienes cuenta? <Link to="/login" className="text-blue-800 font-bold">Iniciar sesión</Link></p>
        </div>

        {error && <p className="text-red-500 text-center">{error}</p>}
        {success && <p className="text-green-500 text-center">{success}</p>}
      </form>
    </div>
  );
};
