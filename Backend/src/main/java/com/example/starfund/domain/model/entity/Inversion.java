        package com.example.starfund.domain.model.entity;


        import jakarta.persistence.*;
        import lombok.AllArgsConstructor;
        import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

        import java.util.Date;
        
        @NoArgsConstructor
        @AllArgsConstructor
        @Getter
        @Setter
        @Entity
        @Table(name = "inversion")
        public class Inversion {

                @Id
                @GeneratedValue(strategy = GenerationType.IDENTITY)
                @Column(name = "inversion_id")
                private Long inversion_id;

                @Column(name = "inversionista_id", nullable = false)
                private Long inversionistaId;
                
                
                @JoinColumn(name = "startup_id", nullable = false)
                private Long startupId;
                

                @Column(name = "valor_invertido", nullable = false, columnDefinition = "DECIMAL(15,2)")
                private double valorInvertido;

                @Column(name = "fecha_inversion", nullable = false, updatable = false, columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP", insertable = false)
                private Date fechaInversion;


                public Inversion(Long inversionistaId, Long startupId, Date fechaInversion, double valorInvertido) {
                        this.inversionistaId = inversionistaId;
                        this.startupId = startupId;
                        this.fechaInversion = fechaInversion;
                        this.valorInvertido = valorInvertido;
                }




        }
