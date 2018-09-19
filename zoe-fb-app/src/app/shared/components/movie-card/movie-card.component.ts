import { Component, Input } from '@angular/core';
import { MovieFavoryService } from '../../services/movie-favory.service';
import { Movie } from '../../models/movie';
import { MovieFavory } from '../../models/movie-favory';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent {
  @Input('movie') movie: Movie;
  // tslint:disable-next-line:no-input-rename
  @Input('show-actions') showActions = true;

  // tslint:disable-next-line:no-input-rename
  @Input('movie-favory') movieFavory: MovieFavory;

  constructor(private movieFavoryService: MovieFavoryService) { }

  addToFavory() {
    this.log(this.movie);
    this.movieFavoryService.addToFavory(this.movie);
  }

  private log(toLog: any) {
    console.log(JSON.stringify(toLog, null, 2));
  }

}
