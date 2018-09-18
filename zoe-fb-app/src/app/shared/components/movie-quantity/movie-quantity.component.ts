import { Component, Input } from '@angular/core';
import { MovieFavoryService } from '../../services/movie-favory.service';
import { Movie } from '../../models/movie';
import { MovieFavory } from '../../models/movie-favory';

@Component({
  selector: 'app-movie-quantity',
  templateUrl: './movie-quantity.component.html',
  styleUrls: ['./movie-quantity.component.css']
})
export class MovieQuantityComponent {
  @Input('movie') movie: Movie;
  @Input('movie-favory') movieFavory;

  constructor(private movieFavoryService: MovieFavoryService) { }

  addToFavory() {
    this.movieFavoryService.addToFavory(this.movie);
  }

  removeFromFavory() {
    this.movieFavoryService.removeFromFavory(this.movie);
  }


}