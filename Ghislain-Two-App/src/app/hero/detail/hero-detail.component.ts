import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../hero.service';
import { Hero } from '../mock-heroes';

@Component({
  selector: 'detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  hero: Hero;
  constructor(

  ) {
    this.getHero();
    alert("jjj");

  }

  ngOnInit() {

  }

  getHero(): void {
    /*     const id = +this.route.snapshot.paramMap.get('id');
        this.heroService.getHero(id)
          .subscribe(hero => this.hero = hero); */
  }

}
