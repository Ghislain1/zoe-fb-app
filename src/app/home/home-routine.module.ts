import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeDescriptionComponent } from './components/description/home-description.component';
import { HomeComponent } from './components/home.component';



const homeRoutes: Routes = [
  { path: 'home', component: HomeComponent } // Add the route to call the Home-Descrip Component
];

@NgModule({
  imports: [CommonModule,
    RouterModule.forChild(homeRoutes) // Registry your  home route -- Not forRoot!!!
  ],
  exports: [RouterModule]

})
export class HomeRoutineModule { }
