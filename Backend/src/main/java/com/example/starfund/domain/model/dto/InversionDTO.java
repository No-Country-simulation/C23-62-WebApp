package com.example.starfund.domain.model.dto;
import lombok.AllArgsConstructor;
import lombok.Getter;

import lombok.Setter;

import java.util.Date;

@AllArgsConstructor
@Getter
@Setter
public class InversionDTO {
    private Long id;
    private Long inversionistaId;
    private Long startupId;
    private double valorInvertido;
    private Date fechaInversion;

}
