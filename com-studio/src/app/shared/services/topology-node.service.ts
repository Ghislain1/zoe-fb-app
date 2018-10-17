import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ErrorHandlingService } from './error-handling.service';
import { TopologyNode } from '../models/topology-node';
import { catchError } from 'rxjs/Operators';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable()
export class TopologyNodeService {


  topologyNodeUrl: string;

  constructor(private http: HttpClient, private errorHandlingService: ErrorHandlingService) {

    this.topologyNodeUrl = 'http://localhost:5000/api/topologynode/';

  }

  create(topologyNode: TopologyNode): Observable<TopologyNode> {
    const specNodeUrl = this.topologyNodeUrl + topologyNode.systemTag;
    return this.http.post<TopologyNode>(specNodeUrl, topologyNode, httpOptions)
      .pipe(
        catchError(this.errorHandlingService.handleError)
      );
  }

  getAll(): Observable<TopologyNode[]> {
    return this.http.get<TopologyNode[]>(this.topologyNodeUrl);
  }

  get(systemTag: string) {
    // Syntax= "{controller=Home}/{action=Index}/{id?}") hier action=Mtehdoe Name;
    const specNodeUrl = this.topologyNodeUrl + 'GetBySystemTag/' + systemTag;

    return this.http.get<TopologyNode>(specNodeUrl);
  }

  //TODO: Ghislain why by catchinh error--  inside the pipe --->  catchError(this.handleError('updateHero', hero))
  update(topologyNode: TopologyNode): Observable<TopologyNode> {
    const specNodeUrl = this.topologyNodeUrl + topologyNode.systemTag;
    return this.http.put<TopologyNode>(specNodeUrl, topologyNode, httpOptions)
      .pipe(
        catchError(this.errorHandlingService.handleError)
      );
  }


  //TODO:GHislain-->  You must call subscribe() or nothing happens. Just calling HeroesService.deleteHero() does not initiate the DELETE request.
  delete(systemTag: string): Observable<{}> {
    const url = `${this.topologyNodeUrl}/${systemTag}`; // DELETE api/TopologyNodes/42
    return this.http.delete(url, httpOptions)
      .pipe(
        catchError(this.errorHandlingService.handleError)
      );
  }

  //TOD:Ghislain can you explain system for URL sending to server
  GetChildren(systemTag: string): Observable<TopologyNode[]> {

    const specNodeUrl = this.topologyNodeUrl + 'GetIncludeChildren/' + systemTag;
    return this.http.get<TopologyNode[]>(specNodeUrl);


  }

}
