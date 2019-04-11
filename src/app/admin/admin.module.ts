import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import {

  MatButtonModule, MatCardModule, MatDialogModule, MatInputModule, MatTableModule,

  MatToolbarModule, MatMenuModule, MatIconModule, MatProgressSpinnerModule, MatFormFieldModule

} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

const adminRoutes: Routes = [
  {
    path: '',
    component: LoginComponent
  }

];


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
   MatButtonModule,
   MatCardModule,
   MatInputModule,
   MatDialogModule,
   MatTableModule,
   MatMenuModule,
   MatIconModule,
   MatProgressSpinnerModule,
   RouterModule.forChild(adminRoutes)
  ],
  declarations: [LoginComponent]
})
export class AdminModule { }
