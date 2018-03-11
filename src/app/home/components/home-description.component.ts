import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../core/services/config-service';

@Component({
  selector: 'app-home-description',
  templateUrl: './home-description.component.html',
  styleUrls: ['./home-description.component.css']
})
export class HomeDescriptionComponent implements OnInit {

  constructor(  private configService: ConfigService) {

    }

  ngOnInit() {
  }

}
