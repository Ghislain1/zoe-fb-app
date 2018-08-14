import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { Ng2AutoBreadCrumb } from 'ng2-auto-breadcrumb';

import { CommonModule, LocationStrategy, HashLocationStrategy } from '@angular/common';


import { AppComponent } from './app.component';

import { AppRoutingModule } from './app.routine.module';

import { LoginModule } from './login/login.module';
import { LayoutModule } from './layout/layout.module';
import { RegisterModule } from './register/register.module';
import { FormModule } from './form/form.module';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,

  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    LayoutModule,
    LoginModule,
    RegisterModule,
    CommonModule,
    FormModule,


    Ng2AutoBreadCrumb
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],

  bootstrap: [AppComponent]
})
export class AppModule { }
