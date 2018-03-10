import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { AppRoutineModule } from './app-routine.module';
import { HeroesModule } from './heroes/heroes.module';
import { TodoModule } from './todo/todo.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core/core.module';
 


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,     
    TodoModule, 
    CoreModule,
    HeroesModule,
     HomeModule,   
    AppRoutineModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
