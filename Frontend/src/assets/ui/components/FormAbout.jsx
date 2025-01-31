import React from "react";

export const FormAbout = () => {
  return (
    <div className="grid ">
      <div className="">
        <h1 className="text-center font-bold text-2xl">
          ¿Listo para ser parte del cambio?
        </h1>
        <h2 className="text-center">
          Es gratis registrarse y obtener acceso completo a miles de
          emocionantes oportunidades de inversión.
        </h2>
      </div>

      <form action="" className="grid place-content-center gap-6  p-4">
        <input
          className="text-xl px-4 py-2 border border-gray-500 w-[410px] rounded-[20px]"
          type="text"
          placeholder="Nombre y Apellido"
        />
        <input
          className="text-xl px-4 py-2 border border-gray-500 w-[410px] rounded-[20px]"
          type="email"
          placeholder="Correo electrónico"
        />
        <input
          className="text-xl px-4 py-2 border border-gray-500 w-[410px] rounded-[20px]"
          type="password"
          placeholder="Contraseña"
        />
        <input
          className="text-xl px-4 py-2 border border-gray-500 w-[410px] rounded-[20px]"
          type="password"
          placeholder="Confirmar contraseña"
        />
        <div className="flex items-center gap-2 w-[450px]">
          <input className="w-4 border " type="checkbox" />
          <p>
            AEstoy de acuerdo con la{" "}
            <span className="text-blue-800 font-bold">
              {" "}
              Póliza de Protección de Datos y los Términos de Uso del Sitio.{" "}
            </span>{" "}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <input className="w-4 border " type="checkbox" />
          <p>Certifico que soy un inversor cualificado.</p>
        </div>
        <button
          type="submit"
          className="bg-[#00B4D8] font-bold text-white px-6 py-2 rounded-[20px] hover:bg-blue-600"
        >
          Registrarse
        </button>
      </form>
    </div>
  );
};
