package com.dev.libraries_freres.controller;

import com.dev.libraries_freres.model.Membre;
import com.dev.libraries_freres.model.Message;
import com.dev.libraries_freres.service.MessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/message")
public class MessageController {

    @Autowired
    private MessageService service;

    @PostMapping("/add")
    public Message saveMessage(@RequestBody Message categoryAnnonce) {
        return service.saveMessage(categoryAnnonce);
    }

    @GetMapping("/all")
    public List<Message> findAllMessages(@RequestBody Membre membre) {
        return service.getMessages(membre);
    }

}
