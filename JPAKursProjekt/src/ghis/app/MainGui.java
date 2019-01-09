package ghis.app;

import javafx.application.Application;
import javafx.collections.FXCollections;
import javafx.collections.ObservableList;
import javafx.event.ActionEvent;
import javafx.event.Event;
import javafx.event.EventHandler;
import javafx.geometry.Insets;
import javafx.stage.Stage;
import javafx.scene.*;
import javafx.scene.control.Button;
import javafx.scene.control.Label;
import javafx.scene.control.ListView;
import javafx.scene.control.TextField;
import javafx.scene.layout.Border;
import javafx.scene.layout.BorderPane;
import javafx.scene.layout.GridPane;
import javafx.scene.layout.StackPane;

public class MainGui extends Application {

	public static void main(String[] args) {
		
		launch(args);

	}

	@Override
	public void start(Stage primaryStage)   {
		primaryStage.setTitle("JPA-Kurs-MyFirst");
		
		Button button = new Button();
		button.setText("Say - Hello!!");
		
		button.setOnAction(new EventHandler<ActionEvent>() {

			@Override
			public void handle(ActionEvent arg0) {
			 System.out.println(arg0);				
			} 			
		});
		
		//ListView Control-Element
		ListView  listView= new ListView();
		ObservableList <String> items= FXCollections.observableArrayList("Ghs","Virg","Zioe");
		listView.setItems(items);
		
		//Row 1
		Label label1= new Label("GGGG");
		TextField textField1= new TextField();
		
		StackPane stackPane = new StackPane();
		stackPane.getChildren().add(button);
		
		//GridPane in Action!!!
		GridPane gridPane = new GridPane();
		gridPane.setHgap(10);
		gridPane.setVgap(10);
		gridPane.setPadding( new Insets(10));
		gridPane.setGridLinesVisible(true);
		gridPane.add(label1,1,1);
		gridPane.add(textField1,2,1);
		
		
		
		//BorderPane in Action !!!
		BorderPane borderPane = new BorderPane();
		borderPane.setCenter(gridPane);
        borderPane.setLeft(listView);
		
		Scene scene = new Scene(borderPane, 900,900);
		primaryStage.setScene(scene);
		primaryStage.show();
		
	}

}
