package com.example.starfund.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class InicioController {

    @GetMapping("/")
    public String mostrarPaginaInicio() {
        // Retorna el nombre del archivo HTML ubicado en src/main/resources/templates
        return "inicio";
    }
}

