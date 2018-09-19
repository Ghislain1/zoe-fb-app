import { Input, Component, OnInit } from '@angular/core';
import { MovieFavoryService } from '../../../shared/services/movie-favory.service';
import { Observable } from 'rxjs';
import { MovieFavory } from '../../../shared/models/movie-favory';


@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {
  favory$: Observable<MovieFavory>;

  constructor(private movieFavoryService: MovieFavoryService) { }

  async ngOnInit() {
    this.favory$ = await this.movieFavoryService.getFavory();
  }
}