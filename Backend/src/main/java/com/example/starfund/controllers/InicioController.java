package com.example.starfund.controllers;

import lombok.AllArgsConstructor;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import org.springframework.ui.Model;

@AllArgsConstructor
@RequestMapping("/api/v1/startups")
@CrossOrigin(origins = "*")
@RestController
public class InicioController {

          @GetMapping("/")
        public String mostrarPaginaInicio(Model model) {
            model.addAttribute("mensaje", "Bienvenido al portal de Startups");
            return "index"; // Thymeleaf buscará "inicio.html" en "src/main/resources/templates/"
    }
}