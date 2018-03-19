import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutineModule } from './home-routine.module';
import { HomeDescriptionComponent } from './components/description/home-description.component';
import { HomeComponent } from './components/home.component';
import { CoreModule } from '../core/core.module';


@NgModule({
  imports: [
    HomeRoutineModule,
    CommonModule,
    CoreModule,
  ],
  declarations: [HomeDescriptionComponent, HomeComponent]
})
export class HomeModule { }
