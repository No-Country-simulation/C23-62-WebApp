package com.example.starfund.service;

import com.example.starfund.domain.model.entity.Inversion;
import com.example.starfund.domain.model.entity.Startup;

import com.example.starfund.domain.repository.InversionistaRepository;
import com.example.starfund.domain.repository.StartupRepository;
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
public class StartupServiceImpl {

    @Autowired
    private StartupRepository startupRepository;

    @Autowired
    private InversionistaRepository inversionistaRepository;


    public Startup registrarStartup(Startup startup) {

        return startupRepository.save(startup);
    }
    public Startup modificarStartup(Startup startup) {
        return startupRepository.save(startup);
    }

    public List<Startup> listarStartup() {
        List<Startup> listaStartups = startupRepository.findAll();
        if(listaStartups.isEmpty()){
            return new ArrayList<>();
        }

        return listaStartups;

    }

    public Startup buscarStartup(Long startup_id) {
        return startupRepository.findById(startup_id).orElse(new Startup());
    }

    public void eliminarStartup(Long startup_id) {
        startupRepository.deleteById(startup_id);
    }

    public List<Startup> listarStartupsPorInversionista(Long inversionista_id) {

        List<Startup> startupsInvertidas = inversionistaRepository.findById(inversionista_id).get().getStartupsAgregados();

        if(startupsInvertidas.isEmpty()){
            return new ArrayList<>();
        }
        return startupsInvertidas;
    }

    public List<Inversion> listarInversionesPorStartup(Long startup_id) {

        List<Inversion> inversionesRecibidas = startupRepository.findById(startup_id).get().getInversiones();

        if(inversionesRecibidas.isEmpty()){
            return new ArrayList<>();
        }
        return inversionesRecibidas;
    }

    public void calculoMontoAcumulado(Long startup_id){

        Optional<Startup> startupOptional = startupRepository.findById(startup_id);

        if(startupOptional.isEmpty()){
            return;
        }

        Startup startup = startupOptional.get();

        double montoAcumulado = 0;

        for(Inversion inversion : startup.getInversiones()){
            montoAcumulado += inversion.getValorInvertido();
        }

        startup.setMontoAcumulado(montoAcumulado);
    }





}
