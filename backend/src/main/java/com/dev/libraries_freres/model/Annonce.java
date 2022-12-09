package com.dev.libraries_freres.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

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
    private ConditionAnnonce conditionAnnonce;
    private LocalDate date;
    private String urlPhotoLivre;
    @Enumerated(EnumType.STRING)
    @Column(name="etat")
    private Etat etat;
    private int ajouterFavorie;
    @ManyToOne(cascade = {CascadeType.ALL})
    // @JoinColumn(name="id_categorie")
    private CategorieAnnonce categorie;
    @ManyToOne(cascade = {CascadeType.ALL})
    // @JoinColumn(name="id_membre")
    private Membre membre;
    // @JoinColumn(name="id_admin")
    @ManyToOne(cascade = {CascadeType.ALL})
    private Admin admin;
}
