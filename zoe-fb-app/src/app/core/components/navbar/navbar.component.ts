import { Component, OnInit } from '@angular/core';
import { AppUser } from '../../../shared/models/app-user';
import { Observable } from 'rxjs';
import { MovieFavory } from '../../../shared/models/movie-favory';
import { AuthService } from '../../../shared/services/auth.service';
import { MovieFavoryService } from '../../../shared/services/movie-favory.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  appUser: AppUser;
  favories$: Observable<MovieFavory>;

  cart$: Observable<MovieFavory>; // TODO ..


  constructor(private auth: AuthService, private movieFavoryService: MovieFavoryService) {
  }

  async ngOnInit() {

    this.auth.appUser$.subscribe(appUser => this.appUser = appUser);
    this.favories$ = await this.movieFavoryService.getFavory();
    this.cart$ = await this.movieFavoryService.getFavory();

  }

  logout() {
    this.auth.logout();
  }

}
