package com.dev.libraries_freres.model;

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
@Table(name = "Annonce")
public class Annonce {
    @Id
    @GeneratedValue
    private int id;
    private String titre;
    private String auteur;
    private double prix;
    private String descriptionAnnonce;
    private String conditionAnnonce;
    private String date;
    private String urlPhotoLivre;
    private String etat = "active";
    private int ajouterFavorie;
    // private int idCategorie;
    // private int MembreidUtilisateur;
    // private int AdminIdUtilisateur;
    @ManyToOne
    private CategorieAnnonce idCategorie;
    @ManyToOne
    private Membre MembreidUtilisateur;
    @ManyToOne
    private Membre AdminIdUtilisateur;
}
