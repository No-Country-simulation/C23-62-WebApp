package com.example.starfund.controllers;

import com.example.starfund.domain.model.dto.InversionDTO;
import com.example.starfund.service.InversionServiceImpl;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@AllArgsConstructor // Usamos el constructor para la inyección automática
@RequestMapping("/api/v1/startups")
@CrossOrigin(origins = "*") // Permitir solicitudes de cualquier origen
@RestController
public class InversionController {
    private final InversionServiceImpl inversionService;

    @GetMapping("/inversiones")
    public ResponseEntity<List<InversionDTO>> listarInversiones() {
        try {
            List<InversionDTO> inversiones = inversionService.listarInversiones();
            if (inversiones.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            return new ResponseEntity<>(inversiones, HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace(); // Para registrar el error en consola
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
 