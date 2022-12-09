package com.dev.libraries_freres.repository;

import com.dev.libraries_freres.model.Admin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

public interface AdminRepository extends JpaRepository<Admin,Integer> {
    // public Admin findAdminByIdUtilisateur(@Param(value = "id") int id);
}

