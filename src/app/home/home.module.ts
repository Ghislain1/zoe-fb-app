import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutineModule } from './home-routine.module';
import { HomeDescriptionComponent } from './components/description/home-description.component';
import { HomeComponent } from './components/home.component';


@NgModule({
  imports: [
    HomeRoutineModule,
    CommonModule
  ],
  declarations: [HomeDescriptionComponent, HomeComponent]
})
export class HomeModule { }
