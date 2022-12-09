package com.dev.libraries_freres.repository;

import com.dev.libraries_freres.model.Message;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MessageRepository extends JpaRepository<Message,Integer> {
    
}

