import { Component, NgModule } from '@angular/core';
import { LayoutComponent } from './layout.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    LayoutComponent,
  ],

  imports: [
    BrowserModule,

  ],

  exports: [LayoutComponent]

})
export class LayoutModule { }
