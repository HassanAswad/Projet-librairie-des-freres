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
@Table(name = "Signalisation")
public class Signalisation {
    @Id
    @GeneratedValue
    private int id;
    // private int MembreidUtilisateur;
    // private int Annonceid;
    @ManyToOne
    private Membre MembreidUtilisateur;
    @ManyToOne
    private Membre Annonceid;
    private LocalDate dateSignaler;
    private String commentaire;
    
    // constructor, setter, getter
}
