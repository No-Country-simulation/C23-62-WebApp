package com.example.starfund.domain.repository;

import com.example.starfund.domain.model.entity.Inversion;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface InversionRepository extends JpaRepository<Inversion, Long> {

}
