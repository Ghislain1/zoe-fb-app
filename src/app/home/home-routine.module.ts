import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home.component';
import { HomeDescriptionComponent } from './components/home-description.component';
import { RouterModule, Routes } from '@angular/router';


const homeRoutes: Routes = [
     
  { path: 'app-home-description',  component: HomeDescriptionComponent },
  { path: 'app-home', component: HomeComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(homeRoutes)
  ],
  exports: [    RouterModule  ]
})
export class HomeRoutineModule { }
