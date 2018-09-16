
import { LoginComponent } from './components/login/login.component';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  imports: [
    SharedModule,
    // RouterModule.forChild([])
  ],
  declarations: [

    HomeComponent,
    LoginComponent,
    NavbarComponent,
  ],
  exports: [
    NavbarComponent
  ]
})
export class CoreModule { }
