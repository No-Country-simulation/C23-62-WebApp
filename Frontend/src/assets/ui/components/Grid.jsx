export const Grid = () => {
  return (
    <div>
      <div className="grid grid-cols-[66%_34%] mx-20 mt-28 gap-4 ">
        <div className="w-full h-60 bg-[#00B4D8] rounded-xl grid items-center">
          <div>
            <h1 className=" text-center text-[40px] font-bold ">
              10,000+ Inversiones Realizadas
            </h1>
            <h2 className="text-center  text-semibold">
              Apoya proyectos innovadores y sé parte del cambio.
            </h2>
          </div>
        </div>
        <div className="w-full h-60 bg-[#7898FA] rounded-xl  grid items-center">
          <div>
            <h1 className=" text-center text-[40px] font-bold ">100% Seguro</h1>

            <div className="flex justify-center">
              <h2 className=" text-center text-semibold w-[70%] mx-full">
                Transacciones protegidas para tu tranquilidad.
              </h2>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-[50%_50%] mx-20 mt-0 gap-4 py-4">
        <div className="w-full h-60 bg-[#1E1F24] rounded-xl grid items-center">
          <div>
            <h1 className=" text-center text-[40px] font-bold  text-white">
              Rendimiento Transparente
            </h1>

            <div className="flex justify-center">
              <h2 className=" text-center text-semibold w-[70%] mx-full text-white">
                Monitorea el progreso de tus inversiones en tiempo real.
              </h2>
            </div>
          </div>
        </div>
        <div className="w-full h-60 bg-[#3E41F8] rounded-xl grid items-center ">
          <div>
            <h1 className=" text-center text-[40px] font-bold  text-white">
              1,000+ Startups Exitosas
            </h1>

            <div className="flex justify-center">
              <h2 className=" text-center text-semibold w-[70%] mx-full text-white">
                Impulsa ideas que marcan la diferencia.
              </h2>
            </div>
          </div>
        </div>{" "}
        {/* Ajuste aquí */}
      </div>
    </div>
  );
};
