import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DevicesRoutineModule } from './devices-routine.module';
import { DevicesRootComponent } from './components/devices-root/devices-root.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicDeviceComponent } from './components/dynamic-device/dynamic-device.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DevicesRoutineModule
  ],
  declarations: [DevicesRootComponent, DynamicDeviceComponent]
})
export class DevicesModule { }
