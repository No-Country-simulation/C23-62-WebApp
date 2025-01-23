import React from 'react'

export const CardProjects = () => {
  return (
    <div className=" h-auto pt-4 py-8">
  

  <div className="flex justify-center gap-8">
    {/* Card */}
    
      <div
        className="border border-gray-300 w-[400px] h-auto rounded-md shadow-lg bg-white"
      >
        {/* Header */}
        <div className="flex items-center gap-4 p-4 border-b border-gray-200">
          <img
            src="public/image.png"
            alt="Avatar"
            className="w-12 h-12 rounded-full object-cover"
          />
          <h3 className="text-xl font-bold">Título del Proyecto</h3>
        </div>

        {/* Imagen */}
        <div className="w-full">
          <img
            src="public/vite.svg"
            alt="Imagen del proyecto"
            className="w-full h-48 object-cover"
          />
        </div>

        {/* Subtítulo y texto */}
        <div className="p-4">
          <h4 className="text-lg font-semibold">Subtítulo</h4>
          <p className="text-gray-600 mt-2 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate.
          </p>

          {/* Barra de progreso */}
          <div className="mt-4">
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full"
                style={{ width: "70%" }}
              ></div>
            </div>
            <span className="text-sm text-gray-500 mt-2 block">
              70% completado
            </span>
          </div>


        <div className="mt-4 text-sm font-medium text-gray-700">
            Meta: <span className="text-green-600">US$200</span>
          </div>

          {/* Botones */}
          <div className="flex justify-end gap-4 mt-6">
            <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition">
              Ver más detalles
            </button>
            <button className="px-4 py-2 bg-[#00B4D8] text-white rounded-md hover:bg-blue-700 transition">
              Invertir
            </button>
          </div>
        </div>
      </div>
  </div>
</div>
     
  )
}
