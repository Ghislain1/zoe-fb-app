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
import { HeroModule } from './hero/hero.module';
import { Router } from '@angular/router';


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
    HeroModule,

    Ng2AutoBreadCrumb
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],

  bootstrap: [AppComponent]
})
export class AppModule {  // Diagnostic only: inspect router configuration
  constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}
