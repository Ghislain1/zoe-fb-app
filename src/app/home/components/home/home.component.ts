import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { RootResource, Resource } from '../../Models/url-resource';
import { RootObject, Datum } from '../../Models/package';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  daysLeft!: Date;

  constructor(private httpClient: HttpClient) { }
  ngOnInit(): void {
    this.daysLeft = new Date();
  }
}
