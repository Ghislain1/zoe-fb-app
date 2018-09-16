import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './components/movies/movies.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { MovieFilterComponent } from './components/movies/movie-filter/movie-filter.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: 'movies', component: MoviesComponent },
      // { path: 'shopping-cart', component: ShoppingCartComponent },
      //    { path: 'check-out', component: CheckOutComponent, canActivate: [AuthGuard] },
      //  { path: 'order-success/:id', component: OrderSuccessComponent, canActivate: [AuthGuard] },
      // { path: 'my/orders', component: MyOrdersComponent, canActivate: [AuthGuard] },
    ])
  ],
  declarations: [
    MoviesComponent,
    // ShoppingCartComponent,
    //  CheckOutComponent,
    // OrderSuccessComponent,
    // MyOrdersComponent,
    MovieFilterComponent,
    // ShoppingCartSummaryComponent,
    // ShippingFormComponent
  ]
})
export class MoviesModule { }
