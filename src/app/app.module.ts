import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { AppRoutineModule } from './app-routine.module';
import { HeroesModule } from './heroes/heroes.module';
import { TodoModule } from './todo/todo.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { RouterModule } from '@angular/router';
import { LayoutModule } from './layout/layout.module';
import { TopologyEditorModule } from './topology-editor/topology-editor.module';
import { AboutModule } from './about/about.module';
import { LoaderModule } from './loader/loader.module';
import { OutputModule } from './output/output.module';
 
 


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HomeModule,
    LayoutModule,
    LoaderModule,
    AboutModule,
    OutputModule,    
    TopologyEditorModule,
    TodoModule,
    AppRoutineModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
