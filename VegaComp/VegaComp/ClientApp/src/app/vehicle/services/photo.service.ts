import { Photo } from './../../shared/models/photo';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import { Observable } from 'rxjs';

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


    return result.pipe(map(res => res));

  }

  getPhotos(vehicleId): Observable<Photo[]> {
    return this.httpClient.get<Photo[]>(`/api/vehicles/${vehicleId}/photos`).pipe(map(res => res));
  }
}