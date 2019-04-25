import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../models/app-config';

// @Ghislain: ref search-maven - AppConfigService - NB: why x(c or s) used it ?
@Injectable({
  providedIn: 'root'
})
export class AppConfigurationService {

  private appConfig: AppConfig;
  private appConfigPath = '/assets/data/appConfig.json';

  constructor(
    private httpClient: HttpClient
  ) { }


  /// load config using toPromise() Method
  loadAppConfig() {
    return this.httpClient.get(this.appConfigPath)
        .toPromise()
        .then(data => {
            this.appConfig = <AppConfig>data;
        });
}


  getConfig(): AppConfig {
    return this.appConfig;
}
}
