import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
 
import { RouterModule, Routes } from '@angular/router';


const appRoutes: Routes = [
  { path: '', redirectTo: '/home',  pathMatch: 'full'  }   
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes,{enableTracing:true})
  ],
  exports: [    RouterModule  ]
})
export class AppRoutineModule { }