package ghis.model;

import java.io.Serializable;
import java.lang.Long;
import java.lang.String;
import javax.persistence.*;

/**
 * Entity implementation class for Entity: Adresse
 *
 */
@Entity

public class Adresse implements Serializable {

	   
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Long id;
	private String strasseHausNummer;
	private String plzOrt;
	private static final long serialVersionUID = 1L;
	
	@OneToOne
	private Person person;

	public Person getPerson() {
		return person;
	}
	public void setPerson(Person person) {
		this.person = person;
	}
	public Adresse() {
		super();
	}   
	public Long getId() {
		return this.id;
	}

	public void setId(Long id) {
		this.id = id;
	}   
	public String getStrasseHausNummer() {
		return this.strasseHausNummer;
	}

	public void setStrasseHausNummer(String strasseHausNummer) {
		this.strasseHausNummer = strasseHausNummer;
	}  
	
	public String getPlzOrt() {
		return this.plzOrt;
	}

	public void setPlzOrt(String plzOrt) {
		this.plzOrt = plzOrt;
	}
   
}
