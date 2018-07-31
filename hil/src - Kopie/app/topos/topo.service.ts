import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';

import { Node } from '../core/models/bs/node'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from '../core/services/message.service';


import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class TopoService {

  private toposUrl = 'api/node';  // URL to web api node for the controller get()

  //Url to back end --> Controller is nodeController.
  private nodesUrl = 'http://localhost:2178/api/node';


  constructor(
    private httpClient: HttpClient,
    private messageService: MessageService) { }

  /** GET Node from the server her ethe server cALL THE methd getAll of NodeColler .cs */
  getNodes(): Observable<Node[]> {
    return this.httpClient.get<Node[]>(this.nodesUrl)
      .pipe(
        tap(nodes => this.log(`fetched Nodes`)),
        catchError(this.handleError('getNodes', []))
      );
  }
  //////// CRUD methods //////////

  /** GET hero by id. Will 404 if id not found */
  getNode(id: string | number): Observable<Node> {
    const url = `${this.nodesUrl}/${id}`;
    return this.httpClient.get<Node>(url).pipe(
      tap(_ => this.log(`fetched Node id=${id}`)),
      catchError(this.handleError<Node>(`getNode id=${id}`))
    );
  }

  /** POST: add a new hero to the server */
  addNode(hero: Node): Observable<Node> {
    return this.httpClient.post<Node>(this.toposUrl, hero, httpOptions).pipe(
      tap((node: Node) => this.log(`added node w/ id=${node.nodeId}`)),
      catchError(this.handleError<Node>('addNode'))
    );
  }



  /** PUT: update the hero on the server */
  updateNode(node: Node): Observable<any> {
    return this.httpClient.put(this.toposUrl, node, httpOptions).pipe(
      tap(_ => this.log(`updated node master id=${node.nodeId}`)),
      catchError(this.handleError<any>('updateNode'))
    );
  }


  /** DELETE: delete the Node from the server */
  deleteNode(node: Node | number): Observable<Node> {
    const id = typeof node === 'number' ? node : node.nodeId;
    const url = `${this.toposUrl}/${id}`;

    return this.httpClient.delete<Node>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted hero id=${id}`)),
      catchError(this.handleError<Node>('deleteHero'))
    );
  }


  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }


  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add('TopoService: ' + message);
  }
}