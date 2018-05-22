import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
import { Config } from '../models/config';
import { HttpErrorHandler, HandleError } from './http-error-handler.service';

@Injectable()
export class ConfigService {


  configUrl = '../assets/config.json';
  config:Config;

  private handleError: HandleError;
 
  constructor(
    private httpClient: HttpClient,
   private httpErrorHandler: HttpErrorHandler) {

    this.handleError = httpErrorHandler.createHandleError('ConfigService');
    this.getConfig_2().subscribe(value => this.config= value,eooro=> {}, () => { });
  }

  setConfig() {
    this.getConfig_2().subscribe(value => this.config= value);
    }
 

  getConfig() {
    console.info("getConfig calls ******************");
    return this.httpClient.get<Config>(this.configUrl)
      .pipe(
        retry(3), // retry a failed request up to 3 times
        catchError(this.handleError ('getConfig', [])) // then handle the error
      );
  }

  getConfig_1() {
    return this.httpClient.get(this.configUrl);
  }

  getConfig_2() {
    // now returns an Observable of Config
    return this.httpClient.get<Config>(this.configUrl);
  }

  getConfig_3() {
    return this.httpClient.get<Config>(this.configUrl)
      .pipe(
        catchError(this.handleError ('getConfig_3', [])) // then handle the error
      );
  }

  getConfigResponse(): Observable<HttpResponse<Config>> {
    return this.httpClient.get<Config>(
      this.configUrl, { observe: 'response' });
  }
  
}
