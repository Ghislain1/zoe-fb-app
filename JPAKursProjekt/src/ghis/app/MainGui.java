package ghis.app;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.sql.Date;
import java.time.LocalDate;
import java.util.Calendar;
import java.util.Collection;

import javax.imageio.ImageIO;

import ghis.dao.PersonDAO;
import ghis.model.Adresse;
import ghis.model.Geschlecht;
import ghis.model.Person;
import javafx.application.Application;
import javafx.collections.FXCollections;
import javafx.collections.ObservableList;
import javafx.embed.swing.SwingFXUtils;
import javafx.event.ActionEvent;
import javafx.geometry.Insets;
import javafx.stage.FileChooser;
import javafx.stage.Stage;
import javafx.scene.*;
import javafx.scene.control.Button;
import javafx.scene.control.DatePicker;
import javafx.scene.control.Label;
import javafx.scene.control.ListView;
import javafx.scene.control.RadioButton;
import javafx.scene.control.TextField;
import javafx.scene.control.ToggleGroup;
import javafx.scene.image.Image;
import javafx.scene.image.ImageView;
import javafx.scene.layout.Border;
import javafx.scene.layout.BorderPane;
import javafx.scene.layout.FlowPane;
import javafx.scene.layout.GridPane;
import javafx.scene.layout.StackPane;

public class MainGui extends Application {

	public static void main(String[] args) {
		
		launch(args);

	}

	private PersonDAO personDAO;
	private Person selectedPerson;
	private TextField vornameTextField;
	private TextField nachnameTextField;
	private ImageView passbildImageView;
	private TextField commentTextField;
	private DatePicker geburtsdatumDatePicker;
	private RadioButton mRadioButton;
	private RadioButton wRadioButton;
	@SuppressWarnings("rawtypes")
	private ListView listView;
	private ObservableList <Person> items;
	private TextField strasseundHausnummerTextField;
	 
	private TextField plzOrtTextField;

	@SuppressWarnings({ "unchecked", "rawtypes" })
	@Override
	public void start(Stage primaryStage)   {
		 personDAO= new PersonDAO(); 
		primaryStage.setTitle("JPA-Kurs-MyFirst");	 
	 
		
		//ListView Control-Element
		 
	    this.listView= new ListView();
 		this. items=  this.loadItemsFromDB();
		listView.setItems(items);
		
		listView.setOnMouseClicked(e->{
			System.out.print(listView.getSelectionModel().getSelectedItem());
			this.  selectedPerson=(Person) listView.getSelectionModel().getSelectedItem();
			this.updateValues();
		});
		
		//Row 1
		Label vornameLabel= new Label("Vorname");
	    vornameTextField= new TextField();
		
		//Row 2
		Label nachnameLabel= new Label("Nachname");
		nachnameTextField= new TextField();
		
		//Row 3: pass
	    Label passbildLabel= new Label("Passbild");  
	    this.passbildImageView= new ImageView();
		
		//FileChooser: We can load new bild from it
		FileChooser fileChooser= new FileChooser();
		Button passbildButton=  new Button("Bild wählen!");
		passbildButton.setOnAction(e->{
			 
			File file= fileChooser.showOpenDialog(primaryStage);
			if(file==null) return;
			Image img = new Image(file.toURI().toString(),0,100, true, false);
			passbildImageView.setImage(img);			
			
		});
		
		// Born
		Label geburtsdatumLabel= new Label("Geburtsdatum");
	    geburtsdatumDatePicker= new DatePicker();
		
		// Ges
		Label geschlechtLabel= new Label("Geschlecht");
		FlowPane geschlechtFlowPane= new FlowPane();
		ToggleGroup  geschlechtToggleGroup = new ToggleGroup(); // Damit nur ein gewähle wird!!
		  mRadioButton= new RadioButton("männlich");
		mRadioButton.setToggleGroup(geschlechtToggleGroup);
		  wRadioButton= new RadioButton("weiblich");
		wRadioButton.setToggleGroup(geschlechtToggleGroup);
		wRadioButton.setPadding(new Insets(0,10,0,0));
		mRadioButton.setSelected(true);		
		geschlechtFlowPane.getChildren().addAll(wRadioButton, mRadioButton);
		
		
		//Comments
		Label commentLabel= new Label("Kommentar");
	    commentTextField= new TextField();
	    
	    //Str. und Nr.
	    Label strasseundHausnummerLabel= new Label("Str. und Nr.");
	      strasseundHausnummerTextField= new TextField();
	      
	    //  plzOrtLabel
	      Label plzOrtLabel= new Label("PLZ und Ort");
	      plzOrtTextField= new TextField();
	    
		 
		// Application Buttons
		FlowPane appButtonsFlowPane= new FlowPane();
		Button  createButton= new Button("Neuer Geschäftspartner");
		Button  saveButton= new Button("Speichern");
		Button  deleteButton= new Button("Löschen");
		appButtonsFlowPane.getChildren().addAll(createButton, saveButton, deleteButton);
		createButton.setOnAction(event -> {			  
			System.out.print(" createButton");
			this.create();
			  this.listView.getItems().clear();        
		        this.listView.setItems(this.loadItemsFromDB());
		});
		
		saveButton.setOnAction(event -> {	
        this.save();
        this.listView.getItems().clear();        
        this.listView.setItems(this.loadItemsFromDB());

		});
		
		deleteButton.setOnAction(event -> {			 
			this.delete();
			 this.listView.getItems().clear();        
	        this.listView.setItems(this.loadItemsFromDB());
		});
		
	
		
		
		//GridPane in Action!!!
		GridPane gridPane = new GridPane();
		gridPane.setHgap(10);
		gridPane.setVgap(10);
		gridPane.setPadding( new Insets(10,10,10,10));
		//gridPane.setGridLinesVisible(true);
		
		gridPane.add(vornameLabel,0,0); // Column, row
		gridPane.add(vornameTextField,1,0);
		
		gridPane.add(nachnameLabel,0,1); // Column, row
		gridPane.add(nachnameTextField,1,1);
		
		gridPane.add(passbildLabel,0,2); // Column, row
		gridPane.add(passbildImageView,1,2);
		
		gridPane.add(passbildButton,1,3);
		
		gridPane.add(geburtsdatumLabel,0,4); // Column, row
		gridPane.add(geburtsdatumDatePicker,1,4);
		
		gridPane.add(geschlechtLabel,0,5); // Column, row
		gridPane.add(geschlechtFlowPane,1,5);
		
		gridPane.add(commentLabel,0,6);  
		gridPane.add(commentTextField,1,6);
		
		gridPane.add(strasseundHausnummerLabel,0,7);  
		gridPane.add(strasseundHausnummerTextField,1,7);
		
		gridPane.add(plzOrtLabel,0,8);  
		gridPane.add(plzOrtTextField,1,8);
		
		gridPane.add(appButtonsFlowPane,0,9,2,1);	
		
		//BorderPane in Action !!!
		BorderPane borderPane = new BorderPane();
		borderPane.setLeft(listView);
		borderPane.setCenter(gridPane);
     
		
		Scene scene = new Scene(borderPane, 900,900);
		primaryStage.setScene(scene);
		primaryStage.show();
		
	}
	private boolean create() {
		  
		  this.selectedPerson= new Person(); // TODO; Tranistence State --> New Id;
 		 this.updateValues();
 		 return true; //TODO
	}
	
	private boolean delete() {
		  
  		 this.personDAO.delete(this.selectedPerson.getId());
  		this.selectedPerson= new Person();
  		 return true; //TODO
	}
	private void save()
	{
		 this.selectedPerson.setVorname( this.vornameTextField.getText());
         this.selectedPerson.setNachname( this.nachnameTextField.getText());
          
  		//Calendar
  		LocalDate valueDatePicker= this.geburtsdatumDatePicker.getValue();
  		if(valueDatePicker==null)
  		{  			 
  			this.selectedPerson.setGeburtsdatum(null);
  		}
  		else 
  		{	  		
     	 Date  dat= java.sql.Date.valueOf(valueDatePicker);
     	 this.selectedPerson.setGeburtsdatum(dat);  		 
  		} 
                
         //Geschlect!!
  		if(this.mRadioButton.isSelected())
  		{
  			this.selectedPerson.setGeschlecht(Geschlecht.MAENNLICH);
  		}
  		else
  		{
  			this.selectedPerson.setGeschlecht(Geschlecht.WEIBLICH);	
  		}  		
  		
  		//PassBild ---> TODO: Sehr Komplex!!!
  		Image img= this.passbildImageView.getImage();
  		if(img!=null) {
  			ByteArrayOutputStream  byteArrayOutputStream= new ByteArrayOutputStream();
  		   try {
			ImageIO.write(SwingFXUtils.fromFXImage(img, null),"jpg", byteArrayOutputStream);
			this.selectedPerson.setPassBild(byteArrayOutputStream.toByteArray());
		} catch (IOException e) {
			 
			e.printStackTrace();
		}
  		}
  		else {
  			this.selectedPerson.setPassBild( null);
  		}
         
  	   // Kommentar
  		 this.selectedPerson.setKommentar( this.commentTextField.getText());
  		 this.personDAO.persist(this.selectedPerson);
	}
	
	private void updateValues() {

		this.vornameTextField.setText(this.selectedPerson.getVorname());
		this.nachnameTextField.setText(this.selectedPerson.getNachname());
		this.commentTextField.setText(this.selectedPerson.getKommentar());
		
		//PassBild
		byte[] byteArray=this.selectedPerson.getPassBild();
		if(byteArray==null)
		{
			this.passbildImageView.setImage(null);
		}
		else
		{
			Image image = new Image(new ByteArrayInputStream(byteArray, 0, byteArray.length),0,100, true, false);
			this.passbildImageView.setImage(image);
		}
		
		//Calendar
		Date gebutstdatum= this.selectedPerson.getGeburtsdatum();
		if(gebutstdatum==null)
		{
			this.geburtsdatumDatePicker.setValue(null);
		}
		else {		
		
		Calendar cal= Calendar.getInstance();
		cal.setTime(gebutstdatum);
		LocalDate  localDate = LocalDate.of(cal.get(Calendar.YEAR), cal.get(Calendar.MONTH)+1, cal.get(Calendar.DAY_OF_MONTH));
		this.geburtsdatumDatePicker.setValue(localDate);
		}
		
		//Geschlecht!!
		Geschlecht geschlecht= this.selectedPerson.getGeschlecht();
		if(geschlecht!=null) {
		if(geschlecht==Geschlecht.MAENNLICH)
		{
			this.wRadioButton.setSelected(false);
			this.mRadioButton.setSelected(true);
		}
		else
		{
			this.wRadioButton.setSelected(true);
			this.mRadioButton.setSelected(false);
		}
		}
		
		Adresse ad= this.selectedPerson.getAdresse();
		
		//TODO: Why update address first!!?
		if(ad!=null) {
		Adresse addresse= new Adresse();
		addresse.setPlzOrt(this.plzOrtTextField.getText());
		addresse.setStrasseHausNummer(this.strasseundHausnummerTextField.getText());		
		this.selectedPerson.setAdresse(addresse);
		}
		
		
	
	 } 

	@Override
	public void stop() throws Exception {
		 
		super.stop();
		personDAO.shutdown();
	}

    private ObservableList<Person> loadItemsFromDB() {
    	  
    	Collection<Person> list= personDAO.findAll();
    	ObservableList<Person> items= FXCollections.observableArrayList(list);
    	return items;
    	
	}
}
