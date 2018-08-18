import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent } from './heroes.component';

const routesHero: Routes = [
  { path: '', component: HeroesComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routesHero)
  ],
  declarations: []
})
export class HeroRoutingModule { }
