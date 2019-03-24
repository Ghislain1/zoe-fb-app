package ghis.model;

import java.io.Serializable;
import java.lang.String;
import java.sql.Date;
import java.util.Collection;
import java.util.Set;

import javax.persistence.*;

import org.hibernate.annotations.GenericGenerator;
 

/**
 * Entity implementation class for Entity: Person
 *
 */
@Entity

public class Person implements Serializable {
	private static final long serialVersionUID = 1L;
	@Id
	@Column(name = "id")
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="gen")
	@SequenceGenerator(name="gen", sequenceName="Personensequenz", initialValue=1000, allocationSize=10)	 
	private long id;
	private String vorname;
	private String nachname;	
	@Lob
	private byte[] passBild;	
	@Column(name="Hinweis")
	private String kommentar;	 
	private String lieblingsfarbe;	
	@OneToOne(mappedBy="person", cascade=CascadeType.PERSIST) //TODO: JPA-Welt Beziehung aufbauen
	private Adresse adresse;		
	private Date geburtsdatum;
	private Geschlecht geschlecht;
	@OneToMany(mappedBy="person")
	private Set <Emailadresse>emailadresseList;
	@ManyToMany
	private Collection<Sprache> sprachen;


	public Set<Emailadresse> getEmailadresseList() {
		return this.emailadresseList;
	}
	public void setEmailadresseList(Set<Emailadresse> emailadresseList) {
		this.emailadresseList = emailadresseList;
	}
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
	
	@Override
    public String toString() {
			 
			return this.vorname + " "+ this.nachname;
		}
	public Adresse getAdresse() {
		return adresse;
	}
	
	public void setAdresse(Adresse adresse) {
		if(adresse==null)
		{
			this.adresse.setPerson(null); //  TODO: Why?
		}
		this.adresse = adresse;
	}
 
	public Date getGeburtsdatum() {
		return geburtsdatum;
	}
	public void setGeburtsdatum(Date geburtsdatum) {
		this.geburtsdatum = geburtsdatum;
	}
	public Geschlecht getGeschlecht() {
		return geschlecht;
	}
	public void setGeschlecht(Geschlecht geschlecht) {
		this.geschlecht = geschlecht;
	}
   
}
