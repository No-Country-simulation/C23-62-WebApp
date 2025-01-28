import React from 'react'

export const Pluss = () => {
  return (
    <div className="  mx-20 mt-40 grid gap-4">
        <div className=" flex justify-center">
          <h1 className="text-center text-[40px] font-bold w-[70%] ">
            Conviértete en el motor de las <span className="text-[#00B4D8]">startups</span>  más prometedoras.
          </h1>
        </div>
        <div className="flex justify-center">
          <h2 className=" text-center text-semibold w-[70%] mx-full">
            Como inversor, tendrás la oportunidad de descubrir proyectos
            innovadores, apoyar ideas que cambian el mundo y contribuir al
            crecimiento de startups en etapas cruciales. ¡Tu impacto puede
            marcar la diferencia!{" "}
          </h2>
        </div>

        <div className=" flex justify-center">
          <button className="px-6 py-3 my-4 text-[20px] bg-[#00B4D8] text-white font-medium rounded-md hover:bg-blue-700 transition">
            Explorar Proyectos
          </button>
        </div>
      </div>
  )
}
