import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { NavbarComponent } from './components/navbar.component';

@NgModule({
  imports: [
    SharedModule,
    // RouterModule.forChild([])
  ],
  declarations: [

    // HomeComponent,
    // LoginComponent,
    NavbarComponent,
  ],
  exports: [
    NavbarComponent
  ]
})
export class CoreModule { }
