import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';

import {

  MatButtonModule, MatCardModule, MatDialogModule, MatInputModule, MatTableModule,

  MatToolbarModule, MatMenuModule, MatIconModule, MatProgressSpinnerModule

} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';





@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatToolbarModule,
    HttpClientModule,

   MatButtonModule,

   MatCardModule,

   MatInputModule,

   MatDialogModule,

   MatTableModule,

   MatMenuModule,

   MatIconModule,

   MatProgressSpinnerModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
