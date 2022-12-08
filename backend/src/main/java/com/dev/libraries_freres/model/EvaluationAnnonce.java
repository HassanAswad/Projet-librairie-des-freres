package com.dev.libraries_freres.model;

import java.time.LocalDate;

import jakarta.persistence.Basic;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.persistence.Transient;
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
    @ManyToOne
    private Annonce Annonceid;
    @ManyToOne
    private Membre MembreIdUtilisateur;
    private LocalDate dateEvaluation;
    private String commentaire;
    
    @Enumerated(EnumType.ORDINAL)
    @Column(name="note")
    private Note note;
    // @Basic
    // @Transient
    // private Note note;

    // constructor, setter, getter
}
