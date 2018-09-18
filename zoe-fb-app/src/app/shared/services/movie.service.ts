import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class MovieService {

  constructor(private db: AngularFireDatabase) { }

  create(movie) {
    return this.db.list('/results').push(movie);
  }

  getAll() {
    return this.db.list('/results').valueChanges();
  }

  get(movieId) {
    return this.db.object('/results/' + movieId);
  }

  update(movieId, movie) {
    return this.db.object('/results/' + movieId).update(movie);
  }

  delete(movieId) {
    return this.db.object('/results/' + movieId).remove();
  }
}
