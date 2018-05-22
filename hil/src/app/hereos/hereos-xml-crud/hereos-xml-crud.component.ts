import { Component, OnInit } from '@angular/core';
 
import { Observable } from 'rxjs/Observable';
import { HeroXmlService } from '../services/hero-xml.service';

@Component({
  selector: 'app-hereos-xml-crud',
  templateUrl: './hereos-xml-crud.component.html',
  styleUrls: ['./hereos-xml-crud.component.css']
})
export class HereosXmlCrudComponent implements OnInit {

  heroesXml$: Observable<any>;
  heroesXml:  any;
  heroesXmlJason:  any;

  constructor(private heroXmlService: HeroXmlService) { 
   this.heroesXml$=  this. heroXmlService.getHeroList();
  }

  ngOnInit() {
  this.heroesXml$.subscribe(data =>{ this.heroesXml= data;
    this.heroesXmlJason= JSON.stringify(this.heroesXml,null,4);
    this.heroXmlService.postHero();

  });

  }

}
