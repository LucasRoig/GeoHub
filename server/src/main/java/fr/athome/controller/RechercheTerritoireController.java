/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package fr.athome.controller;

import fr.athome.domain.entities.Commune;
import fr.athome.domain.entities.Departement;
import fr.athome.domain.repositories.CommuneRepository;
import fr.athome.domain.repositories.DepartementRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ArrayNode;
import java.util.Collection;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import static org.springframework.web.bind.annotation.RequestMethod.DELETE;
import static org.springframework.web.bind.annotation.RequestMethod.GET;
import static org.springframework.web.bind.annotation.RequestMethod.POST;
import static org.springframework.web.bind.annotation.RequestMethod.PUT;

/**
 *
 * @author Lucas
 */
@RestController
@RequestMapping("api/recherche")
public class RechercheTerritoireController {
    
    @Autowired
    CommuneRepository communeRepository;
    @Autowired
    DepartementRepository departementRepository;
    
    ObjectMapper mapper = new ObjectMapper();
    @RequestMapping(value = "/territoire/{nom}",method = GET)
    public ArrayNode searchTerritoire(@PathVariable String nom) {
        nom = nom.substring(0,1).toUpperCase().concat(nom.substring(1).toLowerCase());
        ArrayNode array = mapper.createArrayNode();
        int count = 0;
        if(count<20){
            Collection<Departement> departements = departementRepository.findDepartementByName(nom + "%");
            for(Departement departement : departements){
                array.add(departement.toObjectNode());
                count ++;
                if(count >= 20){
                    break;
                }
            }
        }
        if(count <= 20){
            Collection<Commune> communes = communeRepository.findCommuneByName(nom + "%");
            for(Commune commune : communes){
                array.add(commune.toObjectNode());
                count ++;
                if(count >= 20){
                    break;
                }
            }
        }
        return array;
    }
}
