package com.example.starfund.controllers;

import com.example.starfund.domain.model.dto.InversionDTO;
import com.example.starfund.domain.model.dto.inversionCreateDTO;
import com.example.starfund.service.InversionServiceImpl;

import jakarta.persistence.EntityNotFoundException;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@AllArgsConstructor // Usamos el constructor para la inyección automática
@RequestMapping("/api/v1/startups/inversiones")
@CrossOrigin(origins = "*") // Permitir solicitudes de cualquier origen
@RestController
public class InversionController {
    private final InversionServiceImpl inversionService;

    @GetMapping("/")
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
        @PostMapping("/agregar")
    public ResponseEntity<String> agregarInversion(@RequestBody inversionCreateDTO request) {
        try {
            inversionService.agregarInversion(request.getInversionistaId(), request.getStartupId(), request.getValorInvertido());
            return ResponseEntity.status(HttpStatus.CREATED).body("Inversión agregada con éxito");
        } catch (EntityNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error al agregar la inversión");
        }
    }

    @DeleteMapping("/eliminar/{id}")
    public ResponseEntity<String> eliminarInversion(@PathVariable Long id) {
        try {
            inversionService.eliminarInversion(id);
            return ResponseEntity.status(HttpStatus.OK).body("Inversión eliminada con éxito");
        } catch (EntityNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error al eliminar la inversión");
        }
    }
    @PutMapping("/actualizar/{id}")
    public ResponseEntity<String> actualizarInversion(@PathVariable Long id, @RequestBody inversionCreateDTO request) {
        try {
            inversionService.actualizarInversion(id, request.getValorInvertido());
            return ResponseEntity.status(HttpStatus.OK).body("Inversión actualizada con éxito");
        } catch (EntityNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error al actualizar la inversión");
        }
    }
}

 