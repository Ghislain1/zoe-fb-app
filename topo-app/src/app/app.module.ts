import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TopologyModule } from './topology/topology.module';
import { SharedModule } from './shared/shared.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule , // for outlet-route
    SharedModule,
   // TopologyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
