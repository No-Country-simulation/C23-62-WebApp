import { Footer } from "../ui/components/Footer";
import { FiFilter } from "react-icons/fi";
import { MdOutlineSearch } from "react-icons/md";
import { CardProjects } from "../ui/components/CardProjects";
import { useState, useEffect } from "react";

export const Project = () => {
  const [proyecto, setProyect] = useState([]);
  const [tecnologia, setTecnologia] = useState([]);
  const [descatados, setDestacados] = useState([]);
  const [alimentacion, setAlimentacion] = useState([]);
  const [educación, setEducacion] = useState([]);
  const [medioAmbiente, setMedioAmbiente] = useState([]);

  useEffect(() => {
    handleUp();
  }, []); // Solo ejecuta cuando el componente se monta por primera vez

  const handleUp = async () => {
    await fetch("http://localhost:8080/api/v1/startups/Startups/")
      .then((response) => response.json())
      .then((data) => {
        setProyect(data); // Almacena toda la data recibida
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  // Función selectora para clasificar los proyectos según su categoría
  function selectora(data) {
    data.forEach((element) => {
      switch (element.categoria) {
        case "tecnologia":
          setTecnologia((prev) =>
            prev.some((e) => e.startup_id === element.startup_id)
              ? prev
              : [...prev, element]
          );
          break;
        case "descatados":
          setDestacados((prev) =>
            prev.some((e) => e.startup_id === element.startup_id)
              ? prev
              : [...prev, element]
          );
          break;
        case "alimentacion":
          setAlimentacion((prev) =>
            prev.some((e) => e.startup_id === element.startup_id)
              ? prev
              : [...prev, element]
          );
          break;
        case "educación":
          setEducacion((prev) =>
            prev.some((e) => e.startup_id === element.startup_id)
              ? prev
              : [...prev, element]
          );
          break;
        case "medioambiente":
          setMedioAmbiente((prev) =>
            prev.some((e) => e.startup_id === element.startup_id)
              ? prev
              : [...prev, element]
          );
          break;
        default:
          break;
      }
    });
  }

  useEffect(() => {
    if (proyecto.length > 0) {
      selectora(proyecto); // Ejecuta la función cuando 'proyecto' se actualiza
    }
  }, [proyecto]); // Asegura que 'selectora' se ejecute solo cuando 'proyecto' cambia

  return (
    <div>
      <div className="bg-[#7898fa45] w-full lg:h-[150px] md:h-[100px] grid items-center px-20 py-6">
        <h1 className="text-[20px] sm:text-[25px] md:text-[25px] lg:text-[35px] font-bold leading-snug">
          Más de $10M recaudados para startups innovadoras.
        </h1>
        <h1 className="text-[20px] sm:text-[25px] md:text-[25px] lg:text-[20px] leading-snug">
          5 sectores distintos. Miles de negocios interesantes.
        </h1>
      </div>

      <div className="w-full lg:h-[150px] md:h-[100px] flex gap-4 items-center px-20 py-6">
        <div className="flex items-center h-full gap-4">
          <FiFilter className="text-3xl" />
          <span>Filtrar</span>
        </div>
        <div className="bg-gray-200 h-12 w-[400px] rounded-3xl flex justify-center items-center">
          <MdOutlineSearch className="p-0 text-2xl text-gray-500" />
          <form action="">
            <input
              type="text"
              className="bg-gray-200 focus:outline-none h-12 w-[350px] rounded-3xl px-2"
              placeholder="Busca tu siguiente proyecto"
            />
          </form>
        </div>
      </div>

      <div className="w-full lg:h-[150px] md:h-[100px] px-20 py-6">
        <h1 className="text-[20px] sm:text-[25px] md:text-[25px] lg:text-[35px] font-bold leading-snug">
          Destacados
        </h1>
      </div>

      {descatados && <CardProjects array={descatados} />}

      <div className="w-full lg:h-[150px] md:h-[100px] px-20 py-6">
        <h1 className="text-[20px] sm:text-[25px] md:text-[25px] lg:text-[35px] font-bold leading-snug">
          Tecnología
        </h1>
      </div>
      {tecnologia && <CardProjects array={tecnologia} />}

      <div className="w-full lg:h-[150px] md:h-[100px] px-20 py-6">
        <h1 className="text-[20px] sm:text-[25px] md:text-[25px] lg:text-[35px] font-bold leading-snug">
          Educación
        </h1>
      </div>
      {educación && <CardProjects array={educación} />}

      <div className="w-full lg:h-[150px] md:h-[100px] px-20 py-6">
        <h1 className="text-[20px] sm:text-[25px] md:text-[25px] lg:text-[35px] font-bold leading-snug">
          Medio Ambiente
        </h1>
      </div>
      {medioAmbiente && <CardProjects array={medioAmbiente} />}

      <div className="w-full lg:h-[150px] md:h-[100px] px-20 py-6">
        <h1 className="text-[20px] sm:text-[25px] md:text-[25px] lg:text-[35px] font-bold leading-snug">
          Alimentación
        </h1>
      </div>
      {alimentacion && <CardProjects array={alimentacion} />}

      <Footer />
    </div>
  );
};
