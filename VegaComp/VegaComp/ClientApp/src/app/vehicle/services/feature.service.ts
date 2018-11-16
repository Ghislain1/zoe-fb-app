import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SaveFeature, Feature } from '../../shared/models/feature';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeatureService {

  private readonly featuresEndpoint = '/api/features';

  constructor(private httpClient: HttpClient
    //TODOD--> private authHttp: AuthHttp
  ) { }





  create(feature): Observable<Feature> {
    // return this.authHttp.post(this.featuresEndpoint, feature); TODO:
    return this.httpClient.post<Feature>(this.featuresEndpoint, feature);

  }

  getFeature(id): Observable<Feature> {
    return this.httpClient.get<Feature>(this.featuresEndpoint + '/' + id);

  }

  getFeatures(): Observable<Feature[]> {
    return this.httpClient.get<Feature[]>(this.featuresEndpoint);

  }

  toQueryString(obj) {
    var parts = [];
    for (var property in obj) {
      var value = obj[property];
      if (value != null && value != undefined)
        parts.push(encodeURIComponent(property) + '=' + encodeURIComponent(value));
    }

    return parts.join('&');
  }

  update(feature: SaveFeature): Observable<Feature> {
    // TODOD-->return this.authHttp.put(this.featuresEndpoint + '/' + feature.id, feature);
    return this.httpClient.put<Feature>(this.featuresEndpoint + '/' + feature.id, feature);

  }

  delete(id) {
    //TODO ---> return this.authHttp.delete(this.featuresEndpoint + '/' + id)
    return this.httpClient.delete(this.featuresEndpoint + '/' + id)

  }
}