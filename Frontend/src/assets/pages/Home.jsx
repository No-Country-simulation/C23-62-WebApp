import { useEffect, useState } from "react";
import { CardProjects } from "../ui/components/CardProjects";
import { TestimonialCard } from "../ui/components/TestimonialCard";
import { Grid } from "../ui/components/Grid";
import { HeaderHome } from "../ui/components/HeaderHome";
import { Pluss } from "../ui/components/Pluss";
import { Footer } from "../ui/components/Footer";

const Home = () => {
  const [proyecto, setProyect] = useState([]);
  const [descatados, setDestacados] = useState([]);

  useEffect(() => {
    handleUp();
  }, []);
  const handleUp = async () => {
    await fetch("http://localhost:8080/api/v1/startups/Startups/")
      .then((response) => response.json())
      .then((data) => {
        setProyect(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  function selectora() {
    proyecto.forEach((element) => {
      switch (element.categoria) {
        case "descatados":
          setDestacados((prev) =>
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
      selectora();
    }
  }, [proyecto]);

  return (
    <div className="mt-8 ">
      <HeaderHome />

      <div>
        <div className="items-center pt-20 ">
          <h2 className="pb-4 text-3xl font-bold text-center">
            Proyectos Destacados
          </h2>
        </div>
        <div className="px-20 ">
          <CardProjects array={descatados} />
        </div>
      </div>

      <div className="bg-teal-100 w-full lg:h-[150px] md:h-[100px] flex justify-center items-center px-4 py-6">
        <h1 className="text-center text-[20px] sm:text-[25px] md:text-[25px] lg:text-[35px] font-bold leading-snug">
          Más de $10M recaudados para startups innovadoras.
        </h1>
      </div>

      <div className="items-center pt-20 pb-10 border ">
        <div className=" px-[20%]">
          <h2 className="text-4xl font-bold text-center ">
            Lo que dicen nuestros inversores y emprendedores
          </h2>
          <p className="text-xl font-semibold text-gray-500 ">
            Historias reales de personas que han transformado ideas en éxitos.
          </p>
        </div>
      </div>

      <TestimonialCard />
      <Grid />
      <Pluss />
      <Footer />
    </div>
  );
};

export default Home;
