import { Component, Input } from '@angular/core';
import { MovieFavory } from '../../../shared/models/movie-favory';

@Component({
  selector: 'app-movie-favory-summary',
  templateUrl: './movie-favory-summary.component.html',
  styleUrls: ['./movie-favory-summary.component.css']
})
export class MovieFavorySummaryComponent {

  cart: any; //  TODO GHislain why??
  // tslint:disable-next-line:no-input-rename
  @Input('favory')
  favory: MovieFavory;
}
