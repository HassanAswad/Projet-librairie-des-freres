package com.dev.libraries_freres.controller;

import com.dev.libraries_freres.model.Utilisateur;
import com.dev.libraries_freres.service.UtilisateurService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
//@RequestMapping("/api")
public class UtilisateurController {

    @Autowired
    private UtilisateurService service;

    @PostMapping("/addUtilisateur")
    public Utilisateur addHero(@RequestBody Utilisateur utilisateur) {
        return service.saveUtilisateur(utilisateur);
    }

    @GetMapping("/utilisateurs")
    public List<Utilisateur> findAllUtilisateurs() {
        return service.getUtilisateurs();
    }

    @GetMapping("/utilisateurById/{id}")
    public Utilisateur findUtilisateurById(@PathVariable int id) {
        return service.getUtilisateurById(id);
    }

    @PutMapping("/update")
    public Utilisateur updateUtilisateur(@PathVariable int id, @RequestBody Utilisateur utilisateur) {
        return service.updateUtilisateur(id, utilisateur);
    }

    @DeleteMapping("/delete/{id}")
    public String deleteUtilisateur(@PathVariable int id) {
        return service.deleteUtilisateur(id);
    }
}
