import { Injectable } from '@angular/core';
import { SaveVehicle } from '../../shared/models/vehicle';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  private readonly vehiclesEndpoint = '/api/vehicles';

  constructor(private httpClient: HttpClient
    //TODOD--> private authHttp: AuthHttp
  ) { }





  create(vehicle) {
    // return this.authHttp.post(this.vehiclesEndpoint, vehicle); TODO:
    return this.httpClient.post(this.vehiclesEndpoint, vehicle);

  }

  getVehicle(id) {
    return this.httpClient.get(this.vehiclesEndpoint + '/' + id);

  }

  getVehicles(filter): any {
    return this.httpClient.get(this.vehiclesEndpoint + '?' + this.toQueryString(filter));

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

  update(vehicle: SaveVehicle) {
    // TODOD-->return this.authHttp.put(this.vehiclesEndpoint + '/' + vehicle.id, vehicle);
    return this.httpClient.put(this.vehiclesEndpoint + '/' + vehicle.id, vehicle);

  }

  delete(id) {
    //TODO ---> return this.authHttp.delete(this.vehiclesEndpoint + '/' + id)
    return this.httpClient.delete(this.vehiclesEndpoint + '/' + id)

  }
}