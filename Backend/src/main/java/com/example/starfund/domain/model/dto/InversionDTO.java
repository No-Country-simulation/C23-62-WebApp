package com.example.starfund.domain.model.dto;

import com.example.starfund.domain.model.entity.Inversionista;
import com.example.starfund.domain.model.entity.Startup;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@AllArgsConstructor
@Getter
@Setter
public class InversionDTO {
    private int id;
    private Inversionista inversionistaId;
    private Startup startupId;
    private double valorInvertido;
    private Date fechaInversion;

}
