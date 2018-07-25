import { JsonApiParserService } from './json-api-parser.service';
import { CJsonApi } from './../models/jsonapi';
import { ToastrService } from 'ngx-toastr';
import { Foto } from './../models/foto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Album } from '../models/album';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class AlbumService {
  /**
   * Creates an instance of AlbumService.
   * @param {HttpService} http
   *
   * @memberof AlbumService
   */
  constructor(
    private http: HttpClient,
    private toastrService: ToastrService,
    private apiParser: JsonApiParserService
  ) { }
  success: any
  error: any
  /**
   *
   *
   * @param {string} id
   * @returns {Observable<Album>}
   *
   * @memberof AlbumService
   */
  getAlbum(id: string): Observable<Album> {
    return this.http
      .get<{ data: CJsonApi }>(`api/v1/Albums/${id}?data_set=large`)
      .pipe(map(resp => this.apiParser.parseSingleObj(resp.data) as Album));
  }

  getAlbumReviews(Albums): Observable<any> {
    return this.http.get(`Albums/${Albums}/reviews`);
  }
  /**
   *
   *
   * @returns {Array<Foto>}
   *
   * @memberof AlbumService
   */
  getTaxonomies(): any {
    return this.http.get<Array<Foto>>(`api/v1/taxonomies?set=nested`);
  }

  /**
   *
   *
   * @returns {Array<Album>}
   *
   * @memberof AlbumService
   */
  getAlbums(pageNumber: number): Observable<Array<Album>> {
    return this.http
      .get<{ data: CJsonApi[] }>(
        `api/v1/Albums?page=${pageNumber}&per_page=20&data_set=small`
      )
      .pipe(
        map(
          resp => this.apiParser.parseArrayofObject(resp.data) as Array<Album>
        )
      );
  }

  markAsFavorite(id: number): Observable<{}> {
    return this.http.post<{}>(`favorite_Albums`, { id: id });
  }

  removeFromFavorite(id: number): Observable<{}> {
    return this.http.delete<{}>(`favorite_Albums/${id}`);
  }

  getFavoriteAlbums(): Observable<Array<Album>> {
    return this.http
      .get<{ data: CJsonApi[] }>(
        `favorite_Albums.json?per_page=20&data_set=small`
      )
      .pipe(
        map(
          resp => this.apiParser.parseArrayofObject(resp.data) as Array<Album>
        )
      );
  }

  getUserFavoriteAlbums(): Observable<Array<Album>> {
    return this.http
      .get<{ data: CJsonApi[] }>(
        `spree/user_favorite_Albums.json?data_set=small`
      )
      .pipe(
        map(
          resp => this.apiParser.parseArrayofObject(resp.data) as Array<Album>
        )
      );
  }

  // tslint:disable-next-line:max-line-length
  getAlbumsByTaxon(id: string): Observable<any> {
    return this.http
      .get<{ data: CJsonApi[], pagination: Object }>(
        `api/v1/taxons/Albums?${id}&per_page=20&data_set=small`
      )
      .pipe(
        map(
          resp => {
            return {
              pagination: resp.pagination,
              Albums: this.apiParser.parseArrayofObject(resp.data) as Array<Album>
            }
          }
        )
      );
  }

  getAlbumsByTaxonNP(id: string): Observable<Array<Album>> {
    return this.http
      .get<{ data: CJsonApi[] }>(
        `api/v1/taxons/Albums?id=${id}&per_page=20&data_set=small`
      )
      .pipe(
        map(
          resp => this.apiParser.parseArrayofObject(resp.data) as Array<Album>
        )
      );
  }

  getTaxonByName(name: string): Observable<Array<Foto>> {
    return this.http.get<Array<Foto>>(
      `api/v1/taxonomies?q[name_cont]=${name}&set=nested`
    );
  }

  getAlbumsByKeyword(keyword: string): Observable<any> {
    return this.http
      .get<{ data: CJsonApi[], pagination: Object }>(
        `api/v1/Albums?${keyword}&per_page=20&data_set=small`
      )
      .pipe(
        map(
          resp => {
            return {
              pagination: resp.pagination,
              Albums: this.apiParser.parseArrayofObject(resp.data) as Array<Album>
            }
          }
        )
      );
  }

  getChildTaxons(
    FotoId: string,
    taxonId: string
  ): Observable<Array<Foto>> {
    return this.http.get<Array<Foto>>(
      `/api/v1/taxonomies/${FotoId}/taxons/${taxonId}`
    );
  }

  submitReview(AlbumId: any, params: any) {
    return this.http.post(`Albums/${AlbumId}/reviews`, params)
      .pipe(
        map(success => {
          this.success = success
          if (this.success.type === 'info') {
            this.toastrService.info(this.success.message, this.success.type)
            return this.success.type;
          }
          else {
            this.toastrService.success(this.success.message, this.success.type)
            return this.success.type;
          }
        },
          error => {
            this.error = error
            this.toastrService.error(this.error.message, this.error.type)
            return this.error.type
          }));
  }

  getRelatedAlbums(AlbumId: any): Observable<Array<Album>> {
    return this.http
      .get<{ data: CJsonApi[] }>(`api/Albums/${AlbumId}/relations`)
      .pipe(
        map(
          resp => this.apiParser.parseArrayofObject(resp.data) as Array<Album>
        )
      );
  }
}
