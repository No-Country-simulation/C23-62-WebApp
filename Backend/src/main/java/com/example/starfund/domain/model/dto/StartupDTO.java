package com.example.starfund.domain.model.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@AllArgsConstructor
@Getter
@Setter
public class StartupDTO {
    private int id;
    private String nombre;
    private String descripcion;
    private String categoria;
    private String comentarios;
    private double valorRecaudar;
    private String urlFoto;
    private String fechaCreacion;
    private double montoAcumulado;
    private List<Integer> inversionistasIds; // IDs de los inversionistas relacionados
}
