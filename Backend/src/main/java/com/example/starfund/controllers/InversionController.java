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
    public ResponseEntity<List<InversionDTO>> listarInversiones(){
        // Llamamos al servicio para obtener la lista de inversiones
        List<InversionDTO> inversiones = inversionService.listarInversiones();

        // Verificamos si la lista está vacía
        if(inversiones.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT); // Retorna 204 si no hay datos
        }

        // Retorna la lista de inversiones con código de estado 200 (OK)
        return new ResponseEntity<>(inversiones, HttpStatus.OK);
    }}