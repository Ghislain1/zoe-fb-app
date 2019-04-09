import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ClassicUrlGuard } from './services/classic-url.guard';
import {
  MatToolbarModule,
  MatCheckboxModule,
  MatButtonModule,
   MatButtonToggleModule,
   MatSnackBarModule,
    MatMenuModule,
    MatIconModule ,
  MatProgressSpinnerModule } from '@angular/material';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatButtonToggleModule,
    MatSnackBarModule,
     MatMenuModule,
     MatIconModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule
  ],
  declarations: [
    NavbarComponent,
    FooterComponent
  ],
  exports: [
    CommonModule,
    MatButtonModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    // exported components
    NavbarComponent,
    FooterComponent,

  ],
  providers: [
    ClassicUrlGuard
  ]
})
export class SharedModule { }
