package com.dev.libraries_freres.controller;

import com.dev.libraries_freres.model.Admin;
import com.dev.libraries_freres.model.Annonce;
import com.dev.libraries_freres.model.Signalisation;
import com.dev.libraries_freres.model.Membre;
import com.dev.libraries_freres.service.SignalisationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/signalisation")
public class SignalisationController {

    @Autowired
    private SignalisationService service;

    @PostMapping("/add/{membre}/{annonce}")
    public Signalisation add(@RequestBody Signalisation signalisation, @PathVariable Membre membre, @PathVariable Annonce annonce) {
        signalisation.setMembre(membre);
        signalisation.setAnnonce(annonce);
        return service.add(signalisation);
    }

    // @GetMapping("/findById/{id}")
    // public Signalisation findById( @PathVariable int id) {
    //     return service.findById(id);
    // }

    @GetMapping("/find/{membre}/{annonce}")
    public Signalisation find(@PathVariable Membre membre, @PathVariable Annonce annonce) {
        return service.find(membre, annonce);
    }

    // @GetMapping("/find/{membre}")
    // public List<Signalisation> find(@PathVariable Membre membre) {
    //     return service.find(membre);
    // }

    @GetMapping("/find/{admin}")
    public List<Signalisation> find(@PathVariable Admin admin) {
        return service.find(admin);
    }

    @PutMapping("/update/{signalisation}")
    public Signalisation update (@PathVariable Signalisation signalisation, @RequestBody  Signalisation newSignalisation) {
        return service.update(signalisation, newSignalisation);
    }

    @DeleteMapping("/delete/{signalisation}")
    public String delete(@PathVariable Signalisation signalisation) {
        return service.delete(signalisation.getId());
    }
}
