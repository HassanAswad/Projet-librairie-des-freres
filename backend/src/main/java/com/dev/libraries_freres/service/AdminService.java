package com.dev.libraries_freres.service;

import com.dev.libraries_freres.model.Admin;
import com.dev.libraries_freres.repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdminService {
    @Autowired
    private AdminRepository repository;

    public Admin saveAdmin(Admin admin) {
        return repository.save(admin);
    }

    public List<Admin> getAdmins() {
        return repository.findAll();
    }

    public Admin getAdminById(int id) {
        return repository.findById(id).orElse(null);
    }


    public String deleteAdmin(int id) {
        repository.deleteById(id);
        return "Admin ["+id+"] supprimer !!";
    }

    public Admin updateAdmin(int id, Admin admin) {
        Admin existingAdmin = repository.findById(id).orElse(null);
        // existingAdmin.set(admin.);
        return repository.save(existingAdmin);
    }


}
