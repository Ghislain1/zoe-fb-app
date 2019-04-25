import { Component, OnInit } from '@angular/core';
import { AppConfigurationService } from 'src/app/shared/services/app-configuration.service';

@Component({
  selector: 'app-impression-dashboard',
  templateUrl: './impression-dashboard.component.html',
  styleUrls: ['./impression-dashboard.component.css']
})
export class ImpressionDashboardComponent implements OnInit {

  repositoryBaseUrl: string;
  constructor(
    private appConfigurationService: AppConfigurationService
  ) { }

  ngOnInit() {
  this.repositoryBaseUrl =  this.appConfigurationService.getConfig().repositoryBaseUrl;
  }

}
