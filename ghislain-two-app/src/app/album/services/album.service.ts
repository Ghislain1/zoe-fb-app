import { Injectable } from '@angular/core';
import { Album } from '../models/album';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { AppConfigurationService } from './app-configuration.service';


@Injectable()
export class AlbumService {

  constructor(private httpClient: HttpClient,
    private config: AppConfigurationService) {
  }

  albumList: Album[] = [];
  album: Album = new Album();

  // artistList: Artist[] = [];
  listScrollPos = 0;

  getAlbums(): Observable<any> {
    return this.httpClient.get<Album[]>(this.config.urls.url('albums'))
      .pipe(
        map(albumList => this.albumList = albumList),
        catchError(() => 'TODOGHislain---> new ErrorInfo().parseObservableResponseError')
      );

    // .map(albumList => this.albumList = albumList),
    // .catch(new ErrorInfo().parseObservableResponseError)
  }

  getAlbum(id): Observable<Album> {
    return this.httpClient.get<Album>(this.config.urls.url('album', id));

  }

  newAlbum(): Album {
    this.album = new Album();
    return this.album;
  }

  saveAlbum(album): Observable<any> {
    return this.httpClient.post<Album>(this.config.urls.url('album'),
      album, { withCredentials: true })
      .pipe(map(alb => {
        this.album = alb;

        // explicitly update the list with the updated data
        this.updateAlbum(this.album);
        return this.album;
      }),
        catchError(() => 'new ErrorInfo().parseObservableResponseError')
      );
  }

  deleteAlbum(album: Album): Observable<any> {
    return this.httpClient.delete<boolean>(this.config.urls.url('album', album.Id),
      this.config.requestHeaders)
      .pipe(
        map(result => {
          if (result) {
            this.removeAlbum(album); // client side remove
          }
        }),
        catchError(() => 'TODO EROOR VON ANGULAR SEHEN'));

  }


  /**
  * Updates the .albumList property by updating the actual
  * index entry in the existing list, adding new entries and
  * removing 0 entries.
  * @param album  - the album to update
  */
  updateAlbum(album) {
    const i = this.albumList.findIndex((a) => (a.Id === album.Id));
    if (i > -1) {
      this.albumList[i] = album;
    } else {
      this.albumList.push(album);
      this.albumList.sort((a: Album, b: Album) => {
        const aTitle = a.Title.toLocaleLowerCase();
        const bTitle = b.Title.toLocaleLowerCase();
        if (aTitle > bTitle) {
          return 1;
        }
        if (aTitle < bTitle) {
          return -1;
        }
        return 0;
      });
    }

    this.albumList = this.albumList.filter((a) => a.Id !== 0);
  }

  removeAlbum(album) {
    this.albumList = this.albumList.filter((a) => a.Id !== album.Id);
  }

  addSong(track: any) {

  }

  removeSong(track: any) {

  }


}
