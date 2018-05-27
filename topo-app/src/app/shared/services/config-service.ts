import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
import { Config } from '../Config';
import { HandleError } from '../handlers/handler-error';
import { HttpErrorHandler } from '../handlers/http-error-handler';

// import { HttpErrorHandler, HandleError } from './http-error-handler.service';

/** check Location definition same thing!! */

@Injectable()
export class ConfigService {

    public configFile = './assets/config.json';
    public configuration: any[] | Config;
    config1: string;
    config: any;
    public serverConfig: Config;

    public handleError: HandleError;

    constructor(
        private httpClient: HttpClient,
        private httpErrorHandler: HttpErrorHandler) {

        this.handleError = httpErrorHandler.createHandleError('ConfigService');
        // this.getConfig_2().subscribe(value => this.config = value, eooro => { }, () => { });

        //Set the configuration for teh all system
        this.getConfig_2()
            // clone the data object, using its known Config shape
            .subscribe((data: Config) => this.configuration = { ...data });


        this.getServerConfig();
    }


    public getServerConfig() {
        this.getConfig_2().subscribe(value => this.serverConfig = value);
    }
    setConfig() {
        this.getConfig_2().subscribe(value => this.config = value);
    }


    getConfig(): Observable<any[] | Config> {
        console.info("getConfig calls ******************");
        return this.httpClient.get<Config>(this.configFile)
            .pipe(
                retry(3), // retry a failed request up to 3 times
                catchError(this.handleError('getConfig', [])) // then handle the error
            );
    }

    getConfig_1() {
        return this.httpClient.get(this.configFile);
    }

    getConfig_2() {
        // now returns an Observable of Config
        return this.httpClient.get<Config>(this.configFile);
    }

    getConfig_3() {
        return this.httpClient.get<Config>(this.configFile)
            .pipe(
                catchError(this.handleError('getConfig_3', [])) // then handle the error
            );
    }

    getConfigResponse(): Observable<HttpResponse<Config>> {
        return this.httpClient.get<Config>(
            this.configFile, { observe: 'response' });
    }

}
