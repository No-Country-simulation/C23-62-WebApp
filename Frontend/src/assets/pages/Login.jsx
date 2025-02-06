import React from 'react'
import { Link } from 'react-router-dom'

export const Login = () => {
  return (
    <div className='grid grid-cols-3 place-content-center bg-white border border-red-500 h-screen '>


<Link className='absolute right-0 m-8 bg-[#7898fa56] px-4 py-2  border border-[#7898FA] rounded-full font-bold text-[#3E41F8]' to="/">

<div > 
       X
        </div>        
        </Link> 
<div></div>
<form action="" className="grid place-content-center border border-gray-200 bg-white rounded-xl gap-6  p-4  shadow-xl m-0 ">

    <div className=' grid gap-4'>
<h2 className='text-center font-bold text-2xl'>Únete a nuestra comunidad</h2>
<p className='text-center'>Regístrate para comenzar a invertir en startups prometedoras.</p>


    </div>
        
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
       
       
        <div className="flex items-center gap-2">
          <input className="w-4 border " type="checkbox" />
          <p>Recuerdame.</p>
        </div>
        <div className='border grid gap-2'>

        <button
          type="submit"
          className="bg-[#00B4D8] font-bold w-full text-white px-6 py-2 rounded-[20px] hover:bg-blue-600"
          >
          Iniciar Sesión
        </button>
         <p>
        ¿No tienes cuenta?{" "}
        <Link to="/register" className="text-blue-800 font-bold">
          Regístrate aquí
        </Link>
      </p>
            </div>
      </form>
                   
          
        
    </div>
  )
}
