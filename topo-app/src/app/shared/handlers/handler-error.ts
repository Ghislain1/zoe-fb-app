import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from '../services/message.service';
import { LoggingService } from '../services/logging.service';



 /** Type of the handleError function returned by HttpErrorHandler.createHandleError */
export type HandleError =  <T> (operation?: string, result?: T) => (error: HttpErrorResponse) => Observable<T>;
