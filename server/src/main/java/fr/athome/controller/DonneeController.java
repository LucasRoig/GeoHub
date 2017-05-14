/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package fr.athome.controller;

import fr.athome.domain.entities.Dataset;
import fr.athome.domain.entities.Donnee;
import fr.athome.domain.repositories.DatasetRepository;
import fr.athome.domain.repositories.DonneeRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;

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
@RequestMapping("/api/donnee")
public class DonneeController {
    
    @Autowired
    DonneeRepository donneeRepository;
    
    @RequestMapping(method = GET)
    public List<Donnee> list() {
        return donneeRepository.findAll();
    }
    
    @RequestMapping(value = "/{id}", method = GET)
    public Donnee get(@PathVariable Long id) {
        return donneeRepository.findOne(id);
    }
    
    @RequestMapping(value = "/{id}", method = PUT)
    public Donnee put(@PathVariable Long id, @RequestBody Donnee input) {
        input.setId(id);
        return donneeRepository.save(input);
    }
    
    @RequestMapping(method = POST)
    public Donnee create(@RequestBody Donnee input) {
        return donneeRepository.save(input);
    }
    
    @RequestMapping(value = "/{id}", method = DELETE)
    public Long delete(@PathVariable Long id) {
        donneeRepository.delete(id);
        return id;
    }
    
}
