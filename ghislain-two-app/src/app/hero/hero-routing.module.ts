import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './detail/hero-detail.component';

const routesHero: Routes = [
  { path: '', component: HeroesComponent, children: [{ path: 'dashboard/heroes/detail/:id', component: HeroDetailComponent }] },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routesHero)
  ],
  declarations: []
})
export class HeroRoutingModule { }
