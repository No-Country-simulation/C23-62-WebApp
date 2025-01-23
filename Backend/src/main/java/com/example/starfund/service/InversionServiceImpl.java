package com.example.starfund.service;

import com.example.starfund.domain.model.dto.InversionDTO;
import com.example.starfund.domain.model.entity.Inversion;
import com.example.starfund.domain.model.entity.Inversionista;
import com.example.starfund.domain.model.entity.Startup;
import com.example.starfund.domain.repository.InversionRepository;
import com.example.starfund.domain.repository.InversionistaRepository;
import com.example.starfund.domain.repository.StartupRepository;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@NoArgsConstructor
@AllArgsConstructor
@Service
public class InversionServiceImpl {

    @Autowired
    private InversionRepository inversionRepository;

    @Autowired
    private InversionistaRepository inversionistaRepository;

    @Autowired
    private StartupRepository startupRepository;


    public void agregarInversion(int inversionista_id, int startup_id, double valorInvertido) {

        Optional<Startup> startupOptional = startupRepository.findById(startup_id);
        Optional<Inversionista> inversionistaOptional = inversionistaRepository.findById(inversionista_id);


        if(startupOptional.isEmpty() || inversionistaOptional.isEmpty()){
            return;
        }

        Inversionista inversionista = inversionistaOptional.get();
        Startup startup = startupOptional.get();


        Date fechaInversion = new Date();
        inversionista.getInversiones().add(new Inversion(inversionista, startup, fechaInversion, valorInvertido));
        startup.getInversiones().add(new Inversion(inversionista, startup, fechaInversion, valorInvertido));
    }

    public void eliminarInversion(int inversion_id) {

        Optional<Inversion> inversionOptional = inversionRepository.findById(inversion_id);

        if(inversionOptional.isEmpty()){
            return;
        }

        Inversion inversion = inversionOptional.get();

        Startup startupAEliminar = startupRepository.findById(inversion.getStartupId().getStartuo_id()).get();
        Inversionista inversionistaAEliminar = inversionistaRepository.findById(inversion.getInversionistaId().getInversion_id()).get();

        startupAEliminar.getInversiones().remove(inversion);
        inversionistaAEliminar.getInversiones().remove(inversion);

        startupAEliminar.getInversionistasSuscriptos().remove(inversionistaAEliminar);
        inversionistaAEliminar.getStartupsAgregados().remove(startupAEliminar);

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

}
