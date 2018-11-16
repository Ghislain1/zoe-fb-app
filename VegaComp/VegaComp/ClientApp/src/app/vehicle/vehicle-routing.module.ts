import { FeatureFormComponent } from './components/feature-form/feature-form.component';
import { ViewVehicleComponent } from './components/view-vehicle/view-vehicle.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleFormComponent } from './components/vehicle-form/vehicle-form.component';

import { MakeFormComponent } from './components/make-form/make-form.component';
import { ModelFormComponent } from './components/model-form/model-form.component';
import { RouterModule } from '@angular/router';
import { VehicleListComponent } from './components/vehicle-list/vehicle-list.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'vehicles/new', component: VehicleFormComponent }, // --> Create ne route for the new component
      { path: 'vehicles/edit/:id', component: VehicleFormComponent },
      { path: 'vehicles/:id', component: ViewVehicleComponent },
      { path: 'vehicles', component: VehicleListComponent },

      // ((features's Routes))
      { path: 'features/new', component: FeatureFormComponent },

      { path: 'makes/new', component: MakeFormComponent }, // --> Create ne route for the new component
      { path: 'models/new', component: ModelFormComponent },

    ])
  ],

})
export class VehicleRoutingModule { }
