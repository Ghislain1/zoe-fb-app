import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MakeService {

  constructor(private httpClient: HttpClient) { }

  getMakes() {

    // TODO: call this /api/makes is endpoint --> head of the meth in controller
    let makes = this.httpClient.get<any[]>('/api/makes')
    return makes;
  }

}
