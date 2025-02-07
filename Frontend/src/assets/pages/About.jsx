import React from "react";
import { HeaderAbout } from "../ui/components/HeaderAbout";
import { ContainAbout } from "../ui/components/ContainAbout";
import { ContainAboutButton } from "../ui/components/ContainAboutButton";
import { GridAbout } from "../ui/components/GridAbout";
import { FormAbout } from "../ui/components/FormAbout";
import { Footer } from "../ui/components/Footer";

export const About = () => {
  return (
    <div>
      <HeaderAbout />
      <hr class="border-t-4 border-gray-400 w-[50px]  mx-auto my-5"/>
      <ContainAbout />
      
      <ContainAboutButton />
      <hr class="border-t-4 border-gray-400 w-[50px]  mx-auto my-5"/>
      <div className=" w-full lg:h-[150px] md:h-[100px]   px-20 py-6">
        <h1 className=" text-[20px] sm:text-[25px] md:text-[25px] lg:text-[35px] font-bold leading-snug text-center">
          Nuestros valores
        </h1>
      </div>
      
      

      <GridAbout />
      <Footer />
    </div>
  );
};
