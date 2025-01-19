package com.example.starfund.domain.model.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "startup")
public class Startup {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "startup_id")
    private int id;

    @Column(name = "nombre", nullable = false, columnDefinition = "VARCHAR(100)")
    private String nombre;

    @Column(name = "descripcion", nullable = false, columnDefinition = "TEXT")
    private String descripcion;

    @Column(name = "comentarios", nullable = false, columnDefinition = "TEXT")
    private String comentarios;

    @Column(name = "valor_recaudar", nullable = false, columnDefinition = "DECIMAL(15,2)")
    private double valorRecaudar;

    @Column(name = "url_foto", columnDefinition = "VARCHAR(255)")
    private String urlFoto;

    @Column(name = "fecha_creacion", nullable = false, updatable = false, columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP", insertable = false)
    private String fechaCreacion;

    @Column(name = "monto_acumulado", nullable = false, columnDefinition = "DECIMAL(15,2)")
    private double montoAcumulado;


    @ManyToMany (mappedBy = "Inversionista")
    private List<Inversionista> inversionistasSuscriptos = new ArrayList<>();



    @ManyToMany (mappedBy = "Inversion")
    private List<Inversion> inversiones = new ArrayList<>();


}
