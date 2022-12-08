package com.dev.libraries_freres.model;


public enum Etat {
    
    ACTIVE("active"), DISACTIVE("disactive");

    String etat;

    Etat(String etat) {
        this.etat =etat;
    }
}
