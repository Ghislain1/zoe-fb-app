package ghis.model;

import java.io.Serializable;
import javax.persistence.*;

/**
 * Entity implementation class for Entity: Emailadresse
 *
 */
@Entity

public class Emailadresse implements Serializable {

	
	private static final long serialVersionUID = 1L;
	@Id
	@Column(name = "id")
	@GeneratedValue(strategy=GenerationType.TABLE)
	private long id;
	
	private String emailadresseString;

	public Emailadresse() {
		super();
	}

	public String getEmailadresseString() {
		return emailadresseString;
	}

	public void setEmailadresseString(String emailadresseString) {
		this.emailadresseString = emailadresseString;
	}
   
}
