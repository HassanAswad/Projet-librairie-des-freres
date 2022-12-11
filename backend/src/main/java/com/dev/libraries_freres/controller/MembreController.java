package com.dev.libraries_freres.controller;

import com.dev.libraries_freres.model.Admin;
import com.dev.libraries_freres.model.Membre;
import com.dev.libraries_freres.service.MembreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/membre")
public class MembreController {

    @Autowired
    private MembreService service;

    @PostMapping("/add/{admin}")
    public Membre addMembre(@RequestBody Membre membre, @PathVariable Admin admin) {
        membre.setAdmin(admin);
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
    
    @RequestMapping(value = "/upload", method = RequestMethod.POST, consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public String fileUpload(@RequestParam("file") MultipartFile file) throws IOException {
        File convertFile = new File(file.getOriginalFilename());
        convertFile.createNewFile();
        FileOutputStream fout = new FileOutputStream(convertFile);
        fout.write(file.getBytes());
        fout.close();
        return "File is upload successfully";
    }
    
    
}
