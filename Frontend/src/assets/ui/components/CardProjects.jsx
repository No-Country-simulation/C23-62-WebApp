import React from 'react';

export const CardProjects = () => {
  // Arreglo con información de los proyectos
  const projects = [
    {
      id: 1,
      title: "Proyecto 1",
      subtitle: "Subtítulo 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.",
      image: "public/vite.svg",
      avatar: "public/image.png",
      progress: 70,
      goal: "US$500",
    },
    {
      id: 2,
      title: "Proyecto 2",
      subtitle: "Subtítulo 2",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
      image: "public/vite.svg",
      avatar: "public/image.png",
      progress: 50,
      goal: "US$300",
    },
    {
      id: 3,
      title: "Proyecto 3",
      subtitle: "Subtítulo 3",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
      image: "public/vite.svg",
      avatar: "public/image.png",
      progress: 85,
      goal: "US$800",
    },
  ];

  return (
    <div className="h-auto pt-4 px-20 py-8">
      {/* Grid con 3 columnas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="border border-gray-300 w-full h-auto rounded-md shadow-lg bg-white"
          >
            {/* Header */}
            <div className="flex items-center gap-4 p-4 border-b border-gray-200">
              <img
                src={project.avatar}
                alt="Avatar"
                className="w-12 h-12 rounded-full object-cover"
              />
              <h3 className="text-xl font-bold">{project.title}</h3>
            </div>

            {/* Imagen */}
            <div className="w-full">
              <img
                src={project.image}
                alt="Imagen del proyecto"
                className="w-full h-48 object-cover"
              />
            </div>

            {/* Subtítulo y texto */}
            <div className="p-4">
              <h4 className="text-lg font-semibold">{project.subtitle}</h4>
              <p className="text-gray-600 mt-2 text-sm">{project.description}</p>

              {/* Barra de progreso */}
              <div className="mt-4">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full"
                    style={{ width: `${project.progress}%` }}
                  ></div>
                </div>
                <span className="text-sm text-gray-500 mt-2 block">
                  {project.progress}% completado
                </span>
              </div>

              <div className="mt-4 text-sm font-medium text-gray-700">
                Meta: <span className="text-green-600">{project.goal}</span>
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
        ))}
      </div>
    </div>
  );
};
