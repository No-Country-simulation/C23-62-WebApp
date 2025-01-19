package com.example.starfund.domain.repository;

import com.example.starfund.domain.model.entity.Startup;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StartupRepository extends JpaRepository<Startup, Integer> {


}
