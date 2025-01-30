    package com.example.starfund.domain.model.entity;

    import jakarta.persistence.*;
    import lombok.AllArgsConstructor;
    import lombok.Getter;
    import lombok.NoArgsConstructor;
    import lombok.Setter;

    import java.util.ArrayList;
    import java.util.Date;
    import java.util.List;

    @AllArgsConstructor
    @NoArgsConstructor
    @Getter
    @Setter
    @Entity
    @Table(name = "inversionista")
    public class Inversionista {

        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        @Column(name = "inversionista_id")
        private Long inversionista_id;

        @Column(name = "nombre", nullable = false, columnDefinition = "VARCHAR(50)")
        private String nombre;

        @Column(name = "apellido", nullable = false, columnDefinition = "VARCHAR(50)")
        private String apellido;

        @Column(name = "usuario", nullable = false, unique = true, columnDefinition = "VARCHAR(50)")
        private String usuario;

        @Column(name = "contrasena", nullable = false, columnDefinition = "VARCHAR(255)")
        private String contrasena;

        @Column(name = "email", nullable = false, unique = true, columnDefinition = "VARCHAR(100)")
        private String email;

        @Column(name = "telefono", columnDefinition = "VARCHAR(20)")
        private String telefono;

        @Column(name = "fecha_nacimiento", nullable = false, columnDefinition = "DATE")
        private Date fechaNacimiento;

        @Column(name = "fecha_registro", nullable = false, updatable = false, columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP", insertable = false)
        private Date fechaRegistro;

        @Column(name = "monto_total_invertido", nullable = false, columnDefinition = "DECIMAL(15,2)")
        private double montoTotalInvertido = 0;

        @OneToMany(mappedBy = "inversionistaId")
        private List<Inversion> inversiones = new ArrayList<>();
        

        @ManyToMany
        @JoinTable(name = "inversionista_startup", joinColumns = @JoinColumn(name = "inversionistaId"), inverseJoinColumns = @JoinColumn(name = "startupId"))
        private List<Startup> startupsAgregados = new ArrayList<>();

    }