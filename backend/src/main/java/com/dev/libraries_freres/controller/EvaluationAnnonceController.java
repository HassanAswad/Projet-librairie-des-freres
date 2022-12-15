package com.dev.libraries_freres.controller;

import com.dev.libraries_freres.model.Annonce;
import com.dev.libraries_freres.model.EvaluationAnnonce;
import com.dev.libraries_freres.model.Membre;
import com.dev.libraries_freres.service.EvaluationAnnonceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/evaluation")
public class EvaluationAnnonceController {

    @Autowired
    private EvaluationAnnonceService service;

    @PostMapping("/add/{membre}/{annonce}")
    public EvaluationAnnonce add(@RequestBody EvaluationAnnonce evaluationAnnonce, @PathVariable Membre membre, @PathVariable Annonce annonce) {
        evaluationAnnonce.setMembre(membre);
        evaluationAnnonce.setAnnonce(annonce);
        return service.add(evaluationAnnonce);
    }

    @GetMapping("/findById/{id}")
    public EvaluationAnnonce findById( @PathVariable int id) {
        return service.findById(id);
    }

    @GetMapping("/find/{membre}/{annonce}")
    public EvaluationAnnonce find(@PathVariable Membre membre, @PathVariable Annonce annonce) {
        return service.find(membre, annonce);
    }


    @PutMapping("/update/{evaluationAnnonce}")
    public EvaluationAnnonce update (@PathVariable EvaluationAnnonce evaluationAnnonce, @RequestBody  EvaluationAnnonce newEvaluationAnnonce) {
        return service.update(evaluationAnnonce, newEvaluationAnnonce);
    }

    @DeleteMapping("/delete/{evaluationAnnonce}")
    public String delete(@PathVariable EvaluationAnnonce evaluationAnnonce) {
        return service.delete(evaluationAnnonce.getId());
    }
}
