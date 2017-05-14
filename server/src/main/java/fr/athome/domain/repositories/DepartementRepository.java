/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package fr.athome.domain.repositories;

import fr.athome.domain.entities.Commune;
import fr.athome.domain.entities.Departement;
import java.util.Collection;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

/**
 *
 * @author Lucas
 */
public interface DepartementRepository extends JpaRepository<Departement, String>{
    @Query("select s from Departement s where s.nom like :nom")
    public Collection<Departement> findDepartementByName(@Param("nom") String nom);
}
