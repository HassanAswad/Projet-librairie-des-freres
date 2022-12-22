package com.dev.libraries_freres.controller;

import com.dev.libraries_freres.model.Utilisateur;
import com.dev.libraries_freres.service.UtilisateurService;
import com.dev.libraries_freres.service.MembreService;
import com.dev.libraries_freres.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/utilisateur")
@CrossOrigin("http://localhost:3000/")
public class UtilisateurController {

    @Autowired
    private UtilisateurService service;
    @Autowired
    private AdminService adminService;
    @Autowired
    private MembreService membreService;


    @PostMapping("/login")
    public Utilisateur login(@RequestBody Utilisateur u) {
        Utilisateur existUtilisateur = service.findUtilisateur(u);
        // return existUtilisateur;
        if(existUtilisateur!=null){
            Utilisateur membre = membreService.findMembreByIdUtilisateur(existUtilisateur.getId());
            if(membre!=null) return membre;
            Utilisateur admin = adminService.findAdminByIdUtilisateur(existUtilisateur.getId());
            if(admin!=null) return admin;
        }
        return null;
    }

    @GetMapping("/find/{utilisateur}")
    public Utilisateur findUtilisateurType(@PathVariable Utilisateur utilisateur) {
        Utilisateur existUtilisateur = service.findUtilisateur(utilisateur);
        if(existUtilisateur!=null){
            Utilisateur membre = membreService.findMembreByIdUtilisateur(existUtilisateur.getId());
            if(membre!=null) return membre;
            Utilisateur admin = adminService.findAdminByIdUtilisateur(existUtilisateur.getId());
            if(admin!=null) return admin;
        }
        return null;
    }

}
