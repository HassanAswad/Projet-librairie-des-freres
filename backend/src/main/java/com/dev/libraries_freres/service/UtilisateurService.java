package com.dev.libraries_freres.service;

import com.dev.libraries_freres.model.Utilisateur;
import com.dev.libraries_freres.repository.UtilisateurRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UtilisateurService {
    @Autowired
    private UtilisateurRepository repository;

    public List<Utilisateur> getUtilisateurs() {
        return repository.findAll();
    }

    // public Utilisateur findUtilisateur(Utilisateur utilisateur) {
    //     return repository.findOne(utilisateur).orElse(null);
    // }
}
