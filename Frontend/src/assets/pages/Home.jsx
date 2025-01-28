import React from "react";
import { CardProjects } from "../ui/components/CardProjects";
import { TestimonialCard } from "../ui/components/TestimonialCard";
import { Grid } from "../ui/components/Grid";
import { HeaderHome } from "../ui/components/HeaderHome";
import { Pluss } from "../ui/components/Pluss";
import { Footer } from "../ui/components/Footer";


const Home = () => {
  return (
    <div className="  mt-8">
      <HeaderHome />

      <div>
        <div className="items-center pt-20   ">
          <h2 className="text-center pb-4 text-3xl font-bold">
            Proyectos Destacados
          </h2>
        </div>
        <div className=" px-20 ">
          <CardProjects />
          
        </div>
      </div>

      <div className="bg-teal-100 w-full lg:h-[150px] md:h-[100px] flex justify-center items-center px-4 py-6">
        <h1 className="text-center text-[20px] sm:text-[25px] md:text-[25px] lg:text-[35px] font-bold leading-snug">
          Más de $10M recaudados para startups innovadoras.
        </h1>
      </div>

      <div className="items-center pt-20 pb-10 border  ">
        <div className=" px-[20%]">
          <h2 className=" text-center text-4xl font-bold">
            Lo que dicen nuestros inversores y emprendedores
          </h2>
          <p className=" text-xl text-gray-500 font-semibold">
            Historias reales de personas que han transformado ideas en éxitos.
          </p>
        </div>
      </div>

      <TestimonialCard />
      <Grid />
      <Pluss />
      <Footer/>
    
    </div>
  );
};

export default Home;
