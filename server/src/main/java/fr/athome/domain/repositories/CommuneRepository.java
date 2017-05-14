/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package fr.athome.domain.repositories;

import fr.athome.domain.entities.Commune;
import java.util.Collection;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

/**
 *
 * @author Lucas
 */
public interface CommuneRepository extends JpaRepository<Commune, String>{
    @Query("select s from Commune s where s.departement = :dep")
    public Collection<Commune> getCommuneByDepartement(@Param("dep") String dep);
    
    @Query("select s from Commune s where s.nom like :nom")
    public Collection<Commune> findCommuneByName(@Param("nom") String nom);
}
