import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';
import { DataTableModule } from 'angular-6-datatable';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { CategoryService } from './services/category.service';
import { MovieFavoryService } from './services/movie-favory.service';
import { MovieService } from './services/movie.service';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { MovieQuantityComponent } from './components/movie-quantity/movie-quantity.component';
import { AuthGuard } from './services/auth-guard.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CustomFormsModule,
    DataTableModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  declarations: [
    MovieCardComponent,
    MovieQuantityComponent
  ],
  exports: [
    MovieCardComponent,
    MovieQuantityComponent,
    CommonModule,
    FormsModule,
    CustomFormsModule,
    DataTableModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [
    AuthService,
    AuthGuard, //TODO  Why??
    UserService,
    CategoryService,
    MovieService,
    MovieFavoryService

  ]
})
export class SharedModule { }