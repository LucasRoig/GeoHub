package fr.athome;

import fr.athome.domain.entities.Commune;
import fr.athome.domain.entities.Departement;
import fr.athome.domain.repositories.CommuneRepository;
import fr.athome.domain.repositories.DepartementRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;
@SpringBootApplication
public class DemoApplication implements CommandLineRunner{
    @Autowired
    CommuneRepository communeRepository;
    //@Autowired
    //DepartementRepository departementRepository;
	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}

    @Override
    public void run(String... strings) throws Exception {
        //List<Commune> communes = communeRepository.findAll();
        //for(Commune commune : communes){
            /*commune.setDepartement(commune.getId().substring(0, 2));
            communeRepository.save(commune);*/
            
        //}
        /*for(Commune commune : communes){
            Departement dep = departementRepository.findByInsee(commune.getDepartement());
            commune.setDepartement(String.valueOf(dep.getGid()));
            communeRepository.save(commune);
        }*/
        /*for(Commune commune: communeRepository.findAll()){
            String nom = new String(commune.getNom().getBytes(),"UTF-8");
            commune.setNom(nom);
            communeRepository.save(commune);
        }*/
    }
    @Bean
    public WebMvcConfigurer corsConfigurer(){
        return new WebMvcConfigurerAdapter() {
            @Override
            public void addCorsMappings(CorsRegistry registry){
                registry.addMapping("/api/**").allowedOrigins("*").allowedMethods("*");
            }
        };
    }
}
