package com.dev.libraries_freres.repository;

import com.dev.libraries_freres.model.Membre;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

public interface MembreRepository extends JpaRepository<Membre,Integer> {
    // public Membre findMembreByIdUtilisateur(@Param(value = "id") int id);
}

