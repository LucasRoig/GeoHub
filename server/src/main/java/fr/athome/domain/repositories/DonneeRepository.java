/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package fr.athome.domain.repositories;

import fr.athome.domain.entities.Donnee;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 *
 * @author Lucas
 */
public interface DonneeRepository extends JpaRepository<Donnee, Long>{
    
}
