/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package fr.athome.controller;

import fr.athome.domain.repositories.CommuneRepository;
import fr.athome.domain.repositories.DepartementRepository;
import fr.athome.domain.entities.Commune;
import fr.athome.domain.entities.Departement;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ArrayNode;
import com.fasterxml.jackson.databind.node.ObjectNode;
import java.util.Collection;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import static org.springframework.web.bind.annotation.RequestMethod.GET;

/**
 *
 * @author Lucas
 */
@RestController
@RequestMapping("/api/departement")
public class DepartementController {
    @Autowired
    DepartementRepository departementRepository;
    @Autowired
    CommuneRepository communeRepository;
    ObjectMapper mapper = new ObjectMapper();
    @RequestMapping(method = GET)

    public ArrayNode list() {
        ArrayNode array = mapper.createArrayNode();
        Collection<Departement> departements = departementRepository.findAll();
        
        for(Departement departement : departements){
            array.add(departement.toObjectNode());
        }
        return array;
    }
    
    @RequestMapping(value = "/{id}", method = GET)
    public ObjectNode get(@PathVariable String id) {
        Departement dep = departementRepository.findOne(id);
        return dep.toObjectNode();
    }
    @RequestMapping(value = "/{id}/geom", method = GET)
    public ObjectNode getGeom(@PathVariable String id) {
        Departement dep = departementRepository.findOne(id);
        return dep.toFeature();
    }
    
    @RequestMapping(value = "/{id}/commune", method = GET)
    public ArrayNode getCommuneOfDep(@PathVariable String id){
        ArrayNode array = mapper.createArrayNode();
        Collection<Commune> communes = communeRepository.getCommuneByDepartement(id);
        for(Commune commune : communes){
            array.add(commune.toObjectNode());
        }
        return array;
    }
}
