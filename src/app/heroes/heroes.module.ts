import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroRoutingModule } from './heroes-routine.module';
import { FormsModule }    from '@angular/forms';
import { HeroListComponent } from './components/hero-list.component';
import { HeroDetailComponent } from './components/hero-detail.component';
import { HeroService } from './services/hero.service';

@NgModule({
  imports: [
    CommonModule,
    HeroRoutingModule,
    FormsModule
  ],
  declarations: [
    HeroListComponent,
    HeroDetailComponent
  ],
  providers: [ HeroService ]
})
export class HeroesModule { }
