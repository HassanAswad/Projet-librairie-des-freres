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
