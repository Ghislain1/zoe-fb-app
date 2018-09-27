import { TopologyModule } from './topology/topology.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './core/components/home/home.component';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    SharedModule, //  To group Template,Models and services() for apps
    CoreModule,   //  To group navi-section, home-section and project-section
    TopologyModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'login', component: HomeComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
