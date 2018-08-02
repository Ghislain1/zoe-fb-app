import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";



// import {HttpClient} from "./business/HttpClient";
// import {AboutComponent} from "./options/about";

// declare var $:any;
// declare var toastr:any;
// Enable production mode
// import { enableProdMode } from '@angular/core';
// enableProdMode();
@NgModule({
  imports: [

    AppRoutingModule
  ],

  // components
  declarations: [
    AppComponent,


  ],
  // services, pipes and providers
  providers: [



  ],

  bootstrap: [AppComponent]
})
export class AppModule {

}
