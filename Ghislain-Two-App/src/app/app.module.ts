import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { Ng2AutoBreadCrumb } from "ng2-auto-breadcrumb";

import { LocationStrategy, CommonModule, HashLocationStrategy } from '@angular/common';


import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { AppRoutingModule } from './app.routine.module';
import { DashboardModule } from './dashboard/dashboard.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardModule,
    LayoutComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    Ng2AutoBreadCrumb
  ],


  bootstrap: [AppComponent]
})
export class AppModule { }
