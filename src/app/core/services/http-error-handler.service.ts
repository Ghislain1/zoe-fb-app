import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { MessageService } from './message.service';
import { LoggingService } from './logging.service';

/** Type of the handleError function returned by HttpErrorHandler.createHandleError */
export type HandleError =  <T> (operation?: string, result?: T) => (error: HttpErrorResponse) => Observable<T>;

/** Handles HttpClient errors */
@Injectable()
export class HttpErrorHandler {
  constructor(private messageService: MessageService,  private loggingService: LoggingService) { }

  /** Create curried handleError function that already knows the service name */
  createHandleError = (serviceName = '') => <T>
    (operation = 'operation', result = {} as T) => this.handleError(serviceName, operation, result);

 
  handleError<T> (serviceName = '', operation = 'operation', result = {} as T) {

    return (error: HttpErrorResponse): Observable<T> => {
     
      this.loggingService.error(error);

      const message = (error.error instanceof ErrorEvent) ?
        error.error.message :
       `server returned code ${error.status} with body "${error.error}"`;

      // TODO: better job of transforming error for user consumption
      this.messageService.add(`${serviceName}: ${operation} failed: ${message}`);

      // Let the app keep running by returning a safe result.
      return of( result );
    };

  }
}


 