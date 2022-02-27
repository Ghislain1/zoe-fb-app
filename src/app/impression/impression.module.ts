import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImpressionDashboardComponent } from './components/impression-dashboard/impression-dashboard.component';
import { RouterModule, Routes } from '@angular/router';

const impressionRoutes: Routes = [
  {
    path: '',
    component: ImpressionDashboardComponent
  }

];

@NgModule({
  declarations: [ImpressionDashboardComponent],
  imports: [
    CommonModule,
     RouterModule.forChild(impressionRoutes)
  ]
})
export class ImpressionModule { }
