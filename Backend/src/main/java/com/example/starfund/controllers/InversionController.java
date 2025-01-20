package com.example.starfund.controllers;

import com.example.starfund.domain.model.dto.InversionDTO;
import com.example.starfund.domain.model.entity.Inversion;
import com.example.starfund.service.InversionServiceImpl;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@AllArgsConstructor
@RequestMapping("/api/v1/startups")
@CrossOrigin(origins = "*")
@RestController
public class InversionController {

    @Autowired
    private final InversionServiceImpl inversionService;


    @GetMapping("/inversiones")
    public ResponseEntity<List<InversionDTO>> listarInversiones(){
        List<InversionDTO> inversiones = inversionService.listarInversiones();

        if(inversiones.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }

        return new ResponseEntity<>(inversiones, HttpStatus.OK);

    }











}
