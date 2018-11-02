import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FeatureService {

  constructor(private httpClient: HttpClient) { }

  getFeatures() {

    // TODO: call this /api/makes is endpoint --> head of the meth in controller
    let makes = this.httpClient.get<any[]>('/api/features')
    return makes;
  }

}
