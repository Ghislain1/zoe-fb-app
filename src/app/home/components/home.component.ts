
import { ConfigService } from '../../core/services/config-service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  topologyUrl: string
  constructor( private configService:ConfigService) { }

  ngOnInit() {
    
    this.configService.getConfig_2().subscribe(value => this.topologyUrl= value.topologyUrl);
  }

}
