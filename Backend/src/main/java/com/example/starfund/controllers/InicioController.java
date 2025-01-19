package com.example.starfund.controllers;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@AllArgsConstructor
@RequestMapping("/api/v1/startups")
@CrossOrigin(origins = "*")
@RestController
public class InicioController {

    @GetMapping("/")
    public String mostrarPaginaInicio() {
        // Retorna el nombre del archivo HTML ubicado en src/main/resources/templates
        return "inicio";
    }




}

