import { Component, OnInit, Injectable } from '@angular/core';
import { HeroMessageService } from './heroMgs/hero-message.service';
import { Observable, of } from 'rxjs';
import { HEROES } from './mock-heroes';

export class Hero {
  id: number;
  name: string;
}

@Injectable({ providedIn: 'root' })
export class HeroService {

  constructor(private messageService: HeroMessageService) { }

  getHeroes(): Observable<Hero[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
}


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
