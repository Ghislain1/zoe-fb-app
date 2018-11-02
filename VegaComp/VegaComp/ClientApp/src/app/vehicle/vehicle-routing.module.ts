import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleFormComponent } from './components/vehicle-form/vehicle-form.component';
import { Router, RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'vehicles/new', component: VehicleFormComponent }
    ])
  ],

})
export class VehicleRoutingModule { }
