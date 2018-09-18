import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { MovieFavory } from '../models/movie-favory';
import { Observable } from 'rxjs';


import { Movie } from '../models/movie';

import { map, take } from 'rxjs/operators';
import { MovieFavoryItem } from '../models/movie-favory-item';


@Injectable()
export class MovieFavoryService {

  constructor(private db: AngularFireDatabase) { }

  async getFavory(): Promise<Observable<MovieFavory>> {
    const favoryId = await this.getOrCreateFavoryId();

    const pathOrRef = '/movie-favory/' + favoryId;
    const values = this.db.list(pathOrRef).valueChanges();

    const ss = values.pipe(map(ii => new MovieFavory({ ...ii.values })));



    return ss;
  }

  async addToFavory(movie: Movie) {

    this.updateItem(movie, 1);
  }

  async removeFromFavory(movie: Movie) {
    this.updateItem(movie, -1);
  }

  async clearFavory() {
    const favoryId = await this.getOrCreateFavoryId();
    this.db.object('/movie-favory/' + favoryId + '/items').remove();
  }


  private create() {
    return this.db.list('/shopping-carts').push({
      dateCreated: new Date().getTime()
    });
  }

  private getItem(cartId: string, movieId: string) {
    return this.db.object('/shopping-carts/' + cartId + '/items/' + movieId);
  }

  private async getOrCreateFavoryId(): Promise<string> {
    const favoryId = localStorage.getItem('favoryId');
    if (favoryId) {
      return favoryId;
    }

    const result = await this.create();
    localStorage.setItem('favoryId', result.key);
    return result.key;
  }

  private async updateItem(movie: Movie, change: number) {
    const favoryId = await this.getOrCreateFavoryId();
    this.log(favoryId);
    this.log(movie);
    const item$ = this.getItem(favoryId, movie.$key);

  }

  private log(obst: any) {
    console.log(JSON.stringify(obst, null, 2));
  }
}
