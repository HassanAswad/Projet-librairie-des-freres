package com.dev.libraries_freres.repository;

import com.dev.libraries_freres.model.Annonce;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AnnonceRepository extends JpaRepository<Annonce,Integer> {
    
}

