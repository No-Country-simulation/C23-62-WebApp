export const CardProjects = ({ array }) => {
const projectos = array;

  return(
  <div className="h-auto px-20 py-8 pt-4">
    <div className="grid grid-cols-1 gap-8 px-4 md:grid-cols-2 lg:grid-cols-3">
      
      {projectos.map((projecto, index) => (
        <div
        key={projecto.startup_id + index }
        className="w-full h-auto bg-white border border-gray-300 rounded-md shadow-lg"
        >
          
          
          {/* Header */}
          <div className="flex items-center gap-4 p-4 border-b border-gray-200">
            
            <img
              src={projecto.urlFoto}
              alt="Avatar"
              className="object-cover w-12 h-12 rounded-full"
            />
            <h3 className="text-xl font-bold">{projecto.nombre}</h3>
          </div>

          {/* Imagen */}
          <div className="w-full">
            <img
              src={projecto.urlFoto}
              alt="Imagen del proyecto"
              className="object-cover w-full h-48"
            />
          </div>

          {/* Subtítulo y texto */}
          <div className="p-4">
            <h4 className="text-lg font-semibold">{projecto.comentarios}</h4>
            <p className="mt-2 text-sm text-gray-600">{projecto.descripcion}</p>

            {/* Barra de progreso */}
            <div className="mt-4">
              <div className="w-full h-2 bg-gray-200 rounded-full">
                <div
                  className="h-2 bg-blue-600 rounded-full"
                  style={{
                    width: `${(projecto.montoAcumulado / projecto.valorRecaudar) * 100
                      }%`,
                      maxWidth:"100%"
                  }}
                ></div>
              </div>
              {  (projecto.montoAcumulado )}
              <span className="block mt-2 text-sm text-gray-500">
                
                {`${(projecto.montoAcumulado /projecto.valorRecaudar ).toFixed(2) * 100}`}%
                completado
              </span>
            </div>

            <div className="mt-4 text-sm font-medium text-gray-700">
              Meta:{" "}
              <span className="text-green-600">{projecto.valorRecaudar}</span>
            </div>

            {/* Botones */}
            <div className="flex justify-end gap-4 mt-6">
              <button className="px-4 py-2 text-gray-800 transition bg-gray-200 rounded-md hover:bg-gray-300">
                Ver más detalles
              </button>
              <button className="px-4 py-2 bg-[#00B4D8] text-white rounded-md hover:bg-blue-700 transition">
                Invertir
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
)};