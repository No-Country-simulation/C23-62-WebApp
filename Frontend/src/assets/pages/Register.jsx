import React from 'react'
import { Link } from 'react-router-dom'

export const Register = () => {
  return (
    <div className='grid place-content-center  border border-red-500 h-screen'>

<Link className='absolute right-0 m-8 bg-[#7898fa56] px-4 py-2  border border-[#7898FA] rounded-full font-bold text-[#3E41F8]' to="/">

<div > 
       X
        </div>        
        </Link> 


    <form action="" className="grid place-content-center border border-gray-200 shadow-xl bg-white rounded-xl gap-4  p-4  shadow-xl ">
    
        <div className=' grid gap-4'>
    <h2 className='text-center font-bold text-2xl'>Únete a nuestra comunidad</h2>
    <p className='text-center'>Regístrate para comenzar a invertir en startups prometedoras.</p>
    
    
        </div>
            
            <input
              className="text-xl px-4 py-2 border border-gray-500  rounded-[20px] w-full "
              type="text"
              placeholder="Nombre y apellido"
            />
            <input
              className="text-xl px-4 py-2 border border-gray-500  rounded-[20px] w-full "
              type="email"
              placeholder="Correo electrónico"
            />
            <input
              className="text-xl px-4 py-2 border border-gray-500  rounded-[20px] w-full "
              type="password"
              placeholder="Contraseña"
            />
            <input
              className="text-xl px-4 py-2 border border-gray-500  rounded-[20px] w-full "
              type="password"
              placeholder="Confirmar contraseña"
            />

           
           <div className='grid gap-4'>

           

        <div className="flex items-center gap- w-[450px]">
          <input className="mx-2 w-4 border " type="checkbox" />
          <p>
            Estoy de acuerdo con la{" "}
            <span className="text-blue-800 font-bold">
              {" "}
              Póliza de Protección de Datos y los Términos de Uso del Sitio.{" "}
            </span>{" "}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <input className="w-4 border mx-2 " type="checkbox" />
          <p>Certifico que soy un inversor cualificado.</p>
        </div>




           </div>



            <div className=' grid gap-2'>
    
            <button
              type="submit"
              className="bg-[#00B4D8] font-bold w-full text-white px-6 py-2 rounded-[20px] hover:bg-blue-600"
              >
              Registrarse
            </button>
            <p>
            ¿Ya es un usuario registrado?{" "}
        <Link to="/login" className="text-blue-800 font-bold">
        Iniciar sesión
        </Link>
      </p>                </div>
          </form>
                       
              
            
        </div>
  )
}
