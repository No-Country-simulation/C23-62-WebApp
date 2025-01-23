import React from "react";
import Nav from "../ui/components/Nav";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";

const AppRouter = () => {
  return (
    <div>
      <Nav />
        <div >


      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/project" element={<h1>project</h1>} />
        <Route path="/about" element={<h1>about</h1>} />
      </Routes>
        </div>
    </div>
  );
};

export default AppRouter;
