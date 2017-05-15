/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package fr.athome.controller;

import com.fasterxml.jackson.databind.JsonNode;
import fr.athome.domain.repositories.CommuneRepository;
import fr.athome.domain.entities.Commune;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ArrayNode;
import com.fasterxml.jackson.databind.node.ObjectNode;
import java.util.Collection;
import java.util.Iterator;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import static org.springframework.web.bind.annotation.RequestMethod.POST;
import static org.springframework.web.bind.annotation.RequestMethod.GET;

/**
 *
 * @author Lucas
 */

@RestController
@RequestMapping("/api/geom")
public class GeomController {
    @Autowired
    CommuneRepository communeRepository;
    ObjectMapper mapper = new ObjectMapper();
    
    @RequestMapping(value = "/getCommunes", method = POST)
    public ArrayNode getCommunes(@RequestBody ArrayNode request){
        Iterator<JsonNode> iter = request.elements();
        ArrayNode result = mapper.createArrayNode();
        while(iter.hasNext()){
            JsonNode node = iter.next();
            String type = node.get("type").asText();
            String id = node.get("id").asText();
            if(type.equals("COM")){
                Commune com = communeRepository.findOne(id);
                if(com != null){
                    result.add(com.toFeature());
                }
            }else if(type.equals("DEP")){
                Collection<Commune> communes = communeRepository.getCommuneByDepartement(id);
                for(Commune c : communes){
                    result.add(c.toFeature());
                }
            }
        }
        return result;
    }
    @RequestMapping(value = "/getGeom", method = POST)
    public ArrayNode get(@RequestBody ArrayNode request) {
        Iterator<JsonNode> iter = request.elements();
        ArrayNode result = mapper.createArrayNode();
        while(iter.hasNext()){
            JsonNode node = iter.next();
            String type = node.get("type").asText();
            String codeGeo = node.get("codeGeo").asText();
            System.out.println(type + codeGeo);
            if(type.equals("COM")){
                Commune com = communeRepository.findOne(codeGeo);
                if(com != null){
                    result.add(com.toFeature());
                }
            }
        }
        return result;
    }
    
    @RequestMapping(value = "/dep/{id}/getGeomOfCommune", method = GET)
    public ArrayNode getComOfDep(@PathVariable String id) {
        ArrayNode result = mapper.createArrayNode();
        for(Commune com : communeRepository.getCommuneByDepartement(id)){
            result.add(com.toFeature());
        }
        return result;
    }
    
}
