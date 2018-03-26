import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DevicesRootComponent } from './components/devices-root/devices-root.component';


const devicesRoutes: Routes = [
  { path: 'app-devices-root', component: DevicesRootComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(devicesRoutes)
  ],
  exports: [RouterModule]

})
export class DevicesRoutineModule { }
