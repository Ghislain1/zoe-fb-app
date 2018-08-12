import { Component, NgModule } from '@angular/core';
import { LayoutComponent } from './layout.component';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2AutoBreadCrumb } from 'ng2-auto-breadcrumb';
import { FormModule } from '../form/form.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    LayoutComponent,
  ],

  imports: [
    BrowserModule,
    FormModule,
    Ng2AutoBreadCrumb,
    RouterModule

  ],

  exports: [LayoutComponent]

})
export class LayoutModule { }
