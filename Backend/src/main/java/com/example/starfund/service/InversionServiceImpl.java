package com.example.starfund.service;

import com.example.starfund.domain.model.dto.InversionDTO;
import com.example.starfund.domain.model.entity.Inversion;
import com.example.starfund.domain.model.entity.Inversionista;
import com.example.starfund.domain.model.entity.Startup;
import com.example.starfund.domain.repository.InversionRepository;
import com.example.starfund.domain.repository.InversionistaRepository;
import com.example.starfund.domain.repository.StartupRepository;

import jakarta.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;


@Service
public class InversionServiceImpl {

    @Autowired
    private InversionRepository inversionRepository;

    @Autowired
    private InversionistaRepository inversionistaRepository;

    @Autowired
    private StartupRepository startupRepository;


    public void agregarInversion(Long inversionista_id, Long startup_id, double valorInvertido) {
        Optional<Startup> startupOptional = startupRepository.findById(startup_id);
        Optional<Inversionista> inversionistaOptional = inversionistaRepository.findById(inversionista_id);
    
        if (startupOptional.isEmpty() || inversionistaOptional.isEmpty()) {
            return;
        }
    
        Inversionista inversionista = inversionistaOptional.get();
        Startup startup = startupOptional.get();
        
        // Crear nueva inversión
        Date fechaInversion = new Date();
        Inversion nuevaInversion = new Inversion(inversionista.getInversionista_id(), startup.getStartup_id(), fechaInversion, valorInvertido);
        
        
        inversionista.getInversiones().add(nuevaInversion);
        startup.getInversiones().add(nuevaInversion);
            
        inversionRepository.save(nuevaInversion);
    }
    
    public void eliminarInversion(Long inversion_id) {
        Optional<Inversion> inversionOptional = inversionRepository.findById(inversion_id);
    
        if (inversionOptional.isEmpty()) {
            return;
        }
    
        Inversion inversion = inversionOptional.get();
    
        // Obtener los IDs directamente en lugar de las entidades
        Long inversionistaId = inversion.getInversionistaId();
        Long startupId = inversion.getStartupId();
    
        // Buscar las entidades manualmente
        Optional<Startup> startupOptional = startupRepository.findById(startupId);
        Optional<Inversionista> inversionistaOptional = inversionistaRepository.findById(inversionistaId);
    
        if (startupOptional.isPresent() && inversionistaOptional.isPresent()) {
            Startup startupAEliminar = startupOptional.get();
            Inversionista inversionistaAEliminar = inversionistaOptional.get();
    
            startupAEliminar.getInversiones().remove(inversion);
            inversionistaAEliminar.getInversiones().remove(inversion);
    
            startupAEliminar.getInversionistasSuscriptos().remove(inversionistaAEliminar);
            inversionistaAEliminar.getStartupsAgregados().remove(startupAEliminar);
    
            // Guardar cambios antes de eliminar la inversión
            startupRepository.save(startupAEliminar);
            inversionistaRepository.save(inversionistaAEliminar);
        }
    
        // Finalmente eliminar la inversión
        inversionRepository.delete(inversion);
    }
    
    public List<InversionDTO> listarInversiones(){
        List<Inversion> inversiones = inversionRepository.findAll();
        
        // Convertir a InversionDTO
        List<InversionDTO> inversionesDTO = new ArrayList<>();
        for (Inversion inversion : inversiones) {
            InversionDTO dto = new InversionDTO(
                    inversion.getInversion_id(),
                    inversion.getInversionistaId(),
                    inversion.getStartupId(),
                    inversion.getValorInvertido(),
                    inversion.getFechaInversion()
            );
            inversionesDTO.add(dto);
        }
        return inversionesDTO;

    }
    public void actualizarInversion(Long inversionId, double nuevoValor) {
    Optional<Inversion> inversionOptional = inversionRepository.findById(inversionId);

    if (inversionOptional.isEmpty()) {
        throw new EntityNotFoundException("Inversión no encontrada");
    }

    Inversion inversion = inversionOptional.get();
    inversion.setValorInvertido(nuevoValor);
    
    inversionRepository.save(inversion);
}


}
