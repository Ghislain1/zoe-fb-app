import { Injectable } from '@angular/core';



import { HttpClient } from '@angular/common/http';
//import { HttpErrorHandler, HandleError } from '../../core/services/http-error-handler.service';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import { HandleError } from '../../shared/handlers/handler-error';
import { HttpErrorHandler } from '../../shared/handlers/http-error-handler';
import { Device } from '../models/device';





@Injectable()
export class DeviceService {





    devicesUrl = 'http://localhost:2178/api/processdata';
    //devicesUrl = 'http://10.12.4.28:2178/api/devices';  // URL to web api all controller / Master
    private handleError: HandleError;

    constructor(
        private httpClient: HttpClient,
        private httpErrorHandler: HttpErrorHandler) {
        this.handleError = httpErrorHandler.createHandleError('DeviceService');
    }

    /**
     * any device can  be getting from this method. master oder slave is not import!! all propries should be called.
     * @param systemTag id for the desired device
     * @param urlServer server api to  holds the desired device
     */
    public getDevice(systemTag: string, urlServer: string): Observable<Device[]> {
        this.devicesUrl = urlServer + systemTag;
        return this.httpClient.get<Device[]>(this.devicesUrl)
            .pipe(
                catchError(this.handleError('getDevice', []))
            );
    }


    /**
     *Provide the list of Device Master by the given url server.
     * @param url : the url api tp communicat with server.
     */
    getDevices(url: string): Observable<Device[]> {
        this.devicesUrl = url;
        return this.httpClient.get<Device[]>(this.devicesUrl)
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
