import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { RootResource, Resource } from '../../Models/url-resource';
import { RootObject, Datum } from '../../Models/package';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  url = 'https://api.nuget.org/v3/index.json';
  url1 = 'https://api-v2v3search-0.nuget.org/query';

all: Datum[] ;
  constructor(private httpClient: HttpClient)  {

  }
  ngOnInit(): void {
    this.httpClient.get<RootObject>(this.url1).subscribe(va =>  {
      this.all = va.data;
      console.log(JSON.stringify(va.data, null, 4));
    });

  }
}
