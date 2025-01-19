package com.example.starfund.domain.repository;

import com.example.starfund.domain.model.entity.Inversionista;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface InversionistaRepository extends JpaRepository<Inversionista, Integer> {

}
