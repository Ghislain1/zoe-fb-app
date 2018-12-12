
import { MovieFavoryService } from '../../../shared/services/movie-favory.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-movie-favory',
  templateUrl: './movie-favory.component.html',
  styleUrls: ['./movie-favory.component.css']
})
export class MovieFavoryComponent implements OnInit {
  favory$;

  constructor(private movieFavoryService: MovieFavoryService) { }

  async ngOnInit() {
    this.favory$ = await this.movieFavoryService.getFavory();
  }

  clearFavory() {
    this.movieFavoryService.clearFavory();
  }
}
