import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SaveVehicle } from '../models/vehicle';



@Injectable()
export class VehicleService {
  private readonly vehiclesEndpoint = '/api/vehicles';

  constructor(private http: HttpClient
    // , private authHttp: AuthHttp --> TODO no exisz no more
  ) { }

  getFeatures() {
    return this.http.get('/api/features')
      .pipe(map(res => res));
  }

  getMakes() {
    return this.http.get('/api/makes')
      .pipe(map(res => res));
  }

  create(vehicle) {
    const username: String = 'username';
    const password: String = 'password';
    const headers: HttpHeaders = new HttpHeaders();
    headers.append('Authorization', 'Basic ' + btoa(username + ':' + password));
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    return this.http.post<SaveVehicle>(this.vehiclesEndpoint, vehicle, { headers: headers })
      .pipe(map(res => res));
  }

  getVehicle(id) {
    return this.http.get(this.vehiclesEndpoint + '/' + id)
      .pipe(map(res => res));
  }

  getVehicles(filter) {
    return this.http.get(this.vehiclesEndpoint + '?' + this.toQueryString(filter))
      .pipe(map(res => res));
  }

  toQueryString(obj) {
    const parts = [];
    // tslint:disable-next-line:forin
    for (const property in obj) {
      const value = obj[property];
      if (value != null && value !== undefined) {
        parts.push(encodeURIComponent(property) + '=' + encodeURIComponent(value));
      }
    }

    return parts.join('&');
  }

  update(vehicle: SaveVehicle) {
    return this.http.put<SaveVehicle>(this.vehiclesEndpoint + '/' + vehicle.id, vehicle)
      .pipe(map(res => res));
  }

  delete(id) {
    return this.http.delete(this.vehiclesEndpoint + '/' + id)
      .pipe(map(res => res));
  }
}
