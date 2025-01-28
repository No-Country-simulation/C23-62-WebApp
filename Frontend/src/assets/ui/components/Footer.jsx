import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiFacebook, FiLinkedin } from "react-icons/fi";

export const Footer = () => {
  return (
    <div className="bg-gray-200 pb-28 mt-20">
      <div className="grid grid-cols-[30%_17.5%_17.5%_17.5%_17.5%]  mt-0 px-20 py-10 ">
        <div className="w-full h-60 rounded-xl grid p-t-4  ">
          <div className="">
            <div className="mb-4">
              <h1 className="text-4xl font-bold">Logo</h1>
            </div>

            <div className="flex gap-4 text-2xl mb-6">
              <FaInstagram /> <FiFacebook /> <FaXTwitter /> <FiLinkedin />
            </div>
            <h4 className="mb-4 text-xl">Teléfono: +1 (800) 123-4567</h4>
          </div>
        </div>

        <div className="w-full h-60 rounded-xl grid grid-cols-1 items-center gap-2">
          <div className=" h-full pl-4">
            <h2 className="text-xl font-bold" >Navegacion</h2>
          </div>
          <div className=" h-full pl-4">
            <p>Inicio</p>
          </div>
          <div className=" h-full pl-4">
            <p>Explorar proyectos</p>
          </div>
          <div className=" h-full pl-4">
            {" "}
            <p>Testimonios</p>{" "}
          </div>
          <div className=" h-full pl-4">
            {" "}
            <p>Registrate como inversor </p>{" "}
          </div>
          <div className=" h-full pl-4">
            {" "}
            <p>inicia Sesion</p>{" "}
          </div>
        </div>
        <div className="w-full h-60  rounded-xl grid grid-cols-1 items-center gap-2">

        <div className=" h-full pl-4">
            <h2 className="text-xl font-bold" >Categorias</h2>
          </div>
          <div className=" h-full pl-4">
            <p>Tecnologia</p>
          </div>
          <div className=" h-full pl-4">
            <p>Educacion</p>
          </div>
          <div className=" h-full pl-4">
            {" "}
            <p>Salud</p>{" "}
          </div>
          <div className=" h-full pl-4">
            {" "}
            <p>Medio Ambiente </p>{" "}
          </div>
          <div className=" h-full pl-4">
            {" "}
            <p>Alimentacion</p>{" "}
          </div>

        </div>
        <div className="w-full h-60  rounded-xl grid grid-cols-1 items-center gap-2 ">

        <div className=" h-full pl-4">
            <h2 className="text-xl font-bold" >Enlaces utiles</h2>
          </div>
          <div className=" h-full pl-4">
            <p>FAQs</p>
          </div>
          <div className=" h-full pl-4">
            <p>Soporte Tecnico</p>
          </div>
          <div className=" h-full pl-4">
            {" "}
            <p>Guia para Inversores</p>{" "}
          </div>
          <div className=" h-full pl-4">
            {" "}
            <p>Guia para Emprendedores</p>{" "}
          </div>
          <div className=" h-full pl-4">
            {" "}
            <p></p>{" "}
          </div>

        </div>
        <div className="w-full h-60  rounded-xl grid grid-cols-1 items-center gap-2 ">


        <div className=" h-full pl-4">
            <h2 className="text-xl font-bold" >Blog y Noticias</h2>
          </div>
          <div className=" h-full pl-4">
            <p>Ultimas noticias</p>
          </div>
          <div className=" h-full pl-4">
            <p>Historias de exitos</p>
          </div>
          <div className=" h-full pl-4">
            {" "}
            <p></p>{" "}
          </div>
          <div className=" h-full pl-4">
            {" "}
            <p> </p>{" "}
          </div>
          <div className="border  h-full pl-4">
            {" "}
            <p></p>{" "}
          </div>


        </div>
      </div>

      <div className=" flex justify-center">
        <h1 className="text-center text-[16px]  w-[70%] ">
          © 2025 Plataforma de Crowdfunding. Todos los derechos reservados.
        </h1>
      </div>
    </div>
  );
};
