import React from 'react'

export const HeaderAbout = () => {
  return (
    <div className='flex  justify-center min-h-screen bg-gray-100'>

<div className=" flex justify-center items-center w-full h-[400px] mt-4 mx-20 rounded-[30px] bg-cover bg-center relative" style={{ backgroundImage: "url('public/rascacielos-angulo-vista_1359-1020.jpg')" }} >

<div className="absolute inset-0 bg-white/50"></div>

<div className='grid  w-[80%] gap-2'>

<h1 className='text-center text-5xl font-bold z-10 '>Sobre Nosotros</h1>    
<h2 className='text-center text-xl z-10'>Nuestra misión es conectar a inversores con startups innovadoras, creando oportunidades y generando impacto positivo.</h2>    

</div>
    
    </div>


    </div>
  )
}
