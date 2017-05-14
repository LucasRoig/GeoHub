/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package fr.athome.controller;

import fr.athome.domain.entities.Dataset;
import fr.athome.domain.entities.Donnee;
import fr.athome.domain.entities.Variable;
import fr.athome.domain.repositories.DatasetRepository;
import fr.athome.domain.repositories.DonneeRepository;
import fr.athome.domain.repositories.VariableRepository;
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
@RequestMapping("/api/dataset")
public class DatasetController {
    
    @Autowired
    DatasetRepository datasetRepository;
    @Autowired
    VariableRepository variableRepository;
    @Autowired
    DonneeRepository donneeRepository;
    
    @RequestMapping(method = GET)
    public List<Dataset> list() {
        return datasetRepository.findAll();
    }
    
    @RequestMapping(value = "/{id}", method = GET)
    public Dataset get(@PathVariable Long id) {
        return datasetRepository.findOne(id);
    }
    
    @RequestMapping(value = "/{id}", method = PUT)
    public Dataset put(@PathVariable Long id, @RequestBody Dataset input) {
        input.setId(id);
        return datasetRepository.save(input);
    }
    
    @RequestMapping(method = POST)
    public Dataset create(@RequestBody Dataset input) {
        return datasetRepository.save(input);
    }
    
    @RequestMapping(value= "/{id}/variable", method = POST)
    public Long createVariable(@PathVariable Long id, @RequestBody Variable input) {
        Dataset dataset = datasetRepository.findOne(id);
        input.setDataset(dataset);
        Variable variable = variableRepository.save(input);
        for(Donnee d : input.getDonnees()){
            d.setVariable(variable);
            donneeRepository.save(d);
        }
        return variable.getId();
    }
    @RequestMapping(value= "/{id}/createMultipleVariables", method = POST)
    public void createMultipleVaribles(@PathVariable Long id, @RequestBody List<Variable> input){
        Dataset dataset = datasetRepository.findOne(id);
        for(Variable v : input){
            v.setDataset(dataset);
            Variable variable = variableRepository.save(v);
            for(Donnee d : v.getDonnees()){
                d.setVariable(variable);
                donneeRepository.save(d);
            }
        }
    }
    
    @RequestMapping(value = "/{id}", method = DELETE)
    public Long delete(@PathVariable Long id) {
        datasetRepository.delete(id);
        return id;
    }
    
}
