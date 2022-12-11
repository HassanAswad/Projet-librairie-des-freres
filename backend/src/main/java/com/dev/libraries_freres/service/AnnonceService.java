package com.dev.libraries_freres.service;

import com.dev.libraries_freres.model.Annonce;
import com.dev.libraries_freres.model.CategorieAnnonce;
import com.dev.libraries_freres.model.Etat;
import com.dev.libraries_freres.model.Membre;
import com.dev.libraries_freres.repository.AnnonceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class AnnonceService {
    @Autowired
    private AnnonceRepository repository;

    public Annonce saveAnnonce(Annonce annonce) {
        return repository.save(annonce);
    }

    public List<Annonce> findByEtat(Etat etat) {
        return repository.findAll().stream()
                        .filter(annonce -> annonce.getEtat().equals(Etat.ACTIVE) && annonce.getEtat().equals(etat))
                        .collect(Collectors.toList());
    }

    public List<Annonce> findByCategorie(CategorieAnnonce categorie) {
        return repository.findAll().stream()
                        .filter(annonce -> annonce.getEtat().equals(Etat.ACTIVE) && annonce.getCategorie().getId()==categorie.getId())
                        .collect(Collectors.toList());
    }

    public List<Annonce> findByMembre(Membre membre) {
        return repository.findAll().stream()
                        .filter(annonce -> annonce.getEtat().equals(Etat.ACTIVE) && annonce.getMembre().getId()==membre.getId())
                        .collect(Collectors.toList());
    }

    public List<Annonce> findByTitre(String titre) {
        return repository.findAll().stream()
                        .filter(annonce -> annonce.getEtat().equals(Etat.ACTIVE) && annonce.getTitre().contains(titre))
                        .collect(Collectors.toList());
    }

    public Annonce findById(int id) {
        return repository.findById(id).get();
    }


    public Annonce deactivateAnnonce(int id) {
        Annonce existingAnnonce = repository.findById(id).get();
        existingAnnonce.setEtat(Etat.DISACTIVE);
        return repository.save(existingAnnonce);
        // try {
        //     repository.deleteById(id);
        //     return "{ \"id\": "+id+"}";
        // } catch (Exception e) {
        //     return "{ \"id\": "+e.getMessage()+"}";
        // }
    }

    public Annonce updateAnnonce(int id, Annonce annonce) {
        Annonce existingAnnonce = repository.findById(id).orElse(null);
        // existingAnnonce.set(membre.);
        return repository.save(existingAnnonce);
    }


}
