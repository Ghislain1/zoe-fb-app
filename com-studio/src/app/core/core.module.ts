import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule, // TODO:Ghislain --> To group object like asyn,...
    SharedModule,
    RouterModule.forChild([
      { path: 'app-home', component: HomeComponent },

    ])
  ],
  declarations: [

    HomeComponent,
    // LoginComponent,
    NavbarComponent,
  ],
  exports: [
    NavbarComponent
  ]
})
export class CoreModule { }
