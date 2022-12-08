package com.dev.libraries_freres.model;


public enum ConditionAnnonce {
    
    NEUF("neuf"), 
    COMME_NEUF("comme_neuf"),
    BONNE_ETAT("bonne_etat"),
    USAGEE("usagée");

    String conditionAnnonce;

    ConditionAnnonce(String conditionAnnonce) {
        this.conditionAnnonce =conditionAnnonce;
    }
}
