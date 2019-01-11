package ghis.app;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import ghis.dao.PersonDAO;
import ghis.model.Adresse;
import ghis.model.Emailadresse;
import ghis.model.Person;

public class Main {

	@SuppressWarnings("unused")
	public static void main(String[] args) {
		
		
      PersonDAO personDAO= new PersonDAO();      
      Person person= createPerson();
      person.setAdresse(createAdresse());
      person.setEmailadresse(CreateEmailadresse());
      person.setPassBild(createPassBild());  
      
      
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

	private static byte[] createPassBild() {
           // PassBild Creating!.... 
		String imgPath="src/img2.jpg";
		
		byte[] byting= null;
		 try {
			 byting = Files.readAllBytes(Paths.get(imgPath)); 
		 }
		 catch (IOException e) {
			     e.printStackTrace();
			 }
		 return byting;
		 
	}

	private static Emailadresse CreateEmailadresse() {
		Emailadresse emailadresse = new Emailadresse();
		emailadresse.setEmailadresseString("Musteremail@muste.com");
		return emailadresse;
		
	}

	private static Adresse createAdresse() {
		
		Adresse adr= new Adresse();
		adr.setPlzOrt("55543 Bad Keuznach");
		adr.setStrasseHausNummer("Weyroth 38");
		return adr;
	}

	private static Person createPerson() {
		Person pers= new Person();
		pers.setKommentar("Just for fun");
		pers.setLieblingsfarbe("yellow");
		pers.setVorname("Sorialla");
		pers.setNachname("Zabatio");
		return pers;
	}

}
