import { AppPreloadingStrategy } from "./app-preloading.strategy";
import { AppComponent } from "./app.component";
import { CoreModule } from "./core/core.module";
import { SharedModule } from "./shared/shared.module";
import { ToastrModule } from "ngx-toastr";
import { RouterModule } from "@angular/router";
import { metaReducers } from "./app.reducers";
import { StoreModule } from "@ngrx/store";
import { LayoutModule } from "./layout/layout.module";
import { HomeModule } from "./home/home.module";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//TODO: GHislain
//import { reducers, metaReducers } from './app.reducers';
import { environment } from "../environments/environment";
import { NgModule } from "@angular/core";
import { routes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: AppPreloadingStrategy }),
    //TDODO: GHislain
    // StoreModule.forRoot(reducers, { metaReducers }),


    // !environment.production ? StoreDevtoolsModule.instrument() : [],

    //EffectsModule.forRoot([]),
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    HomeModule,
    LayoutModule,
    ToastrModule.forRoot({
      timeOut: 1500,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
      progressBar: true,
      progressAnimation: 'increasing'
    }),
    CoreModule,
    SharedModule,

  ],
  providers: [AppPreloadingStrategy],
  bootstrap: [AppComponent]
})
export class AppModule { }
