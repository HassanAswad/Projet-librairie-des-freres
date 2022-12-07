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
@Table(name = "EvaluationAnnonce")
public class EvaluationAnnonce {
    @Id
    @GeneratedValue
    private int id;
    // private int Annonceid;
    // private int MembreIdUtilisateur;
    @ManyToOne
    private Annonce Annonceid;
    @ManyToOne
    private Membre MembreIdUtilisateur;
    private LocalDate dateEvaluation;
    private String commentaire;
    private int note; // 1, 2, 3, 4, 5

    // constructor, setter, getter
}
