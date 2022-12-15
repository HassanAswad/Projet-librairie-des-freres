package com.dev.libraries_freres.repository;

import com.dev.libraries_freres.model.Favorisation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FavorisationRepository extends JpaRepository<Favorisation,Integer> {
    
}

