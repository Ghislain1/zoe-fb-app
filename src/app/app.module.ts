import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutineModule } from './app-routine/app-routine.module';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { createTranslateModule } from './shared/services/translate';
import { HttpClientModule } from '@angular/common/http';
import { PackageModule } from './package/package.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,

    AppRoutineModule,
    SharedModule,
    HomeModule,

    createTranslateModule(),
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
