import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroRoutingModule } from './hero-routing.module';
import { HeroesComponent } from '../hero/heroes.component';
import { HeroMessageService } from './heroMgs/hero-message.service';
import { HeroMessageComponent } from './heroMgs/hero-message.component';


@NgModule({
  imports: [
    CommonModule,
    HeroRoutingModule
  ],
  declarations: [HeroesComponent, HeroMessageComponent],
  // providers: [HeroMessageService]
})
export class HeroModule { }
