import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { CounterComponent } from './components/counter/counter.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { RouterModule } from '@angular/router';
import { FetchDataComponent } from './components/fetch-data/fetch-data.component';
import { PaginationComponent } from './components/pagination/pagination.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', redirectTo: 'vehicles', pathMatch: 'full' }, // Why pathMatch?? and why here??
      { path: 'home', component: HomeComponent },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      // { path: '**', redirectTo: 'home' }, --> Notfound is better
    ])
  ],
  declarations: [
    NavMenuComponent,
    HomeComponent,
    FetchDataComponent,
    CounterComponent,
    PaginationComponent
  ],
  exports: [NavMenuComponent, PaginationComponent]
})
export class CoreModule { }
