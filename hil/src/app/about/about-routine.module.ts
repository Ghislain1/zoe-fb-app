import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AboutDescriptionComponent } from './components/about-description.component';

const aboutRoutes: Routes = [
  { path: 'about', redirectTo: '/appabout' }, //Add a the route to redirect to home-desc
  { path: 'appabout', component: AboutDescriptionComponent } // Add the route to call the Home-Descrip Component
];

@NgModule({
  imports: [CommonModule,
    RouterModule.forChild(aboutRoutes) // Registry your  home route -- Not forRoot!!!
  ],
  exports: [RouterModule]

})
export class AboutRoutineModule { }
