package com.example.starfund.service;

import com.example.starfund.domain.model.entity.Inversion;
import com.example.starfund.domain.model.entity.Inversionista;


import com.example.starfund.domain.repository.InversionistaRepository;

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


    public void eliminarInversionista(int inversionista_id) {

        Optional<Inversionista> inversionistaOptional = inversionistaRepository.findById(inversionista_id);

        if(inversionistaOptional.isEmpty()){
            return;
        }

        Inversionista inversionista = inversionistaOptional.get();

        inversionistaRepository.delete(inversionista);
    }

    public List<Inversionista> listarInversionista() {

        List<Inversionista> listaInversionistas = inversionistaRepository.findAll();
        if(listaInversionistas.isEmpty()){
            return new ArrayList<>();
        }

        return listaInversionistas;
    }

    public Inversionista buscarInversionista(int inversionista_id) {

        Optional<Inversionista> inversionistaOptional = inversionistaRepository.findById(inversionista_id);

        if(inversionistaOptional.isEmpty()){
            return null;
        }

        return inversionistaOptional.get();
    }

    public void montoTotalInvertido(int inversionista_id) {

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
