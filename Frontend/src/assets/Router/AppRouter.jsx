import React from "react";
import Nav from "../ui/components/Nav";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import { Project } from "../pages/Project";
import { About } from "../pages/About";

const AppRouter = () => {
  return (
    <div>
      <Nav />
        <div >


      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/project" element={<Project/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
        </div>
    </div>
  );
};

export default AppRouter;
