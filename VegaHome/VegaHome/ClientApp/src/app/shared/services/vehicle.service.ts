import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SaveVehicle } from '../models/vehicle';
import { SaveModel } from '../models/model';



@Injectable()
export class VehicleService {
  private readonly vehiclesEndpoint = '/api/vehicles';
  private readonly modelVehiclesEndpoint = '/api/models';



  constructor(private http: HttpClient
    // , private authHttp: AuthHttp --> TODO no exisz no more
  ) { }

  getFeatures() {
    return this.http.get<any[]>('/api/features')
      .pipe(map(res => res));
  }

  getMakes() {
    return this.http.get<any[]>('/api/makes')
      .pipe(map(res => res));
  }

  createModelVehicle(model) {
    return this.http.post<SaveModel>(this.modelVehiclesEndpoint, model).pipe(map(res => res));
  }

  create(vehicle) {
    // TODO for autthoring alsoin in api controller
    // const username: String = 'username';
    // const password: String = 'password';
    // const headers: HttpHeaders = new HttpHeaders();
    // headers.append('Authorization', 'Basic ' + btoa(username + ':' + password));
    // headers.append('Content-Type', 'application/x-www-form-urlencoded');

    return this.http.post<SaveVehicle>(this.vehiclesEndpoint, vehicle
      // , { headers: headers }
    )
      .pipe(map(res => res));
  }

  getVehicle(id) {
    return this.http.get<any>(this.vehiclesEndpoint + '/' + id)
      .pipe(map(res => res));
  }

  getVehicles(filter) {
    const endPointV = this.vehiclesEndpoint + '?' + this.toQueryString(filter);
    const reps = this.http.get<any[]>(endPointV);
    return reps;

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
