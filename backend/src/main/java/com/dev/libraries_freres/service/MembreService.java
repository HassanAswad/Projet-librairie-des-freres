package com.dev.libraries_freres.service;

import com.dev.libraries_freres.model.Membre;
import com.dev.libraries_freres.repository.MembreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MembreService {
    @Autowired
    private MembreRepository repository;

    public Membre saveMembre(Membre membre) {
        return repository.save(membre);
    }

    public List<Membre> getMembres() {
        return repository.findAll();
    }

    public Membre getMembreById(int id) {
        return repository.findById(id).orElse(null);
    }
    public Membre findMembreByIdUtilisateur(int id) {
        List<Membre> utilisateurs = repository.findAll();
        for(int i=0; i<utilisateurs.size(); i++){
            Membre utilisateur = utilisateurs.get(i);
            if(utilisateur.getId()==id ){
                return utilisateur;
            }
        }
        return null;
        // return repository.findMembreByIdUtilisateur(id);
    }


    public String deleteMembre(int id) {
        repository.deleteById(id);
        return "Membre ["+id+"] supprimer !!";
    }

    public Membre updateMembre(int id, Membre membre) {
        Membre existingMembre = repository.findById(id).orElse(null);
        // existingMembre.set(membre.);
        return repository.save(existingMembre);
    }


}
