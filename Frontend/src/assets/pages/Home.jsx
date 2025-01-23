import React from "react";
import { CardProjects } from "../ui/components/CardProjects";
import { TestimonialCard } from "../ui/components/TestimonialCard";

const Home = () => {


  return (
    <div className="  mt-8">
      <div className="flex  flex-col md:flex-row md:justify-between border-b-4 pb-20 border-gray-300   px-20  ml-auto">
        {/* Div 1 */}
        <div className="w-[60%]  flex items-center justify-end ">
          <div className="space-y-4  h-[500px] ">
            <h1 className="text-[47px] font-bold text-center  md:text-left">
              Impulsa el futuro de las startups.
            </h1>
            <p className="text-gray-700 text-center text-[20px] md:text-left">
              Lorem ipsum dolor sit amet, ivectus agaus sirius enefca
              consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua.
            </p>
            <button className="px-6 py-3 my-4 text-[20px] bg-[#00B4D8] text-white font-medium rounded-md hover:bg-blue-700 transition">
              Explorar Proyectos
            </button>
          </div>
        </div>

        {/* Div 2 */}
        <div className="w-[100%]  flex justify-end">
          <img
            src="public/image.png"
            alt="Ejemplo de imagen"
            className="w-[89%] h-auto rounded-md shadow-md"
          />
        </div>
      </div>

<div >
<div className="items-center pt-20   ">
    <h2 className="text-center pb-4 text-3xl font-bold">Proyectos Destacados</h2>
  </div>
<div className="flex justify-center  gap-8 ">


      <CardProjects/>
      <CardProjects/>
      <CardProjects/>
</div>
</div>

<div className="bg-teal-100 w-full lg:h-[150px] md:h-[100px] flex justify-center items-center px-4 py-6">
  <h1 className="text-center text-[20px] sm:text-[25px] md:text-[25px] lg:text-[35px] font-bold leading-snug">
    Más de $10M recaudados para startups innovadoras.
  </h1>
</div>
    
<div className="items-center pt-20 pb-10 border  ">

  <div className=" px-[20%]">

    <h2 className=" text-center text-4xl font-bold">Lo que dicen nuestros inversores y emprendedores</h2>
    <p className=" text-xl text-gray-500 font-semibold">Historias reales de personas que han transformado ideas en éxitos.</p>
  </div>
  </div>

<TestimonialCard/>



<div className="grid grid-cols-[66%_34%] mx-20 mt-28 gap-4 ">
  <div className="w-full h-60 bg-[#00B4D8] rounded-xl"></div>
  <div className="w-full h-60 bg-[#7898FA] rounded-xl"></div>
</div>
<div className="grid grid-cols-[50%_50%] mx-20 mt-0 gap-4 py-4">
  
  <div className="w-full h-60 bg-[#1E1F24] rounded-xl "></div>
  <div className="w-full h-60 bg-[#3E41F8] rounded-xl "></div> {/* Ajuste aquí */}
</div>









    </div>
  );
};

export default Home;
