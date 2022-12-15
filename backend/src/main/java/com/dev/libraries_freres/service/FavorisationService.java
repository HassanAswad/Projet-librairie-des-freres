package com.dev.libraries_freres.service;

import com.dev.libraries_freres.model.Annonce;
import com.dev.libraries_freres.model.Favorisation;
import com.dev.libraries_freres.model.Membre;
import com.dev.libraries_freres.repository.FavorisationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class FavorisationService {
    
    @Autowired
    private FavorisationRepository repository;

    public Favorisation add(Favorisation newEvaluationAnnonce) {
        return repository.save(newEvaluationAnnonce);
    }

    public Favorisation find(Membre membre, Annonce annonce) {
        try {
            return repository.findAll().stream()
                        .filter(favorisation ->   favorisation.getMembre().getId()==membre.getId() && favorisation.getAnnonce().getId()==annonce.getId())
                        .collect(Collectors.toList()).get(0);
        } catch (Exception e) {
            return null;
        }
    }

        
    public List<Favorisation> find(Membre membre) {
        return repository.findAll().stream()
                        .filter(favorisation -> favorisation.getMembre().getId()==membre.getId())
                        .collect(Collectors.toList());
    }

    public Favorisation findById(int id) {
        return repository.findById(id).get();
    }

    public String delete(int id) {
        Favorisation f = repository.findById(id).get();
        if(f!=null){
            repository.deleteById(id);
            return "{ \"id\": "+id+"}";
        }
        return "{}";
    }


}
