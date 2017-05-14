/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package fr.athome.domain.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import java.util.Collection;
import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

/**
 *
 * @author Lucas
 */
@Entity
public class Variable {
    @Id
    @GeneratedValue
    Long id;
    
    String codeVar;
    String nom;
    
    @ManyToOne(fetch=FetchType.LAZY)
    @JoinColumn(name = "datasetId")
    @JsonIgnore
    Dataset dataset;
    
    @OneToMany(mappedBy="variable",cascade = CascadeType.REMOVE)
    Collection<Donnee> donnees;

    public Variable() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCodeVar() {
        return codeVar;
    }

    public void setCodeVar(String codeVar) {
        this.codeVar = codeVar;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public Dataset getDataset() {
        return dataset;
    }

    public void setDataset(Dataset dataset) {
        this.dataset = dataset;
    }

    public Collection<Donnee> getDonnees() {
        return donnees;
    }

    public void setDonnees(Collection<Donnee> donnees) {
        this.donnees = donnees;
    }
    
    
}
