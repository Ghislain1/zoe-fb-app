import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { AppRoutineModule } from './app-routine.module';
 
 
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { RouterModule } from '@angular/router';
import { LayoutModule } from './layout/layout.module';
import { TopologyEditorModule } from './topology-editor/topology-editor.module';
import { AboutModule } from './about/about.module';
 
import { OutputModule } from './output/output.module';
import { TopologyModule } from './topology/topology.module';
 
 


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    TopologyModule,
    HomeModule,
    LayoutModule,
 
    AboutModule,
    OutputModule,    
    TopologyEditorModule,
 
    AppRoutineModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
