package ghis.model;

import java.io.Serializable;
import javax.persistence.*;

/**
 * Entity implementation class for Entity: Emailadresse
 *
 */
@Entity

public class Emailadresse implements Serializable {

	
	private static final long serialVersionUID = 11L;
	@Id
	@Column(name = "id")
	@GeneratedValue(strategy=GenerationType.AUTO)
	private long id;	
	private String emailadresseString;
	@ManyToOne
    private Person person;
	public Emailadresse() {
		super();
	}

	public String getEmailadresseString() {
		return emailadresseString;
	}

	public void setEmailadresseString(String emailadresseString) {
		this.emailadresseString = emailadresseString;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public Person getPerson() {
		return person;
	}

	public void setPerson(Person person) {
		this.person = person;
	}
   
}
