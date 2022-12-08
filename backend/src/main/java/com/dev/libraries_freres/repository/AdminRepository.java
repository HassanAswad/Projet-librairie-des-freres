package com.dev.libraries_freres.repository;

import com.dev.libraries_freres.model.Admin;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AdminRepository extends JpaRepository<Admin,Integer> {
    
}

