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
public class InversionistaCreateDTO {

    private String nombre;
    private String apellido;
    private String usuario;
    private String contrasena;
    private String email;
    private String telefono;
    private Date fechaNacimiento;
    }
