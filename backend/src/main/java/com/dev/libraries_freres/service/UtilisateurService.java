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

    public Utilisateur saveUtilisateur(Utilisateur utilisateur) {
        return repository.save(utilisateur);
    }

    public List<Utilisateur> getUtilisateurs() {
        return repository.findAll();
    }

    public Utilisateur getUtilisateurById(int id) {
        return repository.findById(id).orElse(null);
    }


    public String deleteUtilisateur(int id) {
        repository.deleteById(id);
        return "Utilisateur ["+id+"] supprimer !!";
    }

    public Utilisateur updateUtilisateur(int id, Utilisateur utilisateur) {
        Utilisateur existingUtilisateur = repository.findById(id).orElse(null);
        // existingUtilisateur.set(utilisateur.);
        return repository.save(existingUtilisateur);
    }


}
