import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
 
import { HomeDescriptionComponent } from './components/home-description.component';
import { HomeComponent } from './components/home.component';
import { HomeRoutineModule } from './home-routine.module';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutineModule
  ],
  declarations: [HomeComponent,HomeDescriptionComponent]
})
export class HomeModule { }
