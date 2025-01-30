package com.example.starfund.controllers;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.starfund.domain.model.dto.InversionistaCreateDTO;
import com.example.starfund.domain.model.dto.InversionistaDTO;
import com.example.starfund.domain.model.dto.inversionCreateDTO;
import com.example.starfund.domain.model.entity.Inversion;
import com.example.starfund.domain.model.entity.Inversionista;
import com.example.starfund.domain.model.entity.Startup;
import com.example.starfund.service.InversionistaServiceImpl;

import org.springframework.web.bind.annotation.RequestBody;
import jakarta.persistence.EntityNotFoundException;
import lombok.AllArgsConstructor;

@AllArgsConstructor // Usamos el constructor para la inyección automática
@RequestMapping("/api/v1/startups/inversionistas")
@CrossOrigin(origins = "*") // Permitir solicitudes de cualquier origen
@RestController

public class InversionistaController {

    private final InversionistaServiceImpl inversionistaService;


    // gets
    @GetMapping("/")
    public ResponseEntity<List<InversionistaDTO>> listarTodosInversionistas() {
        try {
            // Obtener todos los inversionistas
            List<InversionistaDTO> inversionistas = inversionistaService.listarTodosInversionistas();

            // Si no hay inversionistas
            if (inversionistas.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }

            return new ResponseEntity<>(inversionistas, HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace(); // Registrar el error
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<InversionistaDTO> obtenerInversionista(@PathVariable Long id) {
        try {
            InversionistaDTO inversionistaDTO = inversionistaService.buscarInversionista(id);
            return new ResponseEntity<>(inversionistaDTO, HttpStatus.OK);
        } catch (EntityNotFoundException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND); // Si no lo encuentra
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/{id}/inversiones")
    public ResponseEntity<List<Inversion>> listarInversionesPorId(@PathVariable Long id) {
        try {
            // Obtener las inversiones para el id proporcionado
            Inversionista inversionistaBuscado = inversionistaService.buscarInversionistaCompleto(id);
            List<Inversion> inversiones = inversionistaBuscado.getInversiones();

            // Si no se encuentran inversiones para ese id
            if (inversiones.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }

            return new ResponseEntity<>(inversiones, HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace(); // Registrar el error
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/{id}/startups")
    public ResponseEntity<List<Startup>> listarStarupsPorId(@PathVariable Long id) {
        try {
            // Obtener las inversiones para el id proporcionado
            Inversionista inversionistaBuscado = inversionistaService.buscarInversionistaCompleto(id);
            List<Startup> startups = inversionistaBuscado.getStartupsAgregados();

            // Si no se encuentran inversiones para ese id
            if (startups.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }

            return new ResponseEntity<>(startups, HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace(); // Registrar el error
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/crear")
    public ResponseEntity<Inversionista> crearInversionista(
            @RequestBody InversionistaCreateDTO inversionistaCreateDTO) {
        try {
            Inversionista nuevoInversionista = inversionistaService.crearInversionista(inversionistaCreateDTO);
            return new ResponseEntity<>(nuevoInversionista, HttpStatus.CREATED);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @DeleteMapping("/eliminar/{id}")
    public ResponseEntity<Void> eliminarInversionista(@PathVariable Long id) {
        try {
            inversionistaService.eliminarInversionista(id);
            return ResponseEntity.noContent().build();  // 204 No Content
        } catch (EntityNotFoundException e) {
            return ResponseEntity.notFound().build();  // 404 Not Found
        }
    }
      @PutMapping("/actualizar/{id}")
    public ResponseEntity<InversionistaDTO> modificarInversionista(@PathVariable Long id, @RequestBody InversionistaCreateDTO inversionistaCreateDTO) {
        

        


        Inversionista inversionista = new Inversionista();
        inversionista.setInversionista_id(id);
        inversionista.setNombre(inversionistaCreateDTO.getNombre());
        inversionista.setApellido(inversionistaCreateDTO.getApellido());
        inversionista.setUsuario(inversionistaCreateDTO.getUsuario());
        inversionista.setContrasena(inversionistaCreateDTO.getContrasena());  // Se puede agregar una lógica para encriptar la contraseña
        inversionista.setEmail(inversionistaCreateDTO.getEmail());
        inversionista.setTelefono(inversionistaCreateDTO.getTelefono());
        inversionista.setFechaNacimiento(inversionistaCreateDTO.getFechaNacimiento());

        Inversionista updatedInversionista = inversionistaService.modificarInversionista(inversionista, id);

        // Convertimos la entidad Inversionista a DTO
        InversionistaDTO inversionistaResponseDTO = new InversionistaDTO(
            updatedInversionista.getInversionista_id(),
            updatedInversionista.getNombre(),
            updatedInversionista.getApellido(),
            updatedInversionista.getUsuario(),
            updatedInversionista.getEmail(),
            updatedInversionista.getTelefono(),
            updatedInversionista.getFechaNacimiento(),
            updatedInversionista.getFechaRegistro(),
            updatedInversionista.getMontoTotalInvertido()
        );

        return ResponseEntity.ok(inversionistaResponseDTO); // Retorna el DTO con los datos del inversionista modificado
    }
}
