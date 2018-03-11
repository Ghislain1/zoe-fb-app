import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutineModule } from './home-routine.module';
import { HomeDescriptionComponent } from './components/description/home-description.component';


@NgModule({
  imports: [
    HomeRoutineModule,
    CommonModule
  ],
  declarations: [HomeDescriptionComponent]
})
export class HomeModule { }
