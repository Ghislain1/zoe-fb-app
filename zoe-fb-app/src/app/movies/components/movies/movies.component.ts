import { Component, OnInit } from '@angular/core';
import { Movie } from '../../../shared/models/movie';
import { Observable } from 'rxjs';
import { MovieFavory } from '../../../shared/models/movie-favory';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../../shared/services/movie.service';
import { MovieFavoryService } from '../../../shared/services/movie-favory.service';

import { switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies: Movie[] = [];
  movies$: Observable<any[]>;
  movies1 = [];
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

    this.populateMovies();
  }



  private populateMovies() {
    this.movieService.getAll().pipe(switchMap(movies => {
      this.movies = movies;
      return this.route.queryParamMap;
    }))
      .subscribe(params => {
        this.category = params.get('category');
        this.applyFilter();
      });


  }


  private applyFilter() {

    this.filteredMovies = (this.category) ? this.movies.filter(p => p.category === this.category) : this.movies;

    this.log(this.filteredMovies);

  }

  private log(obst: any) {

    console.log(" MoviesComponent says---> " + JSON.stringify(obst, null, 2));
  }
}
