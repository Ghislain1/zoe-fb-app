import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './components/movies/movies.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { MovieFilterComponent } from './components/movies/movie-filter/movie-filter.component';
import { CheckOutComponent } from './components/check-out/check-out.component';
import { AuthGuard } from '../shared/services/auth-guard.service';
import { MovieFavoryComponent } from './components/movie-favory/movie-favory.component';
import { MovieFavorySummaryComponent } from './components/movie-favory-summary/movie-favory-summary.component';
import { MovieFormComponent } from './components/movie-form/movie-form.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: 'app-movies', component: MoviesComponent },
      { path: 'app-movie-favory', component: MovieFavoryComponent },
      { path: 'app-check-out', component: CheckOutComponent, canActivate: [AuthGuard] }, //TODO: WHy  AuthGuard
      //  { path: 'order-success/:id', component: OrderSuccessComponent, canActivate: [AuthGuard] },
      // { path: 'my/orders', component: MyOrdersComponent, canActivate: [AuthGuard] },
    ])
  ],
  declarations: [
    MoviesComponent,
    MovieFavoryComponent,
    CheckOutComponent,
    // OrderSuccessComponent,
    // MyOrdersComponent,
    MovieFilterComponent,
    MovieFavorySummaryComponent,
    MovieFormComponent
  ]
})
export class MoviesModule { }
