import { Injectable } from '@angular/core';



import { HttpClient } from '@angular/common/http';
import { HttpErrorHandler, HandleError } from '../../core/services/http-error-handler.service';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import { Controller } from '../../core/models/bs/controller';

/*
Communication with back end Controller call  NodeController cs

Methods represents 1 to 2 with 
- NodeController.Create() => post CRUD
- NodeController.Delete() => Delete a node
- GetById(string id) --> get
*/
@Injectable()
export class NodeService {

    //Url to back end --> Controller is nodeController.
    nodesUrl = 'http://localhost:2178/api/node';


    //To Handler the error during connecting http resquest
    private handleError: HandleError;

    //construct.
    constructor(
        private httpClient: HttpClient,
        httpErrorHandler: HttpErrorHandler) {
        this.handleError = httpErrorHandler.createHandleError('nodesService');
    }

    //  represents the [HttpGet]-Method of the controller
    getAll(): Observable<any[]> {
        return this.httpClient.get<any[]>(this.nodesUrl)
            .pipe(
                catchError(this.handleError('getAll()', []))
            );
    }

    ////Look how map works!!!
    getNodeById(systemTag: string | number): Observable<any> {
        let toReturn = this.getAll().map(nodes => nodes.find(masterD => masterD.systemTag === systemTag));

        if (!toReturn) {
            alert(systemTag + "Not exists");
        }

        return toReturn;
    }







}