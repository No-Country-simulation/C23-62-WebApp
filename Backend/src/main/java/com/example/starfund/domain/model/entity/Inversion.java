package com.example.starfund.domain.model.entity;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "inversion")
public class Inversion {

        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        @Column(name = "inversion_id")
        private int id;

        @OneToOne(mappedBy = "inversionista_id")
        private Inversionista inversionistaId;

        @OneToOne(mappedBy = "startup_id")
        private Startup startupId;

        @Column(name = "valor_invertido", nullable = false, columnDefinition = "DECIMAL(15,2)")
        private double valorInvertido;

        @Column(name = "fecha_inversion", nullable = false, updatable = false, columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP", insertable = false)
        private Date fechaInversion;


        public Inversion(Inversionista inversionistaId, Startup startupId, Date fechaInversion, double valorInvertido) {
                this.inversionistaId = inversionistaId;
                this.startupId = startupId;
                this.fechaInversion = fechaInversion;
                this.valorInvertido = valorInvertido;
        }




}
