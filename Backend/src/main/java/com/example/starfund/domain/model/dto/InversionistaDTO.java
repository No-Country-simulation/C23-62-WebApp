package com.example.starfund.domain.model.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class InversionistaDTO {

    private Long inversionistaId;
    private String nombre;
    private String apellido;
    private String usuario;
    private String email;
    private String telefono;
    private Date fechaNacimiento;
    private Date fechaRegistro;
    private double montoTotalInvertido;
  
}
