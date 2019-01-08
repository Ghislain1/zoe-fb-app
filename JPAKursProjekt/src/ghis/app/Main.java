package ghis.app;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import ghis.model.Person;

public class Main {

	public static void main(String[] args) {
		
	   String persistenceUnitName ="JPAKursProjekt";
       EntityManagerFactory   entityManagerFactory= Persistence.createEntityManagerFactory(persistenceUnitName);
       EntityManager entityManager= entityManagerFactory.createEntityManager();      

       
       /* Person */
       Person person = new Person();
       person.setVorname("Max");
       person.setNachname("MusterMann");
       
       
       entityManager.getTransaction().begin();
       
       entityManager.persist(person);
       
       entityManager.getTransaction().commit();
       
       entityManager.close();
       entityManagerFactory.close();
	}

}
