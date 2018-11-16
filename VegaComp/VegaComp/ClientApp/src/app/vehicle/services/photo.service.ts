import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Jsonp } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {



  private vehiclePhotoEndpoint = {};

  constructor(private httpClient: HttpClient) { }

  upload(vehicleId, photo) {

    console.log(photo.name);  // --> e.g. img7.jpg

    //TODO: why like this --> api------ vehicles---- id---- photos????
    this.vehiclePhotoEndpoint = `/api/vehicles/${vehicleId}/photos`;

    //Wrapper bild image photo
    var formData = new FormData();
    formData.append('formFile', photo); //TODODODODODOD---------------> sehr wichtig : same paramter name in API e.g.(formFile)
    const result = this.httpClient.post(`/api/vehicles/${vehicleId}/photos`, formData);


    return result.pipe(map(res => JSON.parse(res.toString())));

  }

  getPhotos(vehicleId) {
    return this.httpClient.get(`/api/vehicles/${vehicleId}/photos`).pipe(map(res => JSON.parse(res.toString())));
  }
}