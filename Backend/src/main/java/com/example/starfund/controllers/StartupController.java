package com.example.starfund.controllers;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;



import com.example.starfund.domain.model.entity.Startup;
import com.example.starfund.service.StartupServiceImpl;

import jakarta.persistence.EntityNotFoundException;
import lombok.AllArgsConstructor;

@AllArgsConstructor // Usamos el constructor para la inyección automática
@RequestMapping("/api/v1/startups/Startups")
@CrossOrigin(origins = "*") // Permitir solicitudes de cualquier origen
@RestController

    public class StartupController {
    private final StartupServiceImpl StartupService;


    @GetMapping("/")
public ResponseEntity<List<Startup>> listarTodosInversionistas() {
    try {
        // Obtener todos los inversionistas
        List<Startup> startups = StartupService.listarStartup();

        // Si no hay inversionistas
        if (startups.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }

        return new ResponseEntity<>(startups, HttpStatus.OK);
    } catch (Exception e) {
        e.printStackTrace(); // Registrar el error
        return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
@GetMapping("/{id}")
public ResponseEntity<Startup> obtenerInversionista(@PathVariable Long id) {
    try {
        Startup Startup = StartupService.buscarStartup(id);
        return new ResponseEntity<>(Startup, HttpStatus.OK);
    } catch (EntityNotFoundException e) {
        return new ResponseEntity<>(HttpStatus.NOT_FOUND); // Si no lo encuentra
    } catch (Exception e) {
        e.printStackTrace();
        return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
}
