package com.dev.libraries_freres.service;

import com.dev.libraries_freres.model.Membre;
import com.dev.libraries_freres.model.Message;
import com.dev.libraries_freres.repository.MessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MessageService {
    @Autowired
    private MessageRepository repository;

    public Message saveMessage(Message message) {
        return repository.save(message);
    }

    public List<Message> getMessages(Membre membre) {
        return repository.findAll();
    }


    // public List<Message> getMessagesByMemberId(Membre membre, int membreId) {
    //     return repository.findById(id).orElse(null);
    // }
    
}
