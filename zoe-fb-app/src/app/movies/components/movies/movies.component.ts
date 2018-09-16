import { Component, OnInit } from '@angular/core';
import { Movie } from '../../../shared/models/movie';
import { Observable } from 'rxjs';
import { MovieFavory } from '../../../shared/models/movie-favory';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../../shared/services/movie.service';
import { MovieFavoryService } from '../../../shared/services/movie-favory.service';




@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies: Movie[] = [];
  filteredMovies: Movie[] = [];
  category: string;
  favory$: Observable<MovieFavory>;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private movieFavoryService: MovieFavoryService
  ) {
  }

  async ngOnInit() {
    this.favory$ = await this.movieFavoryService.getFavory();
    this.populatemovies();
  }

  private populatemovies() {
    this.movieService.getAll().valueChanges();


  }


  private applyFilter() {
    this.filteredMovies = (this.category) ?
      this.movies.filter(p => p.category === this.category) :

      this.movies;
  }
}
