import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleFormComponent } from './components/vehicle-form/vehicle-form.component';
import { VehicleRoutingModule } from './vehicle-routing.module';
import { FormsModule } from '@angular/forms';
import { MakeFormComponent } from './components/make-form/make-form.component';
import { ModelFormComponent } from './components/model-form/model-form.component';
import { ModelService } from './services/model.service';
import { VehicleListComponent } from './components/vehicle-list/vehicle-list.component';
import { RouterModule } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { ViewVehicleComponent } from './components/view-vehicle/view-vehicle.component';
import { FeatureFormComponent } from './components/feature-form/feature-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,// TODO: remove this and explain the erro message
    CoreModule,


    VehicleRoutingModule
  ],
  declarations: [VehicleFormComponent, MakeFormComponent, ModelFormComponent, VehicleListComponent, ViewVehicleComponent, FeatureFormComponent],
  providers: [ModelService]
  // exports: [VehicleFormComponent]
})
export class VehicleModule { }
