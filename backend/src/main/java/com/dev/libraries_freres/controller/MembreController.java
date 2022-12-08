package com.dev.libraries_freres.controller;

import com.dev.libraries_freres.model.Membre;
import com.dev.libraries_freres.service.MembreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/membre")
public class MembreController {

    @Autowired
    private MembreService service;

    @PostMapping("/add")
    public Membre addHero(@RequestBody Membre membre) {
        return service.saveMembre(membre);
    }

    @GetMapping("/all")
    public List<Membre> findAllMembres() {
        return service.getMembres();
    }

    @GetMapping("/byId/{id}")
    public Membre findMembreById(@PathVariable int id) {
        return service.getMembreById(id);
    }

    @PutMapping("/update")
    public Membre updateMembre(@PathVariable int id, @RequestBody Membre membre) {
        return service.updateMembre(id, membre);
    }

    @DeleteMapping("/delete/{id}")
    public String deleteMembre(@PathVariable int id) {
        return service.deleteMembre(id);
    }
}
