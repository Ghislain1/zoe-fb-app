
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { HeroMessageService } from './heroMgs/hero-message.service';
import { HEROES, Hero } from './mock-heroes';



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