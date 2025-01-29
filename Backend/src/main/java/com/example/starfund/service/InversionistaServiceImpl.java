package com.example.starfund.service;

import com.example.starfund.domain.model.dto.InversionistaDTO;
import com.example.starfund.domain.model.entity.Inversion;
import com.example.starfund.domain.model.entity.Inversionista;


import com.example.starfund.domain.repository.InversionistaRepository;

import jakarta.persistence.EntityNotFoundException;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
@NoArgsConstructor
public class InversionistaServiceImpl {

    @Autowired
    private InversionistaRepository inversionistaRepository;

    



    public Inversionista crearInversionista(Inversionista inversionista) {

        return inversionistaRepository.save(inversionista);
    }


    public Inversionista modificarInversionista(Inversionista inversionista) {

        return inversionistaRepository.save(inversionista);
    }


    public void eliminarInversionista(Long inversionista_id) {

        Optional<Inversionista> inversionistaOptional = inversionistaRepository.findById(inversionista_id);

        if(inversionistaOptional.isEmpty()){
            return;
        }

        Inversionista inversionista = inversionistaOptional.get();

        inversionistaRepository.delete(inversionista);
    }

    public List<InversionistaDTO> listarTodosInversionistas() {
        List<Inversionista> inversionistas = inversionistaRepository.findAll();
    
        // Convertir Inversionista a InversionistaDTO
        List<InversionistaDTO> inversionistasDTO = new ArrayList<>();
        for (Inversionista inversionista : inversionistas) {
            InversionistaDTO dto = new InversionistaDTO(
                    inversionista.getInversionista_id(),
                    inversionista.getNombre(),
                    inversionista.getApellido(),
                    inversionista.getUsuario(),
                    inversionista.getEmail(),
                    inversionista.getTelefono(),
                    inversionista.getFechaNacimiento(),
                    inversionista.getFechaRegistro(),
                    inversionista.getMontoTotalInvertido()
            );
            inversionistasDTO.add(dto);
        }
    
        return inversionistasDTO;
    }
    
 

    public InversionistaDTO buscarInversionista(Long inversionista_id) {

        Optional<Inversionista> inversionistaOptional = inversionistaRepository.findById(inversionista_id);
            
        
            if (inversionistaOptional.isPresent()) {
                Inversionista inversionista = inversionistaOptional.get();
                return new InversionistaDTO(
                        inversionista.getInversionista_id(),
                        inversionista.getNombre(),
                        inversionista.getApellido(),
                        inversionista.getUsuario(),
                        inversionista.getEmail(),
                        inversionista.getTelefono(),
                        inversionista.getFechaNacimiento(),
                        inversionista.getFechaRegistro(),
                        inversionista.getMontoTotalInvertido()
                );
            } 
            return new InversionistaDTO();
        }

public Inversionista buscarInversionistaCompleto(Long id) {
    return inversionistaRepository.findById(id)
            .orElseThrow(() -> new EntityNotFoundException("Inversionista no encontrado con ID: " + id));
}
    public void montoTotalInvertido(Long inversionista_id) {

            Optional<Inversionista> inversionistaOptional = inversionistaRepository.findById(inversionista_id);

            if(inversionistaOptional.isEmpty()){
                return;
            }

            Inversionista inversionista = inversionistaOptional.get();

            double montoTotal = 0;

            for(Inversion inversion : inversionista.getInversiones()){
                montoTotal += inversion.getValorInvertido();
            }

            inversionista.setMontoTotalInvertido(montoTotal);
    }

}
