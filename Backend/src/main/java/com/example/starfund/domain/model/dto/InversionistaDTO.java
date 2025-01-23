package com.example.starfund.domain.model.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@AllArgsConstructor
@Getter
@Setter
public class InversionistaDTO {
    private int id;
    private String nombre;
    private String apellido;
    private String usuario;
    private String email;
    private String telefono;
    private double montoTotalInvertido;
    private List<Integer> startupsIds; // IDs de las startups relacionadas
}
