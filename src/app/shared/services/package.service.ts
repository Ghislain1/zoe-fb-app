import { Injectable } from '@angular/core';
import { AppConfigurationService } from './app-configuration.service';


// @Ghislain has been done: search-maven-org -
@Injectable({
  providedIn: 'root'
})
export class PackageService {
 lest: any;
  constructor(
    private appConfigurationService: AppConfigurationService

  ) {

    this.lest = this.appConfigurationService.getConfig().repositoryBaseUrl;
   }
}
