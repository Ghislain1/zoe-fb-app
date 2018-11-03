import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleService } from './services/vehicle.service';
import { AuthService } from './services/auth.service';

@NgModule({
  imports: [
    CommonModule,

  ],
  declarations: [],
  providers: [VehicleService, AuthService]
})
export class SharedModule { }
