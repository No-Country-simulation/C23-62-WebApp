import React from "react";

export const ContainAboutButton = () => {
  return (
    <div className=" grid grid-cols-2 place-items-center px-20 h-[500px]">
      <div className=" h-[100%] w-[100%] grid place-items-center px-10 ">


      <img
        src="public/222.jpg"
        alt="Ejemplo de imagen"
        className="w-[100%] h-auto rounded-md shadow-md"
      />


      </div>
      <div className=" h-[100%] w-[100%] grid place-items-center px-10 ">
        <div className="grid gap-4 " >
          <div className="grid gap-2">
            <h1 className="font-bold text-2xl">Misión</h1>
            <p>
              Empoderar a emprendedores y crear un ecosistema de innovación
              mediante el acceso a financiamiento.
            </p>
          </div>
          <div className="grid gap-2">
            <h1 className="font-bold text-2xl">Visión</h1>
            <p>
              Convertirnos en la plataforma de crowdfunding líder que transforma
              ideas en realidades en todo el mundo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
