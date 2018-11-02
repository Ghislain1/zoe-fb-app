import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleFormComponent } from './components/vehicle-form/vehicle-form.component';
import { VehicleRoutingModule } from './vehicle-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    VehicleRoutingModule
  ],
  declarations: [VehicleFormComponent],
  // exports: [VehicleFormComponent]
})
export class VehicleModule { }
