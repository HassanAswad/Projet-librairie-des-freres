package com.dev.libraries_freres.controller;

import com.dev.libraries_freres.model.Utilisateur;
import com.dev.libraries_freres.service.UtilisateurService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/utilisateur")
@CrossOrigin("http://localhost:3000/")
public class UtilisateurController {

    @Autowired
    private UtilisateurService service;

    @PostMapping("/login")
    public Boolean login(@RequestBody Utilisateur u) {
        List<Utilisateur> utilisateurs = service.getUtilisateurs();
        for(int i=0; i<utilisateurs.size(); i++){
            Utilisateur utilisateur = utilisateurs.get(i);
            if(utilisateur.getEmail().equals(u.getEmail()) && utilisateur.getMotDePasse().equals(u.getMotDePasse()) ){
                return true;
            }
        }
        return false;
        // if(service.existsByPassword(u.getEmail())) {
        //     if(studentService.existsByPassword(student.getPassword())) {
        //         return "utilisateur Exists";
        //     }
        //     return "Incorrect Password";
        // }
        // return "utilisateur doesn't exist with this email id:- " + utilisateur.getEmail();
    }

}
