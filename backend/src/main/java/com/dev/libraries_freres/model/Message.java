package com.dev.libraries_freres.model;

import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "Message")
public class Message {
    @Id
    @GeneratedValue
    private int id;
    private String contenu;
    private LocalDate date;
    // private int membreIdExpediteur;
    // private int membreIdReceveur;
    @ManyToOne
    private Membre membreIdExpediteur;
    @ManyToOne
    private Membre membreIdReceveur;
    // constructor, setter, getter
}
