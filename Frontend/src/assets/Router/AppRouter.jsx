import React from "react";
import { useLocation, Route, Routes } from "react-router-dom";
import Nav from "../ui/components/Nav";
import Home from "../pages/Home";
import { Project } from "../pages/Project";
import { About } from "../pages/About";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";

const AppRouter = () => {
  const location = useLocation(); // Obtiene la ruta actual

  return (
    <div>
      {/* Renderiza el Nav solo si no estás en /login o /register */}
      {location.pathname !== "/login" && location.pathname !== "/register" && <Nav />}
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Project />} />
          <Route path="/about" element={<About />} />
          
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register/>} />
        </Routes>
      </div>
    </div>
  );
};

export default AppRouter;