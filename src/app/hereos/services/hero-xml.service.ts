import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HeroXmlService {
 urlHeroXml: string="http://localhost:2178/api/heroxml";
 options:{

 }
  constructor(private httpClient:HttpClient) { }

  getHeroList(): any {
   return  this.httpClient.get<any>(  this.urlHeroXml);
  }

  postHero(): any {
    var urlpos= this.urlHeroXml+ " GHisl1";
    let body ={
       location:"FGGGGHHHH",
        id: "123"+ Math.random(),
        name:"Ghsialin "+ Math.random()
    }
    return  this.httpClient.post<any>(urlpos,body);
   }

}
