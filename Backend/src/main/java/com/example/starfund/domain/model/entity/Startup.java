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

    @Column(name = "valor_recaudar", nullable = false, columnDefinition = "DECIMAL(10,2)")
    private double valorRecaudar;

    @Column(name = "url_foto", columnDefinition = "VARCHAR(255)")
    private String urlFoto;

    @Column(name = "fecha_creacion", nullable = false, updatable = false, columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP", insertable = false)
    private String fechaCreacion;

    @ManyToMany (mappedBy = "Inversionista")
    private List<Inversionista> inversionistas = new ArrayList<>();


}
