import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class MovieService {

  constructor(private db: AngularFireDatabase) { }

  create(movie) {
    return this.db.list('/movies').push(movie);
  }

  getAll() {
    return this.db.list('/movies');
  }

  get(movieId) {
    return this.db.object('/movies/' + movieId);
  }

  update(movieId, movie) {
    return this.db.object('/movies/' + movieId).update(movie);
  }

  delete(movieId) {
    return this.db.object('/movies/' + movieId).remove();
  }
}
