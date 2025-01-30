package com.example.starfund.domain.model.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class inversionCreateDTO {
    
    private Long inversionistaId;
    private Long startupId;
    private double valorInvertido;

 
}
