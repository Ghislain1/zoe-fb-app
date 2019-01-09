package ghis.app;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import ghis.dao.PersonDAO;
import ghis.model.Person;

public class Main {

	@SuppressWarnings("unused")
	public static void main(String[] args) {
		
		
      PersonDAO personDAO= new PersonDAO();      
      Person person= personDAO.find(7);
    
      
      person.setLieblingsfarbe("green");
      person.setKommentar("Mein lieber Ghislain!!! ");
      
		/*
		 * // PassBild Creating!.... try {
		 * person.setPassBild(Files.readAllBytes(Paths.get("src/img1.jpg"))); } catch
		 * (IOException e) { // TODO Auto-generated catch block e.printStackTrace(); }
		 */
      
      personDAO.persist(person);
      personDAO.shutdown();
     
		/*
		 * if (person != null) {
		 * 
		 * String n = person.getNachname(); String v = person.getVorname();
		 * System.out.println(n + "   " + v); } else {
		 * System.out.println("Not found !!! "); }
		 */
       
      
	}

}
