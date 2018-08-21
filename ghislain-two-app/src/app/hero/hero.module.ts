import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroRoutingModule } from './hero-routing.module';
import { HeroesComponent } from '../hero/heroes/heroes.component';

import { HeroMessageComponent } from './heroMgs/hero-message.component';
import { HeroDetailComponent } from './detail/hero-detail.component';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';



@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HeroRoutingModule,
    FormsModule
  ],
  declarations: [HeroesComponent, HeroMessageComponent, HeroDetailComponent],
  // providers: [HeroMessageService]
  exports: []
})
export class HeroModule {

  constructor(router: Router) {
    // console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}
