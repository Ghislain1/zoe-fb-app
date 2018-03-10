import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HandleError, HttpErrorHandler } from '../../core/services/http-error-handler.service';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError } from 'rxjs/operators';
import { Todo } from '../../core/models/address';

@Injectable()
export class TodoService {


 
  todoUrl = 'http://localhost:2177/api/todo';  // URL to web api
  private handleError: HandleError;
 
  constructor(
    private httpClient: HttpClient,
   private httpErrorHandler: HttpErrorHandler) {
      
    this.handleError = httpErrorHandler.createHandleError('TodoService');
  }

  searchHeroes(arg0: any): any {
    throw new Error("Method not implemented.");
  }


    /** GET todo list from the server */
    getAll (): Observable<Todo[]> {
      return this.httpClient.get<Todo[]>(this.todoUrl)
        .pipe(
          catchError(this.handleError('getAll_TODO', []))
        );
    }
  
}
