import React from "react";

export const HeaderHome = () => {
  return (
    <div className="flex  flex-col md:flex-row md:justify-between border-b-4 pb-20 border-gray-300   px-20  ml-auto">
      {/* Div 1 */}
      <div className="w-[60%]  flex items-center justify-end ">
        <div className="space-y-4  h-[500px] ">
          <h1 className="text-[47px] font-bold text-center  md:text-left">
            Impulsa el futuro de las startups.
          </h1>
          <p className="text-gray-700 text-center text-[20px] md:text-left">
            Conecta con startups innovadoras, impulsa ideas brillantes y sé
            parte del crecimiento de proyectos que cambian el mundo.
          </p>
          <button className="px-6 py-3 my-4 text-[20px] bg-[#00B4D8] text-white font-medium rounded-md hover:bg-blue-700 transition">
            Explorar Proyectos
          </button>
        </div>
      </div>

      {/* Div 2 */}
      <div className="w-[100%]  flex justify-end">
        <img
          src="/image.png"
          alt="Ejemplo de imagen"
          className="w-[89%] h-auto rounded-md shadow-md"
        />
      </div>
    </div>
  );
};
