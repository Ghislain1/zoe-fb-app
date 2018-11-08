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
      { path: 'makes/new', component: MakeFormComponent }, // --> Create ne route for the new component
      { path: 'models/new', component: ModelFormComponent },
      { path: 'vehicles', component: VehicleListComponent },
    ])
  ],

})
export class VehicleRoutingModule { }
