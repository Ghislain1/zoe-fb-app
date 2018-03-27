import { Injectable } from '@angular/core';



import { HttpClient } from '@angular/common/http';
import { HttpErrorHandler, HandleError } from '../../core/services/http-error-handler.service';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import { Controller } from '../../core/models/bs/controller';




@Injectable()
export class DeviceService {


    devicesUrl = 'http://localhost:2178/api/devices';  // URL to web api all controller / Master
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
    getDeviceBySystemTag(systemTag: string | number): Observable<Controller> {


        let toReturn = this.getDevices().map(devices => devices.find(masterD => masterD.systemTag === systemTag));

        if (!toReturn) {
            alert(systemTag + "Not exists");
        }

        return toReturn;
    }






}