import { Injectable } from '@angular/core';
import { AppConfigurationService } from './app-configuration.service';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { RootResource } from 'src/app/home/Models/url-resource';
import { RootObject } from 'src/app/home/Models/package';


// @Ghislain has been done: search-maven-org -
@Injectable({
  providedIn: 'root'
})
export class PackageService {
  apiServer: string;
  constructor(
    private appConfigurationService: AppConfigurationService,
    private httpClient: HttpClient,

  ) {

    this.apiServer = this.appConfigurationService.getConfig().appBaseUrl;
    console.log('  apiServer base jsut for test  ' + this.apiServer);


   }

   GetPackges(): Observable<RootObject> {
     return this.httpClient.get<RootObject>(this.apiServer);
   }

}
