import { Injectable } from '@angular/core';



import { HttpClient } from '@angular/common/http';
//import { HttpErrorHandler, HandleError } from '../../core/services/http-error-handler.service';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import { HandleError } from '../../shared/handlers/handler-error';
import { HttpErrorHandler } from '../../shared/handlers/http-error-handler';
import { Device } from '../models/device';
import { Link } from '../models/link';
import "rxjs/add/operator/map";
 

@Injectable()
export class LinkService {


    linksUrl = 'http://10.12.4.28:2178/api/linkData';  // URL to web api all controller / Master
    private handleError: HandleError;

    constructor(
        private httpClient: HttpClient,
        httpErrorHandler: HttpErrorHandler) {
        this.handleError = httpErrorHandler.createHandleError('LinkService');
    }

    getLinkDataList(): Observable<Link[]> {
        return this.httpClient.get<Link[]>(this.linksUrl)
            .pipe(
                catchError(this.handleError('getLinks', []))
            );
    }

    ////Look how map works!!!
    getLinkBySystemTag(systemTag: string | number) {
        return this.getLinkDataList();
           // .map(devices => devices.find(link => link.id === systemTag));
    }


    ///here is the systemtag of controll as id of links.
    getLinkListById(systemTag: string | number): Observable<Link> {
        return this.getLinkDataList().map(linksDaAray => linksDaAray.find(ld => ld.id === systemTag));
    }


}