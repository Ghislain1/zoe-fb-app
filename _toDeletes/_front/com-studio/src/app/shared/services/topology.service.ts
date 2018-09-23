import { Injectable } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';


@Injectable()
export class TopologyService {

  constructor(private db: HttpClient) { }

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
