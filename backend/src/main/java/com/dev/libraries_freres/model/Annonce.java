package com.dev.libraries_freres.model;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
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
@Table(name = "Annonce")
public class Annonce {
    @Id
    @GeneratedValue
    private int id;
    private String titre;
    private String auteur;
    private double prix;
    private String descriptionAnnonce;
    @Enumerated(EnumType.STRING)
    @Column(name="conditionAnnonce")
    private Etat conditionAnnonce;
    private LocalDate date;
    private String urlPhotoLivre;
    @Enumerated(EnumType.STRING)
    @Column(name="etat")
    private Etat etat;
    private int ajouterFavorie;
    @ManyToOne
    private CategorieAnnonce idCategorie;
    @ManyToOne
    private Membre MembreidUtilisateur;
    @ManyToOne
    private Membre AdminIdUtilisateur;
}
