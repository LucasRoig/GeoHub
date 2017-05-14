/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package fr.athome.domain.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

/**
 *
 * @author Lucas
 */
@Entity
public class Donnee {
    @GeneratedValue
    @Id
    Long id;
    
    String codeGeo;
    int valeur;
    
    @ManyToOne(fetch=FetchType.LAZY)
    @JoinColumn(name = "variableId")
    @JsonIgnore
    Variable variable;

    public Donnee() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCodeGeo() {
        return codeGeo;
    }

    public void setCodeGeo(String codeGeo) {
        this.codeGeo = codeGeo;
    }

    public int getValeur() {
        return valeur;
    }

    public void setValeur(int valeur) {
        this.valeur = valeur;
    }

    public Variable getVariable() {
        return variable;
    }

    public void setVariable(Variable variable) {
        this.variable = variable;
    }
    
    
}
