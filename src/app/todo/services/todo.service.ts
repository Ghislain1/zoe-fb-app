import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { HandleError, HttpErrorHandler } from '../../core/services/http-error-handler.service';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError } from 'rxjs/operators';
 
import { ConfigService } from '../../core/services/config-service';
import { Config } from '../../core/models/config';
import { Todo } from '../../core/models/todo';
import { Subject } from 'rxjs/Subject'; 

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};


@Injectable()
export class TodoService {
 
  todoUrl :string;
  private handleError: HandleError;
  private config:Config;
      //** TODO: Event aggregator */   
      private  todoAnnouncedSource = new Subject<Todo>();

      // Observable string streams
      todoAnnounced$ = this.todoAnnouncedSource.asObservable();
 
  constructor(
    private httpClient: HttpClient,
    private configService: ConfigService,
    private httpErrorHandler: HttpErrorHandler) {

    this.handleError = httpErrorHandler.createHandleError('TodoService');
   this.config= this.configService.config;
   this.todoUrl= this.config.todoUrl;
  }


    /** POST: add a new hero to the database */
    addTodo (too: Todo): Observable<Todo> {
      return this.httpClient.post<Todo>(this.todoUrl, too, httpOptions)
        .pipe(
          catchError(this.handleError('addHero', too))
        );
    }

      /** DELETE: delete the hero from the server */
  deleteTodo (id: number): Observable<{}> {
    const url = `${this.todoUrl}/${id}`; // DELETE api/todoes/42
    return this.httpClient.delete(url, httpOptions)
      .pipe(
        catchError(this.handleError('deleteTodo'))
      );
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


    // Service message commands
  publish(todo: Todo) {
 
  
    this.todoAnnouncedSource.next(todo);
  }
  /// Ende eventaggre

 
  
}
