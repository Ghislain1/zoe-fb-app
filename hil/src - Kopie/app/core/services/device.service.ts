import { Injectable } from '@angular/core';



import { HttpClient } from '@angular/common/http';
import { HttpErrorHandler, HandleError } from '../../core/services/http-error-handler.service';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import { Controller } from '../../core/models/bs/controller';
import { Device } from '../models/bs/device';




@Injectable()
export class DeviceService {

    devicesUrl = 'http://localhost:2178/api/processdata';
    //devicesUrl = 'http://10.12.4.28:2178/api/devices';  // URL to web api all controller / Master
    private handleError: HandleError;

    constructor(
        private httpClient: HttpClient,
        httpErrorHandler: HttpErrorHandler) {
        this.handleError = httpErrorHandler.createHandleError('DeviceService');
    }


    getDevices(): Observable<Controller[]> {
        return this.httpClient.get<Controller[]>(this.devicesUrl)
            .pipe(
                catchError(this.handleError('getDevices', []))
            );
    }

    ////Look how map works!!!
    getDeviceBySystemTag(systemTag: string | number): Observable<Device[]> {

        var urlWithSystemtag = this.devicesUrl + "/" + systemTag;

        return this.httpClient.get<Device[]>(urlWithSystemtag)
            .pipe(
                catchError(this.handleError('getDeviceBySystemTag', []))
            );


    }






}