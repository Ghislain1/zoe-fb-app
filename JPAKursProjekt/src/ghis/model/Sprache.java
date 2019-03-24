package ghis.model;

import java.io.Serializable;
import java.util.Collection;

import javax.persistence.*;

/**
 * Entity implementation class for Entity: Sprache
 *
 */
@Entity

public class Sprache implements Serializable {

	
	private static final long serialVersionUID = 1L;
	@Id
	@Column(name = "id")
	@GeneratedValue(strategy=GenerationType.TABLE)
	private long id;	
	private String spracheString;
	private String spracheShortcut; 

	public Sprache() {
		super();
	}

	public String getSpracheString() {
		return spracheString;
	}

	public void setSpracheString(String spracheString) {
		this.spracheString = spracheString;
	}

	public String getSpracheShortcut() {
		return spracheShortcut;
	}

	public void setSpracheShortcut(String spracheShortcut) {
		this.spracheShortcut = spracheShortcut;
	}
   
}
