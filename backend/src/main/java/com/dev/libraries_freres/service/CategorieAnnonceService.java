package com.dev.libraries_freres.service;

import com.dev.libraries_freres.model.CategorieAnnonce;
import com.dev.libraries_freres.repository.CategorieAnnonceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategorieAnnonceService {
    @Autowired
    private CategorieAnnonceRepository repository;

    public CategorieAnnonce saveCategorieAnnonce(CategorieAnnonce CategorieAnnonce) {
        return repository.save(CategorieAnnonce);
    }

    public List<CategorieAnnonce> getCategorieAnnonces() {
        return repository.findAll();
    }

    public CategorieAnnonce getCategorieAnnonceById(int id) {
        return repository.findById(id).orElse(null);
    }


    public String deleteCategorieAnnonce(int id) {
        CategorieAnnonce ca = repository.findById(id).orElse(null);
        if(ca!=null){
            repository.deleteById(id);
            return "{ \"id\": "+id+"}";
        }
        return "{}";
        
    }

    public CategorieAnnonce updateCategorieAnnonce(int id, CategorieAnnonce CategorieAnnonce) {
        CategorieAnnonce existingCategorieAnnonce = repository.findById(id).orElse(null);
        existingCategorieAnnonce.setLibelle(CategorieAnnonce.getLibelle());
        return repository.save(existingCategorieAnnonce);
    }


}
