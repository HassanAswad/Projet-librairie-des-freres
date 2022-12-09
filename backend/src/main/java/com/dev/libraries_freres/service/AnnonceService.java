package com.dev.libraries_freres.service;

import com.dev.libraries_freres.model.Annonce;
import com.dev.libraries_freres.repository.AnnonceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AnnonceService {
    @Autowired
    private AnnonceRepository repository;

    public Annonce saveAnnonce(Annonce annonce) {
        return repository.save(annonce);
    }

    public List<Annonce> getAnnonces() {
        return repository.findAll();
    }

    public Annonce getAnnonceById(int id) {
        return repository.findById(id).orElse(null);
    }


    public String dsactivateAnnonce(int id) {
        repository.deleteById(id);
        return "Annonce ["+id+"] supprimer !!";
    }

    public Annonce updateAnnonce(int id, Annonce annonce) {
        Annonce existingAnnonce = repository.findById(id).orElse(null);
        // existingAnnonce.set(membre.);
        return repository.save(existingAnnonce);
    }


}
