package ghis.model;

import java.io.Serializable;
import java.lang.String;
import javax.persistence.*;

/**
 * Entity implementation class for Entity: Person
 *
 */
@Entity

public class Person implements Serializable {

	@Id
	@Column(name = "id")
	@GeneratedValue(strategy=GenerationType.TABLE)
	private long id;
	private String vorname;
	private String nachname;
	private static final long serialVersionUID = 1L;
	
	@Lob
	private byte[] passBild;
	
	@Column(name="Hinweis")
	private String kommentar;
	 
	private String lieblingsfarbe;

	public Person() {
		super();
	}   
	public long getId() {
		return this.id;
	}

	public void setId(long id) {
		this.id = id;
	}   
	public String getVorname() {
		return this.vorname;
	}

	public void setVorname(String vorname) {
		this.vorname = vorname;
	}   
	public String getNachname() {
		return this.nachname;
	}

	public void setNachname(String nachname) {
		this.nachname = nachname;
	}
	public byte[] getPassBild() {
		return passBild;
	}
	public void setPassBild(byte[] passBild) {
		this.passBild = passBild;
	}
	public String getLieblingsfarbe() {
		return lieblingsfarbe;
	}
	public void setLieblingsfarbe(String lieblingsfarbe) {
		this.lieblingsfarbe = lieblingsfarbe;
	}
	public String getKommentar() {
		return kommentar;
	}
	public void setKommentar(String kommentar) {
		this.kommentar = kommentar;
	}
   
}
