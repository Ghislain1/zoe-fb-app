import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TopologyLink } from '../models/topology-link';
import { ErrorHandlingService } from './error-handling.service';
import { catchError } from 'rxjs/Operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  })
};


@Injectable()
export class TopologyLinkService {
  topologyLinkUrl: string;

  constructor(private http: HttpClient, private errorHandlingService: ErrorHandlingService) {

    this.topologyLinkUrl = '';

  }

  create(topologyLink: TopologyLink): Observable<TopologyLink> {
    const specLinkUrl = this.topologyLinkUrl + topologyLink.systemTag;
    return this.http.post<TopologyLink>(specLinkUrl, topologyLink, httpOptions)
      .pipe(
        catchError(this.errorHandlingService.handleError)
      );
  }

  getAll() {
    return this.http.get<TopologyLink>(this.topologyLinkUrl);
  }

  get(systemTag: string) {
    const specLinkUrl = this.topologyLinkUrl + systemTag;
    return this.http.get<TopologyLink>(specLinkUrl);
  }

  //TODO: Ghislain why by catchinh error--  inside the pipe --->  catchError(this.handleError('updateHero', hero))
  update(topologyLink: TopologyLink): Observable<TopologyLink> {
    const specLinkUrl = this.topologyLinkUrl + topologyLink.systemTag;
    return this.http.put<TopologyLink>(specLinkUrl, topologyLink, httpOptions)
      .pipe(
        catchError(this.errorHandlingService.handleError)
      );
  }


  //TODO:GHislain-->  You must call subscribe() or nothing happens. Just calling HeroesService.deleteHero() does not initiate the DELETE request.
  delete(systemTag: string): Observable<{}> {
    const url = `${this.topologyLinkUrl}/${systemTag}`; // DELETE api/TopologyLinks/42
    return this.http.delete(url, httpOptions)
      .pipe(
        catchError(this.errorHandlingService.handleError)
      );
  }
}
