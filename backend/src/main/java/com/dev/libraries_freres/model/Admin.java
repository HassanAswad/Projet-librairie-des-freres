package com.dev.libraries_freres.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "Admin")
public class Admin extends Utilisateur {
    private int idAdmin;
    
    // constructor, setter, getter
}
