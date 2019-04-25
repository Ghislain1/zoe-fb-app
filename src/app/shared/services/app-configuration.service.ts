import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../models/app-config';

// @Ghislain: ref search-maven - AppConfigService - NB: why x(c or s) used it ?
@Injectable({
  providedIn: 'root'
})
export class AppConfigurationService {

  private appConfig: AppConfig;
  private appConfigPath = 'assets/data/appConfig.json';

  constructor(
    private httpClient: HttpClient
  ) { }


  /// load config using toPromise() Method
  loadAppConfig() {
    return this.httpClient.get<AppConfig>(this.appConfigPath)
        .toPromise()
        .then(data => {
            this.appConfig = data;
            console.log(JSON.stringify(this.appConfig, null, 4));
        })
        .catch(rease => {
          console.log(JSON.stringify(rease, null, 4));
        });
}


  getConfig(): AppConfig {
    return this.appConfig;
}
}
