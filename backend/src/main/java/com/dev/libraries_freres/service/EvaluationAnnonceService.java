package com.dev.libraries_freres.service;

import com.dev.libraries_freres.model.Annonce;
import com.dev.libraries_freres.model.EvaluationAnnonce;
import com.dev.libraries_freres.model.Membre;
import com.dev.libraries_freres.repository.EvaluationAnnonceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class EvaluationAnnonceService {
    @Autowired
    private EvaluationAnnonceRepository repository;

    public EvaluationAnnonce add(EvaluationAnnonce newEvaluationAnnonce) {
        // EvaluationAnnonce existingEvaluationAnnonce = repository.findById(newEvaluationAnnonce.getId()).orElse(null);
        EvaluationAnnonce existingEvaluationAnnonce = find(newEvaluationAnnonce.getMembre(), newEvaluationAnnonce.getAnnonce());
        
        if(existingEvaluationAnnonce==null){
            return repository.save(newEvaluationAnnonce);
        }else{
            return update(existingEvaluationAnnonce, newEvaluationAnnonce);
        }
        
    }

    public EvaluationAnnonce findById(int id) {
        return repository.findById(id).get();
    }
    
    public List<EvaluationAnnonce> find(Annonce annonce) {
        return repository.findAll().stream()
                        .filter(evaluationAnnonce -> evaluationAnnonce.getAnnonce().getId()==annonce.getId())
                        .collect(Collectors.toList());
    }

    public EvaluationAnnonce find(Membre membre, Annonce annonce) {
        try {
            return repository.findAll().stream()
                        .filter(evaluationAnnonce ->   evaluationAnnonce.getMembre().getId()==membre.getId() && evaluationAnnonce.getAnnonce().getId()==annonce.getId())
                        .collect(Collectors.toList()).get(0);
        } catch (Exception e) {
            return null;
        }
    }

    public String delete(int id) {
        EvaluationAnnonce ea = repository.findById(id).get();
        if(ea!=null){
            repository.deleteById(id);
            return "{ \"id\": "+id+"}";
        }
        return "{}";
    }

    public EvaluationAnnonce update(EvaluationAnnonce evaluationAnnonce, EvaluationAnnonce newEvaluationAnnonce) {
        EvaluationAnnonce existingEvaluationAnnonce = repository.findById(evaluationAnnonce.getId()).get();
        existingEvaluationAnnonce.setCommentaire(newEvaluationAnnonce.getCommentaire());
        existingEvaluationAnnonce.setDateEvaluation(newEvaluationAnnonce.getDateEvaluation());
        existingEvaluationAnnonce.setNote(newEvaluationAnnonce.getNote());
        return repository.save(existingEvaluationAnnonce);
    }


}
