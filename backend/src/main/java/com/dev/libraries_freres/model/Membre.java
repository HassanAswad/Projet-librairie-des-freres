package com.dev.libraries_freres.model;

import jakarta.persistence.Entity;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "Membre")
public class Membre extends Utilisateur {
    private int idUtilisateur;
    private String prenom;
    private String nom;
    private String pays;
    private String ville;
    private String adresse;
    private String numeroTelephone;
    private String province;
    private String codePostal;
    private String urlPhotoProfile;
    private String etat = "active";
    // private int adminIdUtilisateur;
    @ManyToOne
    private Admin adminIdUtilisateur;

    // constructor, setter, getter
}
