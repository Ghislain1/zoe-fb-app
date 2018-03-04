import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Hero } from '../models/hero';
 


const TOTAL_HEROES=100;
const HEROES = [];

 


@Injectable()
export class HeroService {

  getHeroes() {
    var countHeroes=HEROES.length;
    
    for (let index = 0; index <TOTAL_HEROES; index++) {
      var heroId:number=  Math.floor(  TOTAL_HEROES* Math.random(   )); 
      
     var element = new Hero(heroId," Hero Nr." + index+1);

     console.log("element");   
     HEROES.push(element);      
    }     
    return Observable.of(HEROES); 
  }

  getHero(id: number | string) {
    return this.getHeroes()
      // (+) before `id` turns the string into a number
      .map(heroes => heroes.find(hero => hero.id === +id));
  }
}