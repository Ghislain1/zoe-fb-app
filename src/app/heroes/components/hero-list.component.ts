import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { HeroService } from '../services/hero.service';
import { Hero } from '../models/hero';
 

@Component({
  template: `
    <h2>HEROES Work!!!</h2>
    <ul class="items">
      <li *ngFor="let hero of heroes$ | async"
        [class.selected]="hero.id === selectedId">
        <a [routerLink]="['/hero', hero.id]">
          <span class="badge">{{ hero.id }}</span>{{ hero.name }}
        </a>
      </li>
    </ul>

    <button routerLink="/sidekicks">Go to sidekicks</button>
  `,
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {
  heroes$: Observable<Hero[]>;

  private selectedHeroId: string;
  
  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
   
    this.heroes$= this.heroService.getHeroes();
   
    this.route.paramMap.switchMap( (par : ParamMap)  =>  this.selectedHeroId=par.get('id'));

   // this.route.paramMap.switchMap((params: ParamMap) => {this.selectedHeroId = +params.get('id')});
    
  }

}
