import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { AppRoutineModule } from './app-routine.module';


import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { RouterModule } from '@angular/router';
import { LayoutModule } from './layout/layout.module';

import { AboutModule } from './about/about.module';


import { TopologyModule } from './topology/topology.module';

import { LinksModule } from './links/links.module';
import { ConfigModule } from './config/config.module';


import { ToposModule } from './topos/topos.module';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    TopologyModule,
    LinksModule,
    LinksModule,
    ConfigModule,
    LayoutModule,
    AppRoutineModule,
    HttpClientModule,

    ToposModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
