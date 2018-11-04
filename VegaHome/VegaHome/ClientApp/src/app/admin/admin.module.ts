import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '/admin/dashboard', component: AdminDashboardComponent },

    ])
  ],
  declarations: [AdminDashboardComponent]
})
export class AdminModule { }
