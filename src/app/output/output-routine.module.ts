

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
 
import { RouterModule, Routes } from '@angular/router';
import { OutputComponent } from './output.component';


const outputRoutes: Routes = [   
 { path: 'app-output', component: OutputComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(outputRoutes)
  ],
  exports: [    RouterModule  ]
})
export class OutputRoutineModule { }