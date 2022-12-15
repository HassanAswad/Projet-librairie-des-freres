package com.dev.libraries_freres.repository;

import com.dev.libraries_freres.model.Signalisation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SignalisationRepository extends JpaRepository<Signalisation,Integer> {
    
}

