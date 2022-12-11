package com.dev.libraries_freres.model;

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

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

    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name="categorie_id")
    private CategorieAnnonce categorie;


    // @JsonIgnore
    // @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name="membre_id")
    private Membre membre;

    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name="admin_id")
    private Admin admin;
}
