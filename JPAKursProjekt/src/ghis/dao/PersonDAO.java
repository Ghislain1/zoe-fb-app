package ghis.dao;

import java.util.Collection;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.persistence.Query;

import ghis.model.Person;

public class PersonDAO {
	private EntityManagerFactory entityManagerFactory;
	private EntityManager entityManager;

	
	public PersonDAO(){
		this.entityManagerFactory = Persistence.createEntityManagerFactory("JPAKursProjekt");
	    this.entityManager =  this.entityManagerFactory.createEntityManager();
	}

	 public void shutdown() {
	      this.entityManager.close();
	      this.entityManagerFactory.close();
	      this.entityManager = null;
	      this.entityManagerFactory = null;
	   }
	   public Person find(long id) {
	     return  this.entityManager.find(Person.class, id);
	   }
	 
	   @SuppressWarnings("unchecked")
	   public Collection<Person> findAll() {
	     Query query =  this.entityManager.createQuery("SELECT p FROM Person p");
	     Collection<Person> collection;
	     collection = (Collection<Person>) query.getResultList();
	     return collection;
	   }
	 
	   public Person findByVorname(String vorname) {
	     Person p = (Person)  this.entityManager.createQuery("select p from Person p where p.vorname = :vn")
	     .setParameter("vn", vorname)
	     .getSingleResult();
	     return p;
	   }
	 
	 
	   public void persist(Person p) {
	      this.entityManager.getTransaction().begin();
	      this.entityManager.persist(p);
	      this.entityManager.getTransaction().commit();
	   }
	   
	   public void refresh(Person p) {
		      this.entityManager.getTransaction().begin();
		      this.entityManager.refresh(p);
		      this.entityManager.getTransaction().commit();
		   }
	 
	   public void delete(long id) {
	      this.entityManager.getTransaction().begin();
	     Person p =  this.entityManager.getReference(Person.class, id);
	      this.entityManager.remove(p);
	      this.entityManager.getTransaction().commit();
	   }
	}



