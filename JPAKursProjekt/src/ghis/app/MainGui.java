package ghis.app;

import java.io.File;
import java.util.Collection;

import ghis.dao.PersonDAO;
import ghis.model.Person;
import javafx.application.Application;
import javafx.collections.FXCollections;
import javafx.collections.ObservableList;
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

	@Override
	public void start(Stage primaryStage)   {
		 personDAO= new PersonDAO(); 
		primaryStage.setTitle("JPA-Kurs-MyFirst");
		
		 
	 
		
		//ListView Control-Element
		@SuppressWarnings("rawtypes")
		ListView  listView= new ListView();
		/// ObservableList <String> items= FXCollections.observableArrayList("Ghs","Virg","Zioe");
		ObservableList <Person> items=  this.loadItemsFromDB();
		listView.setItems(items);
		listView.setOnMouseClicked(e->{
			System.out.print(listView.getSelectionModel());
		});
		
		//Row 1
		Label vornameLabel= new Label("Vorname");
		TextField vornameTextField= new TextField();
		
		//Row 2
		Label nachnameLabel= new Label("Nachname");
		TextField nachnameTextField= new TextField();
		
		//Row 3: pass
	    Label passbildLabel= new Label("Passbild");
	    Image img= new Image("img1.jpg",100,0, true, false);
		ImageView passbildImageView= new ImageView();
		passbildImageView.setImage(img);
		
		//FileChooser: We can load new bild from it
		FileChooser fileChooser= new FileChooser();
		Button passbildButton=  new Button("Bild wählen!");
		passbildButton.setOnAction(e->{
			System.out.print(passbildButton);
			File file= fileChooser.showOpenDialog(primaryStage);
			if(file==null) return;
			
		});
		
		// Born
		Label geburtsdatumLabel= new Label("Geburtsdatum");
		DatePicker geburtsdatumDatePicker= new DatePicker();
		
		// Ges
		Label geschlechtLabel= new Label("Geschlecht");
		FlowPane geschlechtFlowPane= new FlowPane();
		ToggleGroup  geschlechtToggleGroup = new ToggleGroup(); // Damit nur ein gewähle wird!!
		RadioButton mRadioButton= new RadioButton("männlich");
		mRadioButton.setToggleGroup(geschlechtToggleGroup);
		RadioButton wRadioButton= new RadioButton("weiblich");
		wRadioButton.setToggleGroup(geschlechtToggleGroup);
		wRadioButton.setPadding(new Insets(0,10,0,0));
		mRadioButton.setSelected(true);		
		geschlechtFlowPane.getChildren().addAll(wRadioButton, mRadioButton);
		
		
		//Comments
		Label commentLabel= new Label("Kommentar");
		TextField commentTextField= new TextField();
		 
		// Application Buttons
		FlowPane appButtonsFlowPane= new FlowPane();
		Button  createButton= new Button("Neuer Geschäftspartner");
		Button  saveButton= new Button("Speichern");
		Button  deleteButton= new Button("Löschen");
		appButtonsFlowPane.getChildren().addAll(createButton, saveButton, deleteButton);
		createButton.setOnAction(event -> {			 
			System.out.print(" createButton");
		});
		
		saveButton.setOnAction(event -> {			 
			System.out.print(" saveButton");
		});
		
		deleteButton.setOnAction(event -> {			 
			System.out.print(" deleteButton");
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
		
		gridPane.add(appButtonsFlowPane,0,7,2,1);
		
	 
		
	 
		
		
		
		
		
		
		//BorderPane in Action !!!
		BorderPane borderPane = new BorderPane();
		borderPane.setLeft(listView);
		borderPane.setCenter(gridPane);
     
		
		Scene scene = new Scene(borderPane, 900,900);
		primaryStage.setScene(scene);
		primaryStage.show();
		
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
