/*
 Goal of this Module:
 . XML CRUD (Create Read Update Delete)
 . How to use it with Web API.



*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HereosXmlCrudComponent } from './hereos-xml-crud/hereos-xml-crud.component';
import { HeroXmlService } from './services/hero-xml.service';
 


const hereosCRUDRoutes:   Routes=[ { path:"app-hereos-xml-crud", component:HereosXmlCrudComponent}]

@NgModule({
  imports: [    CommonModule,
    RouterModule.forChild(hereosCRUDRoutes)

  ],
  declarations: [HereosXmlCrudComponent],
  providers:[HeroXmlService]
})
export class HereosXmlModule { }
