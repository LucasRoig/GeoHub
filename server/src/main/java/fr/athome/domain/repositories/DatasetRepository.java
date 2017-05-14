/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package fr.athome.domain.repositories;

import fr.athome.domain.entities.Dataset;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 *
 * @author Lucas
 */
public interface DatasetRepository extends JpaRepository<Dataset, Long>{
    
}
