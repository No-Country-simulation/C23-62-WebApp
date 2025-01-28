import React from 'react'
import { Footer } from '../ui/components/Footer'
import { FiFilter } from 'react-icons/fi'
import { MdOutlineSearch } from 'react-icons/md'
import { CardProjects } from '../ui/components/CardProjects'

export const Project = () => {
  return (
    <div>
        <div className="bg-[#7898fa45] w-full lg:h-[150px] md:h-[100px] grid  items-center px-20 py-6">
        <h1 className=" text-[20px] sm:text-[25px] md:text-[25px] lg:text-[35px] font-bold leading-snug">
          Más de $10M recaudados para startups innovadoras.
        </h1>
        <h1 className=" text-[20px] sm:text-[25px] md:text-[25px] lg:text-[20px] leading-snug">
        5 sectores distintos. Miles de negocios interesantes.
        </h1>
      </div>

      <div className=" w-full lg:h-[150px] md:h-[100px] flex gap-4 items-center px-20 py-6">
  <div className="flex gap-4 h-full items-center">
    <FiFilter className="text-3xl" /> 
    <span>Filtrar</span>
  </div>
  <div className="bg-gray-200 h-12 w-[400px] rounded-3xl flex justify-center items-center">
  <MdOutlineSearch className='text-2xl text-gray-500 p-0' />
    <form action="">
      <input type="text" className=" bg-gray-200 focus:outline-none h-12 w-[350px] rounded-3xl px-2 " placeholder='Busca tu siguiente proyecto' />
    </form>
  </div>
</div>

<div className=" w-full lg:h-[150px] md:h-[100px]  px-20 py-6">
        <h1 className=" text-[20px] sm:text-[25px] md:text-[25px] lg:text-[35px] font-bold leading-snug">
         Destacados
        </h1>
      </div>

<CardProjects/>

<div className=" w-full lg:h-[150px] md:h-[100px]  px-20 py-6">
        <h1 className=" text-[20px] sm:text-[25px] md:text-[25px] lg:text-[35px] font-bold leading-snug">
         Tecnologia
        </h1>
      </div>
    
<CardProjects/>


<div className=" w-full lg:h-[150px] md:h-[100px]  px-20 py-6">
        <h1 className=" text-[20px] sm:text-[25px] md:text-[25px] lg:text-[35px] font-bold leading-snug">
         Educacion
        </h1>
      </div>
    
<CardProjects/>


<div className=" w-full lg:h-[150px] md:h-[100px]  px-20 py-6">
        <h1 className=" text-[20px] sm:text-[25px] md:text-[25px] lg:text-[35px] font-bold leading-snug">
         Salud
        </h1>
      </div>
    
<CardProjects/>
<div className=" w-full lg:h-[150px] md:h-[100px]  px-20 py-6">
        <h1 className=" text-[20px] sm:text-[25px] md:text-[25px] lg:text-[35px] font-bold leading-snug">
         Medio Ambiente        </h1>
      </div>


<CardProjects/>


<Footer/>

    </div>
  )
}
