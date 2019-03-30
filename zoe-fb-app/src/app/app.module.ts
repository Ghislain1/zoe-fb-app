import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutineModule } from './app-routine/app-routine.module';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutineModule,
    SharedModule,
    HomeModule,
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
