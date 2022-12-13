package com.dev.libraries_freres.service;

import com.dev.libraries_freres.model.Membre;
import com.dev.libraries_freres.model.Message;
import com.dev.libraries_freres.repository.MessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class MessageService {
    @Autowired
    private MessageRepository repository;

    public Message send(Message message) {
        return repository.save(message);
    }
    
    public List<Message> findByMembre(Membre membre) {
        return repository.findAll().stream()
                        .filter(message ->  // message.getExpediteur().getId()==membre.getId() //||
                                            message.getReceveur().getId()==membre.getId()
                                            )
                        .collect(Collectors.toList());
    }

    public List<Message> sync(Membre membre) {
        return repository.findAll().stream()
                        .filter(message -> ( message.getExpediteur().getId()==membre.getId() || message.getReceveur().getId()==membre.getId() ))
                        .collect(Collectors.toList());
    }

    public List<Message> findByExpediteurReceveur(Membre expediteur, Membre receveur) {
        return repository.findAll().stream()
                        .filter(message -> (    (message.getExpediteur().getId()==expediteur.getId() && message.getReceveur().getId()==receveur.getId())
                                            ||  (message.getExpediteur().getId()==receveur.getId() && message.getReceveur().getId()==expediteur.getId())    ))
                        .collect(Collectors.toList());
    }

    public List<Message> findByExpediteur(Membre expediteur) {
        return repository.findAll().stream()
                        .filter(message -> message.getExpediteur().getId()==expediteur.getId())
                        .collect(Collectors.toList());
    }

    public List<Message> findByReceveur(Membre receveur) {
        return repository.findAll().stream()
                        .filter(message -> message.getReceveur().getId()==receveur.getId())
                        .collect(Collectors.toList());
    }
    
}
