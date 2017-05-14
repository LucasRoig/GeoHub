/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package fr.athome.domain.entities;

import com.bedatadriven.jackson.datatype.jts.JtsModule;
import com.bedatadriven.jackson.datatype.jts.serialization.GeometryDeserializer;
import com.bedatadriven.jackson.datatype.jts.serialization.GeometrySerializer;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.node.ObjectNode;
import com.vividsolutions.jts.geom.Geometry;
import java.io.Serializable;
import java.math.BigDecimal;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

/**
 *
 * @author Lucas
 */
@Entity
public class Commune implements Serializable{
    @Id
    String id;
    
    String departement;
    
    @Column(name = "geom", columnDefinition="Geometry")
    @JsonSerialize(using=GeometrySerializer.class)
    @JsonDeserialize(using=GeometryDeserializer.class)
    Geometry geom;
    String nom;
    
    public Commune() {
    }
    public ObjectNode toFeature(){
        ObjectMapper mapper = new ObjectMapper();
        mapper.registerModule(new JtsModule());
        ObjectNode feature = mapper.createObjectNode();
        feature.put("type", "Feature");
        feature.put("id", this.id);
        ObjectNode properties = mapper.createObjectNode();
        properties.put("nom", this.nom);
        feature.put("properties",properties);
        feature.put("geometry", mapper.valueToTree(this.geom));
        return feature;
    }
    public ObjectNode toObjectNode(){
        ObjectMapper mapper = new ObjectMapper();
        ObjectNode node = mapper.createObjectNode();
        node.put("id",this.id);
        node.put("nom",this.nom);
        node.put("departement",this.departement);
        node.put("type","COM");
        return node;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }
    
    
    
    public String getDepartement(){
        return this.departement;
    }

    public void setDepartement(String dep){
        this.departement = dep;
    }
    

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public Geometry getGeom() {
        return geom;
    }

    public void setGeom(Geometry geom) {
        this.geom = geom;
    }
}
