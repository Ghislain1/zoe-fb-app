import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { AppRoutineModule } from './app-routine.module';
import { HeroesModule } from './heroes/heroes.module';
import { TodoModule } from './todo/todo.module';
 


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeroesModule,
     HomeModule,
     TodoModule, 
    AppRoutineModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
