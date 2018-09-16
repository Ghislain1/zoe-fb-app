import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './core/components/login/login.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { MoviesModule } from './movies/movies.module';
import { MoviesComponent } from './movies/components/movies/movies.component';
import { AdminModule } from './admin/admin.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AdminModule, // TODO: Cause it s empty
    MoviesModule,
    CoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    RouterModule.forRoot([
      { path: '', component: MoviesComponent },
      { path: 'login', component: LoginComponent },
    ])
  ],
  providers: [
    // AdminAuthGuard, // TODO Why?
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
