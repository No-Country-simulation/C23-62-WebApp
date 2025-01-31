import React from 'react'

export const ContainAbout = () => {
  return (
    <div className=" grid grid-cols-2 place-items-center px-20 h-[500px]">
    <div className=" h-[100%] w-[100%] grid place-items-center px-10 ">
      <div className="grid gap-4 " >
        <div className="grid gap-2">
          <h1 className="font-bold text-2xl">Nuestra Historia</h1>
          <p>
          Fundada en 2025, nuestra plataforma nació con el objetivo de cerrar la brecha entre emprendedores visionarios e inversores apasionados. Creemos que cada idea tiene el potencial de cambiar el mundo y que, juntos, podemos construir un futuro más innovador y sostenible.
          </p>
        </div>
        
      </div>
    </div>
    <div className=" h-[100%] w-[100%] grid place-items-center px-10 ">


    <img
      src="public/fund.jpg"
      alt="Ejemplo de imagen"
      className="w-[100%] h-auto rounded-md shadow-md"
    />


    </div>
  </div>
  )
}
